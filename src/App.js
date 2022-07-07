import React from "react";
import Box from "./component/box";

class App extends React.Component {
    state = {
        toDo: [{title: 'some task', description: 'No description'}],
        doing: [{title: 'sonme task@', description: 'hbfhsabfjsnbfjsh'}],
        done: [{title: 'exercice', description: 'hbfhsabfjsnbfjsh hsgjgj'}]
    }

    render() {
        return (
            <div className="App container">
                <div className="row pt-4">
                    <Box label='to-do' task={this.state.toDo}/>
                    <Box label='doing' task={this.state.doing}/>
                    <Box label='done' task={this.state.done}/>
                </div>
            </div>
        );
    }

    onAdd = (task) => {

    }
}

export default App;
