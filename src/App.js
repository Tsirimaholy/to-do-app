import React from "react";
import Box from "./component/box";

class App extends React.Component {
    state = {
        'toDo': [
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Squid server", description: "" },
            { title: "Sleep", description: "NULL" },
        ],
        'doing': [
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
        ],
        'done': []
    }


    render() {
        return (
            <div className="App container">
                <div className="row pt-4">
                    <Box label='toDo'
                        task={this.state.toDo}
                        onAdd={this.handleAddTask}
                        onStatusChange={this.handleStatusChange}
                    />

                    <Box label='doing'
                        task={this.state.doing}
                        onAdd={this.handleAddTask}
                        onStatusChange={this.handleStatusChange}
                    />

                    <Box label='done'
                        task={this.state.done}
                        onAdd={this.handleAddTask}
                        onStatusChange={this.handleStatusChange}
                    />
                </div>
            </div>
        );
    }

    handleAddTask = (task, status) => {
        console.log('task', task);
        //copy the  list of tasklist for a given status
        const taskList = [...this.state[status]];

        this.setNewState(status, taskList, task);
    }

    handleStatusChange = (title, description, previousStatus, newStatus) => {
        // current.. [task0,task1,task3,...]
        let currentSTate = [...this.state[previousStatus]];
        // task=>{title,descrip,status}
        // the previous task with the old status
        let previousTask = currentSTate.filter((taskObj) => {
            return taskObj.title !== title && taskObj.description !== description;
        });

        const task = currentSTate.filter((taskObj) => {
            return taskObj.title === title && taskObj.description === description;
        })[0];

        const newStateObj={};
        newStateObj[previousStatus]=previousTask;
        newStateObj[newStatus]=this.state[newStatus].concat(task);
        console.log(previousStatus);

        this.setState(newStateObj);    }

    // set a new state depending the status
    setNewState(status, taskList, task) {
        if (status === "toDo") {
            this.setState({ toDo: taskList.concat([task]) });
            console.log("state of task", this.state.toDo);
        } else if (status === "doing") {
            this.setState({ doing: taskList.concat([task]) });
        } else {
            this.setState({ doing: taskList.concat([task]) });
        }
    }
}

export default App;
