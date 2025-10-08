import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';

const AppDetails = () => {
    const {id} = useParams();
    const {apps,loading,error} = useApps();
    if(loading) return <p>LOading....</p>
    const details = apps?apps.find(ap => String(ap.id) === id):undefined;
    if (!details) {
        return <p>App details not found or failed to load data.</p>
    }
    
    const {image,title,companyName,description,size,reviews,ratingAvg,downloads,ratings} = details;
    return (
        <div>
            <div className='flex justify-between'>
                 <figure><img src={image} alt="App" /></figure>
                 <h1>{title}</h1>
            </div>
        </div>
    );
};

export default AppDetails;