import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import App from "./App";
import NoApps from "./NoApps";
import LoadingSpinner from "./LoadingSpinner";

const Apps = () => {
  const data = useApps()
  const { apps,loading,error } = data;
  const [search,setSearch] = useState('');
  const searchItem = search.trim().toLocaleLowerCase()
  
  const searchApp = searchItem?apps.filter((app)=>app.title.toLocaleLowerCase().includes(searchItem)):apps
  if(loading) return <LoadingSpinner></LoadingSpinner>
  
  
  
  return (
    <div>
      <div className="max-w-11/12 w-[100%] mx-auto my-10 ">
        <h1 className="text-center font-bold text-4xl">Our All Applications</h1><br />
        <p className=" text-center text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p><br />
        <div className="flex justify-between  my-6">
          <h1 className="font-bold text-2xl">
            (<span>{searchApp.length}</span>) Apps found
          </h1>
          <label className="input">
            <input 
             value={search}
            onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="search apps" />
          </label>
        </div>
      </div>
      <div className=" max-w-11/12 mx-auto w-full gap-6  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {searchApp.length?searchApp.map((app) => (
          <App key={app.id} app={app}></App>
        )):<NoApps></NoApps>}
      </div>
    </div>
  );
};

export default Apps;
