import React from "react";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="w-full h-96 rounded-xl p-7 " onSubmit={addUserHandler}>
      <div className="flex flex-col justify-center border-b border-teal-500 py-2 gap-12">
        <div className="flex gap-8">
          <label htmlFor="username" className="w-full">
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
          <label htmlFor="age" className="w-full">
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
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUser;
