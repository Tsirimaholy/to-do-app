import React from "react";
import './Cart.css'

class Cart extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state = {status: this.props.status}
    }


    render() {
        let {title, description} = this.props;
        let {status} = this.state;


        return (
            <div className='cart p-1 '>
                <strong className="title">{title}</strong>
                <div className="description">{description}</div>
                <label htmlFor="status">status</label>
                <select name="status" id="status" className=''>
                    <option value={status}>{status}</option>
                    <option value={status}>{status}</option>
                    <option value={status}>{status}</option>
                </select>
            </div>
        );
    }
}

export default Cart;