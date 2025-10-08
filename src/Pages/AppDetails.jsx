import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'

import Ratings from './Ratings';


const AppDetails = () => {
    const {id} = useParams();
    const {apps,loading,error} = useApps();
    if(loading) return <p>LOading....</p>
    const details = apps?apps.find(ap => String(ap.id) === id):undefined;
    if (!details) {
        return <p>App details not found or failed to load data.</p>
    }
    
    const {image,title,companyName,description,size,reviews,ratingAvg,downloads,ratings} = details;
   
    // let ins="Install Now";
    const handleInstalled = () =>{
        
        const existingItem = JSON.parse(localStorage.getItem('InstalledList')) ;
        let updatedList = []
        if(existingItem){
            const isDuplicate = existingItem.some(p=>p.id===details.id)
            if(isDuplicate){
                return alert('Sorry')
            }
            else{
                updatedList = [...existingItem,details]
            }
            
        }else{
            updatedList.push(details);
        }
        localStorage.setItem('InstalledList',JSON.stringify(updatedList))
    }
    
    return (
        <div className='max-w-11/12 mx-auto w-[100%] pt-16 '>
             
            <div className='flex  gap-8 border-b-2 border-gray-400'>
                 <figure className=''><img className='rounded-4xl  pb-4 h-72'  src={image} alt="App" /></figure>
                 <div className='text-left flex-1'>
                    <h1 className='text-left text-3xl font-bold pb-2'>{title}</h1>
                    <p className='border-b-2 border-gray-400 w-full text-gray-500 pb-3'>Developed by <span className='text-purple-700 font-bold'>{companyName}</span></p>
                    <div className='flex justify-between max-w-5/11 mt-4'>
                         <div className='space-y-2'>
                             <figure><img src={download} alt="" /></figure>
                             <p className='text-gray-500'>Downloads</p>
                              <h3 className='text-4xl font-bold'>{downloads}</h3>
                         </div>
                         <div className='space-y-2'>
                             <figure><img src={star} alt="" /></figure>
                             <p className='text-gray-500'>Average Ratings</p>
                              <h3 className='text-4xl font-bold'>{ratingAvg}</h3>
                         </div>
                         <div className='space-y-2'>
                             <figure><img src={review} alt="" /></figure>
                             <p className='text-gray-500'>Reviews</p>
                              <h3 className='text-4xl font-bold'>{reviews}</h3>
                         </div>
                    </div>
                    <button onClick={() => 
                        
                        handleInstalled()
                        
                        } className='bg-[rgba(0,211,144,1)] mt-3 py-2 px-3 rounded-2xl text-white cursor-pointer font-bold'>Install Now (<span>{size}MB</span>)</button>
                
            </div>
            
            </div>
            <div className='my-24'>
                <Ratings ratings={ratings}></Ratings>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Description</h1><br />
                <p>{description}</p>
            </div>
            
        </div>
    
    );
};

export default AppDetails;