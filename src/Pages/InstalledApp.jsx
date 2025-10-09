import React, { useEffect, useState } from "react";
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import { toast } from "react-toastify";
const InstalledApp = () => {
  const [saveData, setSaveData] = useState([]);

  const [sortOrder,setSortOrder]=useState('none')

  useEffect(() => {
    const existingItem = JSON.parse(localStorage.getItem("InstalledList"));
    if (existingItem) setSaveData(existingItem);
  }, []);

  const sortedItem = ()=>{
    console.log(sortOrder);
    
    if(sortOrder==='download-asc'){
               return [...saveData].sort((a, b) => {
          const numA = parseFloat(a.downloads.replace('M', ''));
         const numB = parseFloat(b.downloads.replace('M', ''));
          return numA - numB;  
         })
    }else if(sortOrder==='download-dsc'){
         return [...saveData].sort((a, b) => {
          const numA = parseFloat(a.downloads.replace('M', ''));
         const numB = parseFloat(b.downloads.replace('M', ''));
          return numB - numA;  
});
    }
    else{
        return saveData;
    }
  }


   const handleRemoveInstalledItem = (id)=>{
    console.log(id);
    
    const existingItem = JSON.parse(localStorage.getItem('InstalledList')) ;
        let updatedList = existingItem.filter(p=>p.id!==id)
         setSaveData(updatedList)
        localStorage.setItem('InstalledList',JSON.stringify(updatedList))
   }




   const handleDelete = async (id,title) => {
    try {
        await handleRemoveInstalledItem(id);
        toast.success(`${title} deleted from your device`);
    } catch (error) {
        toast.error('Failed to delete item!');
    }
};


  return (
    <div className="space-y-6">
      <div className="max-w-11/12 w-[100%] mx-auto my-10 ">
        <h1 className="text-center font-bold text-4xl">Your Installed Apps</h1>
        <br />
        <p className=" text-center text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
        <br />
        <div className="flex justify-between  my-6">
          <h1 className="font-bold text-2xl">
            (<span>{saveData.length}</span>) Apps found
          </h1>
          <label className="form-control w-full max-w-xs">
            <select 
            className="select select-bordered"
            value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
           <option value="none">Sort by download</option>
           <option value="download-asc">Low-&gt;High</option>
            <option value="download-dsc">High-&gt;Low</option>
          </select>
          </label>
        </div>
      </div>
       <br /><br />
      <div className="space-y-6 max-w-11/12 w-[100%] mx-auto">
        {sortedItem().map((p) => (
          <div className="flex shadow-sm p-4 rounded-2xl hover:scale-104 transition ease-in cursor-pointer  gap-8">
            <figure className="">
              <img className="h-32 w-40" src={p.image} alt="App" />
            </figure>
            <div className="flex flex-1 justify-between items-center">
                <div className="max-w-5/12 w-[100%] ">
              <h1 className="font-semibold pb-2 text-2xl">{p.title}</h1>
              <div className="flex justify-between items-center space-x-4 max-w-5/11 mt-4">
                <div className="flex space-x-2 items-center">
                    <figure className="w-6 h-6"><img src={download} alt="" /></figure>
                  <h3 className="text-gray-500 text-xl">{p.downloads}</h3>
                </div>
                <div className=" flex space-x-2 items-center">
                    <figure  className="w-6 h-6"><img src={star} alt="" /></figure>
                  <h3 className="text-gray-500 text-xl ">{p.ratingAvg}</h3>
                </div>
                <div className="space-y-2">
                  <h3 className="flex text-gray-500 text-xl">{p.size} <span>MB</span></h3>
                </div>
              </div>
                </div>
              <button onClick={()=>handleDelete(p.id,p.title)} className="bg-[rgba(0,211,144,1)] rounded-2xl text-white cursor-pointer font-bold p-3"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApp;
