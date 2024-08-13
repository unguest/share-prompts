import React from 'react'
import Feed from '@/components/Feed'

const Home = () => {
  return (
	<section className='w-full flex-center flex-col'>
		<h1 className='head_text text-center'>
			Discover and share
			<br className='max-md:hidden'/>
			<span className='orange_gradient text-center'> the best IA prompts.</span>
		</h1>
		<p className='desc text-center'>
			Promptopia is an Open-Source AI prompting tool wich allows you
			to discover, create and share creative prompts for your favorite LLMs.
		</p>
		
		<Feed/>

	</section>
  )
}

export default Home