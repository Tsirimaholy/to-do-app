import React from "react";
import './Modal.css'

class Modal extends React.Component {
    state = {
        title: '',
        description: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted')
    }

    render() {
        let {show, title, status} = this.props;
        let classList = 'tag badge badge-';

        if (show === false) {
            return null;
        }
        return (
            <div className='my-modal container-sm' id={status}>
                <strong className="title">{title}</strong>
                <span className={classList + this.getBadgeClass()}>{status}</span>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Task title</label>
                        <br/>
                        <input type="text" id='title ' className='form-control-md'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <br/>
                        <input type="text" id='description' className='form-control-md'/>
                    </div>
                    <button className='btn btn-primary'>Confirm</button>
                </form>
                <button className="btn btn-outline-danger m-2 float-right" onClick={this.props.onShow}>Close</button>
            </div>
        );
    }

    getBadgeClass = () => {
        if (this.props.status === 'to-do') return 'secondary';
        if (this.props.status === 'doing') return 'primary';
        return 'success';
    }
}

export default Modal;