import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";

import Ratings from "./Ratings";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";
import ErrorApp from "./ErrorApp";
import { useContext, useEffect } from "react";
import { InstalledContext } from "./InstalledContext";
const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading} = useApps();
  const { installed, setInstalled } = useContext(InstalledContext);
  
  useEffect(()=>{
    const item = localStorage.getItem(`installedItem_${id}`);
    if(item){
       setInstalled(true);
    }
    else{
      setInstalled(false)
    }
}, []);

  if (loading) return <LoadingSpinner></LoadingSpinner>
  const details = apps ? apps.find((ap) => String(ap.id) === id) : undefined;
  if (!details) {
    return <ErrorApp></ErrorApp>;
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = details;


  const handleInstalled = () => {
    
    const existingItems =
      JSON.parse(localStorage.getItem("InstalledList")) || [];
    const isDuplicate = existingItems.some((item) => item.id === details.id);

    if (isDuplicate) {
      toast.error(`Oops! ${title} is Already Installed`);
      return;
    }
    toast.success(`Yahoo! ${title} Installed Successfully`);
    const updatedList = [...existingItems, details];
    localStorage.setItem("InstalledList", JSON.stringify(updatedList));
    
  };


  return (
    <div className="max-w-11/12 mx-auto w-full pt-4 md:pt-8 lg:pt-16 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 border-b-2 border-gray-400 pb-8">
        <figure className="flex justify-center lg:justify-start">
          <img className="rounded-2xl md:rounded-4xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto" src={image} alt="App" />
        </figure>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-left text-2xl  md:text-3xl font-bold pb-2">{title}</h1>
          <p className="border-b-2 border-gray-400 w-full text-gray-500 pb-3">
            Developed by{" "}
            <span className="text-purple-700 font-bold">{companyName}</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
            <div className="text-center space-y-1 md:space-y-2">
              <figure className="flex justify-center">
                <img src={download} className="w-8 h-8 md:w-10 md:h-10" alt="" />
              </figure>
              <p className="text-gray-500 text-xs md:text-sm">Downloads</p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{downloads}</h3>
            </div>
            <div className="text-center space-y-1 md:space-y-2">
              <figure className="flex justify-center">
                <img src={star} className="w-8 h-8 md:w-10 md:h-10" alt="" />
              </figure>
              <p className="text-gray-500 text-xs md:text-sm">Average Ratings</p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{ratingAvg}</h3>
            </div>
            <div className="text-center space-y-1 md:space-y-2">
              <figure className="flex justify-center">
                <img src={review} className="w-8 h-8 md:w-10 md:h-10" alt="" />
              </figure>
              <p className="text-gray-500 text-xs md:text-sm">Reviews</p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{reviews}</h3>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start mt-4 md:mt-6">
             <button
            onClick={()=>{
              setInstalled(true)
              handleInstalled()
              localStorage.setItem(`installedItem_${id}`,true)
            }}
            className="bg-[rgba(0,211,144,1)] mt-3 py-2 px-3 rounded-2xl text-white cursor-pointer font-bold"
          >
            {installed? `✅ Installed ` : `⬇️ Install Now ${size}MB`}
          </button>
          </div>
          
        </div>
      </div>
      <div className="my-24">
        <Ratings ratings={ratings}></Ratings>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Description</h1>
        <br />
        <p className="text-gray-500 leading-loose">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
