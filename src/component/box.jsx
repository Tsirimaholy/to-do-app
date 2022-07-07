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
        let { task: tasks, label } = this.props;
        return (
                <div className='Box col-4 container'>
                    <Modal title='New task'
                        status={label}
                        show={show}
                        onShow={this.handleShow}
                    />
                    <div className="box-header">
                        <strong className="label">{label}</strong>
                        <div className="btn btn-dark bi-plus add-btn text-white-50"
                            onClick={this.handleShow}/>
                    </div>
                    <div className="box-body">
                        {tasks.map(task => (
                            <Cart
                                key={task.title + Math.random(task.description)}
                                title={task.title}
                                description={task.description}
                                status={label}
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
}

export default Box;