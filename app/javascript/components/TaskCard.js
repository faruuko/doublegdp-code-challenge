import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Moment from "react-moment";
import axios from "axios";

class TaskCard extends React.Component {
  renderTask() {
    const { tasks } = this.props;
    return (
      <div>
        {tasks.message ===
          "You don't have any task at the moment, please add a task." && (
          <p>{tasks.message}</p>
        )}
        {tasks.length > 0 &&
          tasks.map((task) => (
            <TaskItem key={task.id}>
              <img src={task.avatar} />
              <p>{task.description}</p>
              <span>
                {task.completed_at === null ? (
                  <input
                    type="checkbox"
                    onClick={() => this.updateTask(task.id)}
                  />
                ) : (
                  <Moment format="LT">{task.completed_at}</Moment>
                )}
              </span>
            </TaskItem>
          ))}
      </div>
    );
  }

  updateTask(id) {
    axios
      .patch(`/tasks/${id}`)
      .then((response) => {
        window.location.reload(false);
      })
      .catch((error) => {
        // Handle errors here
        console.log(error);
      });
  }

  render() {
    return (
      <TaskWrapper>
        <div>{this.renderTask()}</div>
      </TaskWrapper>
    );
  }
}

TaskCard.propTypes = {
  tasks: PropTypes.any,
};

TaskCard.defaultProps = {
  tasks: [],
};

const TaskWrapper = styled.section`
  padding: 94px 20px 0px 20px;
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 20px;
  img {
    width: 65px;
    border-radius: 50%;
    height: 65px;
    display: flex;
    justify-content: center;
    object-fit: cover;
  }
  p {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    padding: 0px 11px;
    line-height: 18px;
  }
  span {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 141px;
  }
  input {
    width: 16px;
    height: 16px;
  }
`;

export default TaskCard;
