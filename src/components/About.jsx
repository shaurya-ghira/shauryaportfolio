import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Shauryaditya Singh, glad you're here. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a web development enthusiast with a passion for building cool & interactive
                 webapps. With a solid foundation in front-end development, I'm now exploring
                  full-stack development with Django. I like to work with other technologies as well, 
                  including Java, python, C. I'm currently seeking hands-on experience and insights into the
                   corporate world. If you like what you see, and share my passion, I'd love to collaborate and learn new stuff.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
