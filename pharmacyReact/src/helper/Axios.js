import axios from "axios";

const axiosInstance = axios.create({
	baseUrl:"http://localhost:3000/api",
	// header:{
	// 	'Authorization':token?`Bearer ${token}`:""
	// }
});

export default axiosInstance;