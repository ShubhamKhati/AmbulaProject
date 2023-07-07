/*Headerr:

Description: Renders the header component for the cart.
Functionality: Displays the shopping cart icon and the number of items in the cart. Allows toggling between the cart and product list. */

import './Cart.css';

function Headerr(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Headerr;