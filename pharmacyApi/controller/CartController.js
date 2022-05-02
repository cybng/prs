const mongoose = require("mongoose");
const Cart = require("../modal/cartModel");
const User = require("../modal/userModal");
var nodemailer = require('nodemailer');
const Availbility = require("../modal/availbilityModal");
const Product = require("../modal/sellerProductModel");

function runUpdate(condition, updateData) {
  return new Promise((resolve, reject) => {
    //you update code here

    Cart.findOneAndUpdate(condition, updateData, { upsert: true })
      .then((result) => resolve())
      .catch((err) => reject(err));
  });
}

exports.addItemToCart = (req, res) => {
  Cart.findOne({ user: req.body.user }).exec((error, cart) => {
    if (error) return res.status(400).json({ error });
    if (cart) {
      //if cart already exists then update cart by quantity
      let promiseArray = [];

      req.body.cartItems.forEach((cartItem) => {
        const product = cartItem.product;
        const item = cart.cartItems.find((c) => c.product == product);
        let condition, update;
        if (item) {
          condition = { user: req.body.user, "cartItems.product": product };
          update = {
            $set: {
              "cartItems.$": cartItem,
            },
          };
        } else {
          condition = { user: req.body.user };
          update = {
            $push: {
              cartItems: cartItem,
            },
          };
        }
        promiseArray.push(runUpdate(condition, update));
        //Cart.findOneAndUpdate(condition, update, { new: true }).exec();
        // .exec((error, _cart) => {
        //     if(error) return res.status(400).json({ error });
        //     if(_cart){
        //         //return res.status(201).json({ cart: _cart });
        //         updateCount++;
        //     }
        // })
      });
      Promise.all(promiseArray)
        .then((response) => res.status(201).json({ response }))
        .catch((error) => res.status(400).json({ error }));
    } else {
      //if cart not exist then create a new cart
      const cart = new Cart({
        user: req.body.user,
        cartItems: req.body.cartItems,
      });
      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          return res.status(201).json({ cart });
        }
      });
    }
  });
};

// exports.addToCart = (req, res) => {
//     const { cartItems } = req.body;
//     if(cartItems){
//        if(Object.keys(cartItems).length > 0){
//            Cart.findOneAndUpdate({
//                "user": req.body.user
//            }, {
//                "cartItems": cartItems
//            }, {
//                 upsert: true, new: true, setDefaultsOnInsert: true
//            }, (error, cartItems) => {
//                if(error) return res.status(400).json({ error });
//                if(cartItems) res.status(201).json({ message: 'Added Successfully' });
//            })
//        }
//        //res.status(201).json({ cartItems });
//     }else{
//         //res.status(201).json({ req });
//     }
// }

exports.getCartItems = (req, res) => {
  //const { user } = req.body.payload;
  //if(user){
  Cart.findOne({ user: req.body.user })
    .populate("cartItems.product", "_id name price productPictures")
    .exec((error, cart) => {
      if (error) return res.status(400).json({ error });
      if (cart) {
        let cartItems = {};
        cart.cartItems.forEach((item, index) => {
          cartItems[item.product._id.toString()] = {
            _id: item.product._id.toString(),
            name: item.product.name,
            img: item.product.productPictures[0].img,
            price: item.product.price,
            qty: item.quantity,
          };
        });
        res.status(200).json({ cartItems });
      }
    });
  //}
};

// new update remove cart items
exports.removeCartItems = (req, res) => {
  const { productId } = req.body.payload;
  if (productId) {
    Cart.update(
      { user: req.body.user },
      {
        $pull: {
          cartItems: {
            product: productId,
          },
        },
      }
    ).exec((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        res.status(202).json({ result });
      }
    });
  }
};

exports.checkAvailbility=(req,res)=>{
  console.log(req.body)
 const saveData= new Availbility({
  product:req.body,status:"pending"
 })

 saveData.save((err,data)=>{
  if(err){
    return res.status(201).json({"msg":"Something went wrong"});
  }
  if(data){
    return res.status(200).json(data); 
  }
 })
}

exports.requestdata=(req,res)=>{
  const {requestId} = req.body;  
   Cart.find({ "cartItems": { $elemMatch: { $or: [
        {
         uploadby:requestId
        }
      ]} } },(err,data)=>{
    if(err){
      console.log(err)
      return res.status(201).json({msg:"Something went wrong"})
    }
    if(data){ 
   
    var axa=[]
    data[0].cartItems.forEach((dtReq)=>{
      if(dtReq.uploadby===requestId && dtReq.status==="pending"){
        axa.push(dtReq);
          
      }
    })

    return res.status(200).json(axa);
  


      
    }
  })
 
}

exports.updateavaility=(req,res)=>{
  const {userId} = req.body;
  const allId=[];
  const mailDataInfo=[];
  Cart.find({user:userId},(err,data)=>{
    if(err){
      return res.status(201).json({msg:"Something went wrong"});
    }
    if(data){
      // console.log(data);
      data.forEach((dt)=>{
        dt.cartItems.forEach((dtData,index)=>{
          // console.log(dtData.product)  
          // console.log(dtData.status)
          // allId.push(dtData.product);
          // console.log(index);
          // console.log("UploadBy id"+dtData.uploadby);
          User.find({_id:dtData.uploadby},(errSent,uploadSent)=>{
            uploadSent.forEach((sentMail)=>{
              var transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: 'r4hmail@gmail.com',
                    pass: '#Rahuly890'
                  }
                });
                
                var mailOptions = {
                  from: 'r4hmail@gmail.com',
                  to: sentMail.email,
                  subject: "New Mail"+sentMail.email,
                  text: 'That was easy!'
                };
                
                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                  } else {
                    console.log("Email sent");
                  }
                });
            })
          })
          Cart.update({"cartItems.product":dtData.product},{"cartItems.$.status":"pending"},{multi:true},(errUpdate,dataUpdate)=>{
            if(errUpdate){
              console.log(errUpdate)
            }
            if(dataUpdate){
              // console.log("datatatat")
              // console.log(dataUpdate)

            }
          }); 
        })
      })
      return res.status(200).json(data);
    }
  })
  

}
exports.approvalavaility=(req,res)=>{
  const {approvalId} = req.body;
  const allId=[];
  const mailDataInfo=[];
  Cart.find({"cartItems.$.product":approvalId},(err,data)=>{
    if(err){
      return res.status(201).json({msg:"Something went wrong"});
    }
    if(data){  
            
          Cart.findOneAndUpdate({"cartItems.product":approvalId},{"cartItems.$.status":"approved"},(errUpdate,dataUpdate)=>{
            if(errUpdate){
              console.log(errUpdate)
            }
            if(dataUpdate){
              // console.log("datatatat")
              // console.log(dataUpdate)
              return res.status(200).json(dataUpdate);

            }
          });  
      
    }
  })
  

}


