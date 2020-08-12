import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";

const AddTask = (props) => {
  const [formData, setFormData] = useState({
    description: "",
    avatar: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const { description, avatar } = formData;
  const data = avatar === "" ? { description } : formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
    } else {
      axios
        .post("/tasks/create", {
          ...data,
        })
        .then((response) => {
          props.history.push("/");
        })
        .catch((error) => {
          // Handle errors here
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Header text="Add Task" isAdd={false} isBack={true} />
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Task description"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="avatar"
          placeholder="Avatar URL"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <div>
          <button>Add</button>
        </div>
      </Form>
    </div>
  );
};

const Form = styled.form`
  padding: 20px 20px 20px 20px;

  input {
    width: 100%;
    height: 50px;
    border: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #6b00f7;
    outline: 0px;
    font-family: courier;
  }

  input::placeholder,
  ::-webkit-input-placeholder {
    color: #0000008c;
  }

  button {
    background: #6b00f7;
    color: white;
    font-family: courier;
    width: 80px;
    height: 40px;
    border: 0;
    font-size: 16px;
  }
`;

export default AddTask;
