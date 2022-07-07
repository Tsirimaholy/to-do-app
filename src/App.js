import React from "react";
import Box from "./component/box";

class App extends React.Component {
    state = {
        'toDo': [
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
        ],
        'doing': [
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" },
            { title: "Implement React with TSX", description: "NULL" }
        ],
        'done': []
    }


    render() {
        return (
            <div className="App container">
                <div className="row pt-4">
                    <Box label='toDo'
                        task={this.state.toDo} onAdd={this.handleAddTask} />
                    <Box label='doing'
                        task={this.state.doing} onAdd={this.handleAddTask} />
                    <Box label='done'
                        task={this.state.done} onAdd={this.handleAddTask} />
                </div>
            </div>
        );
    }

    handleAddTask = (task, status) => {
        console.log('task', task);
        //copy the  list of tasklist for a given status
        const taskList = [...this.state[status]];

        if (status === "toDo") {
            this.setState({ toDo: taskList.concat([task]) })
            console.log("state of task", this.state.toDo)
        } else if (status === "doing") {
            this.setState({ doing: taskList.concat([task]) })
        } else {
            this.setState({ doing: taskList.concat([task]) });
        }
    }
}

export default App;
