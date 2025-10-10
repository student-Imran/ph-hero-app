import React from 'react';
import googlePlay from '../assets/fi_16076057.png'
import appStore from '../assets/fi_5977575.png'
import hero from '../assets/hero.png'
import useApps from '../Hooks/useApps';
import App from './App';
import Apps from './Apps';
import { NavLink } from 'react-router';
import LoadingSpinner from './LoadingSpinner';

const Home = () => {
    const data = useApps();
    const {apps,loading} = data;
    const homeApps = apps.slice(0,8);
    if(loading) return <LoadingSpinner></LoadingSpinner>
    
    return (
        <div>
            <div className="hero mt-8">
  <div className="hero-content text-center">
    <div className="max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold text-[#001931]">We Build <br />
    <span className='text-blue-600 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
      <p className="py-6 text-gray-400"> 
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className='flex gap-4 justify-center items-center'>
         <button 
         onClick={() => window.open('https://play.google.com/store', '_blank')}
         className="btn  flex items-center gap-2"
       >
         <span className='flex justify-center items-center gap-2'><img src={googlePlay} alt="" /> <p>Google Play</p> </span>
       </button>
         <button 
         onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
         className="btn  flex items-center gap-2"
       >
         <span className='flex justify-center items-center gap-2'><img src={appStore} alt="" /> <p>App Store</p> </span>
       </button>
      </div>
      
    </div>
  </div>
            </div>
            <div className='flex justify-center items-center mt-6'>
                <figure><img src={hero} alt="" /></figure>
            </div>
            <div className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] w-full flex flex-col  justify-center items-center  space-y-7 mb-6'>
                <h1 className='text-3xl md:text-4xl text-white font-bold py-10'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col items-center md:flex-row lg:flex-row justify-center md:justify-around lg:justify-around   w-[100%] max-w-[1200px] space-y-8 '>
                    <div className='space-y-2 max-w-48  w-[100%]'>
                        <p className='text-gray-300'>Total Downloads</p>
                        <p className='text-white font-bold text-3xl md:text-4xl lg:text-5xl '>29.6M</p>
                        <p className='text-gray-300'>21% more than the last month</p>
                    </div>
                    <div className='space-y-2 max-w-48  w-[100%]'>
                        <p className='text-gray-300'>Total Reviews</p>
                        <p className='text-white font-bold text-3xl md:text-4xl lg:text-5xl'>906K</p>
                        <p className='text-gray-300'>46% more than the last month</p>
                    </div>
                    <div className='space-y-2  max-w-48  w-[100%]'>
                        <p className='text-gray-300'>Active Apps</p>
                        <p className='text-white font-bold text-3xl md:text-4xl lg:text-5xl'>132+</p>
                        <p className='text-gray-300'>31 more will launch</p>
                    </div>
                </div>

            </div>
              
              <div className='flex justify-center items-center flex-col space-y-2 my-8'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Trending Apps</h1>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
              </div>
            <div className=' max-w-11/12 mx-auto w-full gap-6  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10'>
               {
                homeApps.map(app =><App key={app.id} app={app}></App>)
               }
            </div>
            <NavLink to='/apps' className='p-5 font-bold flex justify-center items-center'>
                <p className='text-white bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] rounded-3xl p-4'>See All Applications  . . .</p> 
            </NavLink>

        </div>
    );
};

export default Home;