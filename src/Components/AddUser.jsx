import React from "react";
import Form from "./Form";
import Card from "./Card";
import UserList from "./UserList";

const AddUser = ({ onAddUser }) => {
  return (
    <Card>
      <Form onAddFormUser={onAddUser} />
    </Card>
  );
};

export default AddUser;
