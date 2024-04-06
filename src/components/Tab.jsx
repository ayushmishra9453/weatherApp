import React from 'react'
import CurrPosition from './CurrPosition'
import Search from './Search'

function Tab({currentTab,setCurrentTab}) {
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <div className="max-w-md mx-auto mt-10">
    <div className="flex border-b border-gray-200">
      <button
        className={`${
          currentTab === 'current'
            ? 'bg-blue-500 text-white'
            : 'text-gray-700'
        } flex-1 p-4 focus:outline-none`}
        onClick={() => handleTabClick('current')}
      >
        Current Location
      </button>
      <button
        className={`${
          currentTab === 'search' ? 'bg-blue-500 text-white' : 'text-gray-700'
        } flex-1 p-4 focus:outline-none`}
        onClick={() => handleTabClick('search')}
      >
        Search Location
      </button>
    </div>
    {/* <div className="p-4"> */}
      {/* Content based on active tab */}
      {/* {activeTab === 'current' ?  <CurrPosition/>:<Search/> } */}
    {/* </div> */}
    {
      
    }
  </div>
       
       /* {tab=="user"?<CurrPosition/>:<Search />} */
    
  )
}

export default Tab
