import React from "react";
import './Cart.css'

class Cart extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state = { status: this.props.status }
    }


    render() {
        let { title, description } = this.props;

        return (
            <div className='cart p-1 '>
                <strong className="title">{title}</strong>
                <div className="description">{description}</div>
                <label htmlFor="status">status</label>
                <select name="status" id="status" className=''>
                    {this.generatePossibleValue(this.state)}
                </select>
            </div>
        );
    }

    generatePossibleValue = ({status}) => {
        let possibleValue = ["to-do", "doing", "done"];
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