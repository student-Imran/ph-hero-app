import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import App from "./App";
import NoApps from "./NoApps";
import LoadingSpinner from "./LoadingSpinner";


const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(true);
    setTimeout(() => {
      setSearchLoading(false);
    }, 500);
  };

  const searchItem = search.trim().toLowerCase();
  const searchApp = searchItem
    ? apps.filter((app) => app.title?.toLowerCase().includes(searchItem))
    : apps;

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="max-w-11/12 w-[100%] mx-auto my-10">
        <h1 className="text-center font-bold text-4xl">Our All Applications</h1>
        <br />
        <p className="text-center text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <br />
        <div className="flex justify-between my-6">
          <h1 className="font-bold text-2xl">
            (<span>{searchApp.length}</span>) Apps found
          </h1>
          <label className="input">
            <input
              value={search}
              onChange={handleSearch}
              type="search"
              placeholder="Search apps..."
            />
          </label>
        </div>

        {searchLoading && (
          <div className="text-center">
                <div className="animate-spin rounded-full h-24 w-24 border-4 border-blue-500 border-t-transparent mx-auto"></div>
                <h1 className="text-6xl font-bold text-gray-800 mt-4">Loading...</h1>
            </div>
        )}
      </div>

      <div className="max-w-11/12 mx-auto w-full gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {!searchLoading && searchApp.length ? (
          searchApp.map((app) => <App  key={app.id} app={app}></App>)
        ) : (
          !searchLoading && <NoApps></NoApps>
        )}
      </div>
    </div>
  );
};

export default Apps;
