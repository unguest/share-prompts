'use client';

import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProvider, getProviders } from 'next-auth/react';

const Nav = () => {

	const isUserLoggedIn = true;
	const [providers, setProviders] = useState(null);
	const [toggleDropdown, settoggleDropdown] = useState(false);

	useEffect(() => {
		const setProviders = async () => {
			const response = await getProviders();

			setProviders(response);
		};
	});

	return (
		<nav className='flex-between w-full mb-16 pt-3'>
			<Link href='/' className='flex gap-2 flex-center'>
				<Image
					src='/assets/images/logo.svg'
					alt='Promptopia logo'
					width={30}
					height={30}
					className='object-contain'
				/>
				<p className='logo_text'>Promptopia</p>
			</Link>

			{/* Desktop navigation */}
			<div className='sm:flex hidden'>
				{isUserLoggedIn ? (
					<div className='flex gap-3 md:gap-5'>
						<Link href='/create-prompt' className='black_btn'>Create Prompt</Link>

						<button type='button' onClick={signOut} className='outline_button'>
							Sign Out
						</button>

						<Link 
							href='/profile'
						>
							<Image
								href='/profile'
								src='/assets/images/logo.svg'
								width={37}
								height={37}
								alt='profile'
								className='rounded-full'
							/>
						</Link>
					
					</div>

				)
					:
					<React.Fragment>
						{
							providers && Object.values(providers).map((provider) => (
								<button 
									type='button'
									key={provider.name}
									onClick={() => signIn(provider.id)}
									className='black_btn'
								>
									Sign In
								</button>
							)
							)}
					</React.Fragment>
				}
			</div>


			{/* Mobile navigation */}
			<div className='sm:hidden flex relative'>
				{isUserLoggedIn ?
					<div className='flex'>
						<Image
							src='/assets/images/logo.svg'
							width={37}
							height={37}
							alt='profile'
							className='rounded-full'
							onClick={() => 
								settoggleDropdown((prev) => !prev
								)}
						/>

						{toggleDropdown && (
							<div className='dropdown'>
								<Link
									href='/profile'
									className='dropdown_link'
									onClick={() => settoggleDropdown(false)}
								>
									My Profile
								</Link>

								<Link
									href='/create-prompt'
									className='dropdown_link'
									onClick={() => settoggleDropdown(false)}
								>
									Create Prompt
								</Link>

								<button
									type='button'
									onClick={() => {
											settoggleDropdown(false);
											signOut();
										}
									}
									className="mt-5 w-full black_btn"
								>
									Sign Out
								</button>

							</div>
						)}

					</div>
					:
					<React.Fragment>

					</React.Fragment>
				}
			</div>

		</nav>
	);
};

export default Nav;