import React, { Component } from "react";
import Cart from "./Cart";
import Modal from "./common/modal";
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
    }


    render() {
        let { show } = this.state;
        let { task: tasks, label, onAdd, onStatusChange } = this.props;

        return (
            <div className='Box col-4 '>
                <Modal title='New task'
                    status={label}
                    show={show}
                    onShow={this.handleShow}
                    onAdd={onAdd}
                />
                <div className="box-header">
                    <h2 className='label'>{label}</h2>
                    <div className="btn btn-dark bi-plus add-btn text-white-50"
                        onClick={this.handleShow} />
                </div>
                <div className="box-body">
                    {/* in case if there are no task */}
                    {this.defaultValues()}
                    {tasks.map(task => (
                        <Cart
                            key={tasks.indexOf(task)}
                            title={task.title}
                            description={task.description}
                            status={label}
                            onStatusChange={onStatusChange}
                        />
                    ))}
                </div>

            </div>
        )
            ;
    }

    handleShow = () => {
        // console.log('before', this.state.show)
        if (this.state.show === false) {
            this.setState({ show: true });
        } else this.setState({ show: false })
        // console.log('after', this.state.show)
    }

    defaultValues = () => {
        if (this.props.task.length <= 0) {
            return (
                <div className="text-black-50 font-weight-light center">
                    Create a task by clicking on the plus button
                </div>);
        }
    }
}

export default Box;