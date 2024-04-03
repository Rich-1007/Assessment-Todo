import React from "react";
import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";

const UI = () => {
  return (
    <div className=" sm:p-20 flex sm:flex-row flex-col bg-gray-300  justify-center  w-screen  ">
      <div className="  ">
        <div className="bg-blue-200  flex sm:w-72 w-screen   justify-center border-2 hover:border-blue-500 ">
          <div className="flex flex-col left-0  px-8 pb-14  pt-12">
            <div className="py-4 font-semibold  ">
              <span className="hover:border-b-2 border-blue-500">Add Task</span>
            </div>

            <AddTodoForm />
          </div>
        </div>
      </div>

      <Todos />
    </div>
  );
};

export default UI;
