import React, { useEffect, useState } from 'react';

const InstalledApp = () => {
   
    const [saveData,setSaveData] = useState([]);
    useEffect(()=>{
        const existingItem = JSON.parse(localStorage.getItem('InstalledList')) ;
        if(existingItem) setSaveData(existingItem);
    },[])

    return (
        <div>
                 <h1>{saveData.length}</h1>
        </div>
    );
};

export default InstalledApp;