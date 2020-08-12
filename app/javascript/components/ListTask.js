import React from "react";
import axios from "axios";
import Header from "./Header";
import TaskCard from "./TaskCard";

class ListTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: null,
    };
  }

  componentDidMount() {
    axios
      .get("/tasks/index")
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch((error) => {
        // Handle errors here
        console.log(error);
      });
  }

  render() {
    const { tasks } = this.state;
    if (tasks === null) return null;

    return (
      <div>
        <Header text="Tasks" isAdd={true} isBack={false} />
        <TaskCard tasks={tasks} />
      </div>
    );
  }
}

export default ListTask;
