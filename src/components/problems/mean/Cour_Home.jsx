import React, { useState } from "react";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import List from "../problemlist/problemlist";
import ProblemStatement from "../problemStatement/problemStatement";
import Solution from "../solution.jsx/Solution";
import Hints from "../hints/Hints";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cour_Home = () => {
  const [count, setCount] = useState(0);
  const [id, setId] = useState(false);

  const changeCount = (index) => {
    setCount(index);
    setId(true);
    console.log(id);
  };

  const notify = () => toast.error("select the question");


  return (
    <div className="p-5 mt-4">
      <Tab.Group
        selectedIndex={count}
        onChange={(index) => {
          console.log(id);
          if (id === true) {
            setCount(index);
            console.log(index);
          } else {
            console.log("select");
          }
        }}
      >
        {/* className="pointer-events-none -mb-[1px] block rounded p-3.5 py-2 text-white-light dark:text-dark" */}
        <Tab.List className="flex gap-1 sm:gap-4 overflow-x-auto">
  {["Home", "Profile", "Contact", "Other"].map((tab, index) => (
    <Tab key={index}>
      {({ selected }) => (
        id ? (
          <button
            className={`py-1 px-2 sm:py-2 sm:px-4 rounded-[3px] text-black ${
              selected
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-100"
            } focus:outline-none px-2  sm:px-5 md:px-6 lg:px-7`}
          >
            {tab}
          </button>
        ) : (
          <div>
            <button
            className={`py-1 px-2 sm:py-2 sm:px-4 rounded-[3px] text-black ${
              selected
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-100"
            } focus:outline-none px-2  sm:px-5 md:px-6 lg:px-7`}
            onClick={notify}>{tab}</button>
            <ToastContainer
            StackedContainer
            autoClose={2000}/>

          </div>
        )
      )}
    </Tab>
     ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="p-1 sm:p-4 bg-gray-500 text-white rounded">
              <List changeCount={(index) => changeCount(index)} />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="p-1 sm:p-4 bg-gray-500 text-white rounded">
              <ProblemStatement />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="p-1 sm:p-4 bg-gray-500 text-white rounded">
              <Solution />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="p-1 sm:p-4 bg-gray-500 text-white rounded">
              <Hints titel={"Hints"} Hints={"wk nfc fewkjf cejwfce"} />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Cour_Home;
