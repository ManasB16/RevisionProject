import React from "react";

const Form = ({ addUserHandler }) => {
  return (
    <div className="flex justify-center">
      <form className="w-96 h-80 rounded-xl mx-80" onSubmit={addUserHandler}>
        <div className="flex flex-col justify-center border-b border-teal-500 py-2 gap-12">
          <div className="flex gap-8">
            <label htmlFor="username" className="w-full font-bold">
              Add User
            </label>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Jane Doe"
              aria-label="Full name"
              id="username"
            />
          </div>
          <div className="flex gap-8">
            <label htmlFor="age" className="w-full font-bold">
              Age
            </label>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="number"
              placeholder="18"
              aria-label="Full name"
              id="age"
            />
          </div>
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded px-12"
            type="submit"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
