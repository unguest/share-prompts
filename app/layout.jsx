import React from 'react';
import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
	title: 'Promptopia',
	description: 'Share your best IA prompts !',
};

export default function RootLayout({ children }) {
	return (
	<html lang="en">
		<body>
			<Provider>
				<div className='main'>
					<div className='gradient'></div>
				</div>

				<main className='app'>
					<Nav/>
					{children}
				</main>
			</Provider>
	  </body>
	</html>
	);
}