import React, { useState } from 'react';
import AppDetails from './AppDetails';
import InstalledApp from './InstalledApp';

const Parent = () => {
    const [installed,setInstalled] = useState(false);
    const handleInstalledTrue = ()=>{
        setInstalled(true);
    }
    const handleInstalledFalse = ()=>{
        setInstalled(false);
    }
    return (
        <div>
            <AppDetails handleInstalledTrue={handleInstalledTrue} installed={installed}></AppDetails>
            <InstalledApp handleInstalledFalse={handleInstalledFalse} installed={installed}></InstalledApp>
        </div>
    );
};

export default Parent;
