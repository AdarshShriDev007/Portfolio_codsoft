import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-[#F8F9FA] py-16'>
      <div className='flex flex-col items-center gap-3 mb-10'>
        <div className='bg-[#008EC8] w-[100px] text-center text-white'>About Me</div>
        <h2 className='text-4xl font-extrabold'>Know Me More</h2>
      </div>
      
      <div className='max-w-[1240px] mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='col-span-2'>
          <h2 className='text-3xl'>
            Hi, I'm <b style={{borderBottom: "3px solid #008EC8"}}>Adarsh K. Shri.</b>
          </h2>
          <br />
          <p>
            I am a Front-End Developer with 2 years of experience in ReactJs and website design. 
            Strong creative and analytical skills. Team player with an eye for detail. Recently 
            I have done a specialization in ReactJs course from Wap Institute, which has given me 
            the latest skills and knowledge in the Front-End Development industry.
            <br /><br />
            My focus is on designing and developing websites that look great and work well. 
            I am skilled in a range of programming, technologies and platforms, including HTML, 
            CSS, Tailwind CSS, JavaScript, React, Redux, Material UI, Firebase, Axios, and Git. 
            I have created website clones of famous industries, such as WhatsApp, Facebook, Gmail,
            LinkedIn, Netflix, Google Drive and many more.
            <br /><br />
            I enjoy working with other Front-End Developers and designers to make websites that 
            match the client's brand and business objectives. I am committed to keeping up with the 
            latest industry trends and best practices, and I attend professional Front-End Developer 
            courses to improve my skills.
            <br /><br />
            My goal is to create websites that are both visually appealing and easy to use. 
            I take pride in exceeding client expectations and delivering projects on time.
            <br /><br />
            If you are looking for a Front-End Developer with skills, please feel free to get 
            in touch with me.
          </p>
        </div>

        <div className='flex flex-col justify-center gap-4'>
          <div>
            <h4>Name:</h4>
            <h3 style={{borderBottom: "2px solid #008EC8"}} className='font-bold'>Adarsh K. Shri.</h3>
          </div>

          <div>
            <h4>Email:</h4>
            <h3 style={{borderBottom: "2px solid #008EC8"}} className='font-bold'>adarshshrivastava.dev@gmail.com</h3>
          </div>

          <div>
            <h4>Date of birth:</h4>
            <h3 style={{borderBottom: "2px solid #008EC8"}} className='font-bold'>16 January, 2001</h3>
          </div>

          <div>
            <h4>From:</h4>
            <h3 style={{borderBottom: "2px solid #008EC8"}} className='font-bold'>New Delhi, Delhi, India</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;