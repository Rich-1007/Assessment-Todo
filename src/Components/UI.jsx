import React from "react";

const UI = () => {
  return (
    <div className=" sm:p-20 flex bg-gray-300  justify-center flex-wrap w-screen ">
      <div className="  ">
        <div className="bg-blue-200  flex sm:w-72 w-screen   justify-center border-2 hover:border-blue-500 ">
          
          
          <div className="flex flex-col left-0  px-8 pb-14  pt-12">
            <div className="py-4 font-semibold  ">
              <span className="hover:border-b-2 border-blue-500">Add Task</span>
            </div>

            <div className="py-1">
              <span className="hover:border-b-2 border-blue-500">
                Task Title
              </span>
            </div>

            <div className="pb-4">
              <input
                type="text"
                placeholder="Enter task title"
                className="p-1.5 rounded-md border-2 hover:border-purple-500  "
              />
            </div>

            <div className="py-1">
              <span className="hover:border-b-2 border-blue-500">
                Task Description
              </span>
            </div>

            <div className="pb-4">
              <input
                type="text"
                placeholder="Enter task description"
                className=" p-1.5 pb-8 rounded-md border-2 hover:border-blue-500"
              />
            </div>

            <div className="bg-blue-900 text-white flex justify-center rounded-md p-1  border-2 hover:border-purple-500">
              <button >Add Task</button>
            </div>
          </div>
        </div>
      </div>








      <div className="px-7 pt-8 bg-white">
        <div className="text-2xl sm:text-lg pb-3  ">
          <span className="hover:border-b-2 border-blue-500">To do tasks</span>
        </div>

        <div className="flex gap-3 pb-6 ">
          <div className="w-16 flex items-center justify-center border-black outline outline-1 rounded-md py-0.5   ring-0 hover:ring-2 hover:ring-blue-600   ">
            <span className="border-b-2 border-white hover:border-blue-500">
              All
            </span>
          </div>

          <div className="w-16 flex items-center justify-center border-black outline outline-1 rounded-md py-0.5   ring-0 hover:ring-2 hover:ring-blue-600 ">
            <span className="border-b-2 border-white hover:border-blue-500">
              Done
            </span>
          </div>

          <div className="w-16 flex items-center justify-center border-black outline outline-1 rounded-md py-0.5   ring-0 hover:ring-2 hover:ring-blue-600 ">
            <span className="border-b-2 border-white hover:border-blue-500">
              To Do
            </span>
          </div>
        </div>

        <div className="border-gray-300 border rounded-sm p-1.5 hover:ring-2 hover:ring-blue-600  flex flex-row">
          <input type="checkbox" />
          <span className="pl-3">
            Complete project proposal for upcoming client meeting
          </span>
        </div>
      </div>





    </div>



  );
};

export default UI;
