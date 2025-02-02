import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import MonitorScan from "../components/MonitorScan";
import QuickScan from "../components/QuickScan";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("quickScan"); // State for active tab

  
  // const [inputCount, setInputCount] = useState(0);

  // const handleInputCountChange = (e) => {
  //   setInputCount(parseInt(e.target.value));
  // };

  // const renderInputs = () => {
  //   const inputs = [];
  //   for (let i = 1; i <= inputCount; i++) {
  //     inputs.push(
  //       <div key={i}>
  //         <label className="block text-sm font-semibold mb-2">Input {i}</label>
  //         <input
  //           type="text"
  //           className="w-full p-2 border rounded-md"
  //           placeholder={`Enter Input ${i}`}
  //         />
  //       </div>
  //     );
  //   }
  //   return inputs;
  // };

  return (
    <div className="flex h-screen bg-cover bg-center bg-scan-patternn">
      {/* Sidebar on the left */}
      <Sidebar />
      {/* Main content on the right */}

  {/* Main Content */}
  <div className=" flex-row justify-center items-center w-full">
      <div className="text-black font-bold mt-4 justify-left ml-24 flex">NEW SCAN</div>
      <div className="w-full pt-1 justify-center flex h-[80%]">
    <div className="p-2 overflow-auto form-abc w-[80%] ml-16 ">
      {/* Card with Tabs */}
      <div className="flex justify-left">
        <button
          className={`flex py-1 px-1 text-center text-md font-semibold rounded-t-lg border-t-2 border-x-2 ${
            activeTab === "quickScan"
              ? "bg-white"
              : "bg-gray-300 text-gray-600 border-gray-300 shadow-inner"
          }`}
          onClick={() => setActiveTab("quickScan")}
        >
          Quick Scan
        </button>
        <button
          className={`flex py-1 px-1 text-center text-md font-semibold rounded-t-lg border-t-2 border-x-2 ${
            activeTab === "monitorScan"
              ? "bg-white"
              : "bg-gray-300 text-gray-600 border-gray-300 shadow-inner"
          }`}
          onClick={() => setActiveTab("monitorScan")}
        >
          Monitor Scan
        </button>
      </div>
      <div className="bg-white rounded-b-lg p-6 border-b-2 border-x-2 rounded-tr-lg">
        {/* Content based on active tab */}
        {activeTab === "quickScan" && <QuickScan />}
        {activeTab === "monitorScan" && <MonitorScan />}
      </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default DashboardPage;
