import React, {useState} from "react";
import {fruits} from "../../json-mock";
import "./new-order.scss";
import {useSelector, useDispatch} from "react-redux";
import {CartItem} from "./new-order-cart-item";
import {SingleFruit} from "./new-order-single-item";
import {Box, Button, PageTitle, SectionTitle} from "../../style/styles";
import {createOrder} from "../../store/actions/orders-actions";
import {totalPrice} from "../../helpers/calculate-cart-total";
import {emptyCart} from "../../store/actions/cart-actions";
import {SearchInput} from "../search-input/search-input";

export const NewOrder = (props) => {
        const cart = useSelector(state => state.cart.items);
        const dispatch = useDispatch();
        const [fruitsList, setFruitsList] = useState(fruits);

        const handleSearchValueChange = (e) => {
            const searchValue = e.target.value;
            if (searchValue) {
                setFruitsList(fruits.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())));
            } else {
                setFruitsList(fruits);
            }
        };

        const cartList = cart.map(CartItem);

        const placeOrder = () => {
            dispatch(createOrder(cart));
            dispatch(emptyCart());
            props.history.push("/orders");
        };

        return (
            <div className="new-order">
                <PageTitle>New Order</PageTitle>
                <div className="order-container">
                    <Box width={443} className="new-order-list">
                        <SectionTitle>Add Items</SectionTitle>
                        <SearchInput onChange={handleSearchValueChange}/>
                        <div className="fruits-list">
                            {fruitsList.map(fruit => <SingleFruit key={fruit.id} fruit={fruit}/>)}
                        </div>
                        <Button offset={"true"}>+ Add to Cart</Button>
                    </Box>

                    <div className="new-order-separator"/>

                    <Box width={443} className="new-order-cart">
                        <SectionTitle>Cart</SectionTitle>

                        {cartList}

                        {cart.length > 0 &&
                        <>
                            <hr/>

                            <p className="new-order-total">
                                Total Cost: <span>${totalPrice(cart)}</span>
                            </p>

                            <Button onClick={placeOrder}>
                                PLACE ORDER
                                {/*<Link to={"/orders"}>PLACE ORDER</Link>*/}
                            </Button>
                        </>
                        }
                    </Box>
                </div>
            </div>
        )
    }
;