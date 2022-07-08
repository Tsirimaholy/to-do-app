import React from "react";
import './Modal.css'

class Modal extends React.Component {
    state = {
        title: "",
        description: ''
    }

    render() {
        let classList = 'tag badge badge-';
        let { show, title: modalTitle, status } = this.props;

        if (show === false) {
            return null;
        }
        return (
            <div className='my-modal container-sm ' id={status}>
                <button
                    className="btn btn-outline-danger m-2 float-right bi bi-x"
                    onClick={this.props.onShow}
                >
                </button>
                <strong className="title">{modalTitle}</strong>
                <span className={classList + this.getBadgeClass()}>{status}</span>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    let task = {
                        'title': this.state.title,
                        'description': this.state.description
                    };
                    this.props.onAdd(task, status);
                }}>
                    <div className="form-group">
                        <label htmlFor="title">Task title</label>
                        <br />
                        <input type="text"
                            id='title'
                            className='form-control-sm'
                            onChange={(event) => {
                                this.setState({ 'title': event.target.value });
                            }}
                            required={true}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <br />
                        <textarea
                            id='description'
                            className='form-control-sm'
                            onChange={(event) => {
                                this.setState({ description: event.target.value })
                            }} />
                    </div>
                    <button className='btn btn-primary'>Confirm</button>
                </form>
                {/* close the modal */}

            </div>
        );
    }

    getBadgeClass = () => {
        if (this.props.status === 'toDo') return 'secondary';
        if (this.props.status === 'doing') return 'primary';
        return 'success';
    }
}

export default Modal;
