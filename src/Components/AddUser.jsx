import React, { useRef, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import "./AddUser.css";
import ErrorModal from "./ErrorModal";

const AddUser = ({ onAddUser }) => {
  const userName = useRef("");
  const age = useRef("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const userNameVal = userName.current.value;
    const ageVal = age.current.value;
    if (
      userNameVal.trim().length == 0 ||
      ageVal.trim().length == 0 ||
      +ageVal < 1
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid input",
      });
      return;
    } else {
      onAddUser(userNameVal, ageVal);
    }

    userName.current.value = "";
    age.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" ref={userName} />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={age} />

          <Button type="submit">Add User</Button>
          {/* <Button onClick={clickHandler}>Click Here</Button> */}
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
