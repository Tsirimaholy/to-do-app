import React from "react";
import './Cart.css'

class Cart extends React.Component {
    render() {
        let { title, description, onStatusChange } = this.props;

        return (
            <div className='cart p-2' draggable={true}>
                <h4 className="title">{title}</h4>
                <div className="description">{description}</div>
                <label htmlFor="status">status:</label>
                <select
                    name="status"
                    id="status"
                    className='form-control form-custom-control-label'
                    onChange={(e) => onStatusChange(title, description, this.props.status, e.target.value) }
                >
                    {this.generatePossibleValue(this.props)}
                </select>
            </div>
        );
    }

    generatePossibleValue = ({ status }) => {
        let possibleValue = ["toDo", "doing", "done"];
        const indexOfCurrentStatus = possibleValue.indexOf(status);
        possibleValue.splice(indexOfCurrentStatus, 1);


        return (
            <>
                <option value={status}>{status}</option>
                <option value={possibleValue[0]}>{possibleValue[0]}</option>
                <option value={possibleValue[1]}>{possibleValue[1]}</option>
            </>
        )
    }
}

export default Cart;