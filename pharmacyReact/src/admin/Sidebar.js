import React from 'react';
import {Link} from 'react-router-dom';

export default function Sidebar() {
	return (
		<div>
		<nav className="flex w-72 h-full bg-white border-r-2 border-gray-100">
						<div class="overflow-y-auto overflow-x-hidden flex-grow">
                      <ul class="flex flex-col py-6 space-y-1">
                          <li class="px-5">
                              <div class="flex flex-row items-center h-8">
                                  <div class="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Dashboard</div>
                              </div>
                          </li>
                          <li>
                              <Link to={"/admin/addcategory"} class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                  <span class="inline-flex justify-center items-center ml-4">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                  </span>
                                  <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Add Category</span>
                              </Link>
                          </li>
                          <li>
                              <Link to={"/admin/upload"} href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                  <span class="inline-flex justify-center items-center ml-4">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                  </span>
                                  <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Add Products</span>
                              </Link>
                          </li>
                          <li>
                              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                  <span class="inline-flex justify-center items-center ml-4">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                  </span>
                                  <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Registration Approval</span>
                              </a>
                          </li>
                          <li>
                              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                  <span class="inline-flex justify-center items-center ml-4">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                  </span>
                                  <Link to="/admin/approval" class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Product CSV Approval</Link>
                              </a>
                          </li>
                          <li>
                              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                  <span class="inline-flex justify-center items-center ml-4">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                  </span>
                                  <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">New Order Request </span>
                              </a>
                          </li>
                          <li>
                              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                  <span class="inline-flex justify-center items-center ml-4">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                  </span>
                                  <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Quotation for customers</span>
                              </a>
                          </li>
                          <li>
                              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                  <span class="inline-flex justify-center items-center ml-4">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                  </span>
                                  <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Tax/Proforma invoice</span>
                              </a>
                          </li>
                          <li>
                              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                  <span class="inline-flex justify-center items-center ml-4">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                  </span>
                                  <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Order Pending </span>
                              </a>
                          </li>
                          <li>
                              <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-500 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                  <span class="inline-flex justify-center items-center ml-4">
                                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                  </span>
                                  <span class="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Order Delivered</span>
                              </a>
                          </li>
                          </ul>
                          </div>
					</nav>
			
		</div>
	)
}