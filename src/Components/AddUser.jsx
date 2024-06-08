import React from "react";
import Form from "./Form";
import Card from "./Card";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <Form addUserHandler={addUserHandler} />
    </Card>
  );
};

export default AddUser;
