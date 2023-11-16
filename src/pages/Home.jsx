import React from 'react';
import Typed from 'react-typed';

const Home = () => {
  return (
    <>
       <div className='w-full'>
            <div className='max-w-[1240px] p-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='col-span-2'>
                    <div className='flex flex-col items-center md:items-start justify-center h-full gap-4'>
                        <h4 className='text-3xl'>Hello, It's me</h4>
                        <h1 className='text-6xl font-extrabold'>Adarsh K. Shri.</h1>
                        <h4 className='text-2xl'>And I'm a 
                            <b className='text-[#008EC8]'>
                                <Typed
                                    className='pl-3'
                                    strings={[
                                        'React Js Developer...',
                                        'UI/UX Developer...',
                                        'Frontend Developer...']}
                                    typeSpeed={100}
                                    backSpeed={100}
                                    loop={true}
                                />
                            </b>
                        </h4>
                        
                        <p>
                            I am a qualified and professional Front-End Developer with 2 years of 
                            experience in ReactJs and website design . Strong creative and analytical skills. 
                            Team player with an eye for detail.
                            If you are looking for a Front-End Developer with skills, please 
                            feel free to get in touch with me.
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-center md:justify-end'>  
                    <img style={{border:"10px solid #008EC8"}} className='rounded-lg' src="https://img.freepik.com/premium-photo/young-man-suit-man-with-beard-stylish-male-portrait-black-background-black-white-photo-male-model-studio-portrait-guy-classic-suit_154724-49.jpg?w=360" alt="profile_pic" />   
                </div>
            </div>

       </div>
    </>
  )
}

export default Home;