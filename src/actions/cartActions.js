import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart =
  (id, quantity, color, size) => async (dispatch, getState) => {
    const { data } = await axios.get(`/sample/products/${id}`);
    console.log(color, size);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: data.id,
        product: data.product,
        kind: data.kind,
        image: data.image,
        price: data.price,
        color,
        size,
        quantity
      }
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };
