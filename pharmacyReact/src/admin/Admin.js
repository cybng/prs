import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'

export default function Admin() {
	return (
		<div>
			<div className="flex h-screen bg-gray-100">
				<div className="flex-1 flex flex-col overflow-hidden">
					{/*Header Part*/}
          <Header/>
            <div className="flex h-full">
					{/*Sidebar Part*/}
          <Sidebar/>
          {/*Main*/}
					<main className="w-full h-full m-1">
						<div className="w-full h-64 bg-white mb-5 border-1 shadow-sm"></div> 
					</main>
					<nav className="flex w-72 h-full bg-gray-100"></nav>
          
				</div>
				</div>
			</div>
		</div>
	)
}