import React, {Component} from "react";
import Cart from "./Cart";
import Modal from "./common/modal";
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false}
    }


    render() {
        let {show} = this.state;
        let {task: tasks} = this.props;
        return (
            <React.Fragment>
                <div className='Box col-4 container'>
                    <Modal title='New task'
                           status={this.props.label}
                           show={show}
                           onShow={this.handleShow}
                    />
                    <div className="box-header">
                        <strong className="label">{this.props.label}</strong>
                        <div className="btn btn-dark bi-plus add-btn text-white-50"
                             onClick={this.handleShow}>
                            Add item
                        </div>
                    </div>
                    <div className="box-body">
                        {tasks.map(task => (
                            <Cart
                                title={task.title}
                                description={task.description}
                            />
                        ))}
                    </div>

                </div>
            </React.Fragment>
        )
            ;
    }

    handleShow = () => {
        // console.log('before', this.state.show)
        if (this.state.show === false) {
            this.setState({show: true});
        } else this.setState({show: false})
        // console.log('after', this.state.show)
    }
}

export default Box;