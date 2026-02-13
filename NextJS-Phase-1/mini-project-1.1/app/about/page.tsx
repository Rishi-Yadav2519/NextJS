import React from 'react'

const About = () => {
  return (
    <>
    <section className='flex flex-col items-center p-24'>
      <h1 className="text-4xl font-bold">About Page</h1>
      <p className="mt-10 text-lg text-gray-300">This is the about page of our Next.js application.</p>
    </section>
    <section className='flex flex-col items-center p-10'>
      <h2 className="text-2xl font-bold">My Mission</h2>
      <p className="mt-10 text-lg text-gray-300">I am going to learn NextJS with the help of co-pilot AI and multiple references. I am going to be a full-stack developer.</p>
    </section>
    </>
  )
}

export default About
