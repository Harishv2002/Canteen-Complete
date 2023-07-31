import { message } from "antd";

const intialState = {
    loading: false,
    cartItems: [],
  };
  
  export const rootReducer = (state = intialState, action) => {
    switch (action.type) {
      case "SHOW_LOADING":
        return {
          ...state,
          loading: true,
        };
      case "HIDE_LOADING":
        return {
          ...state,
          loading: false,
        };
      case "ADD_TO_CART":
        // function alreadyPresentInCart(){
        //   message.error("Already Present In Cart")
        //   return (state.cartItems)
        // }
        return {
          ...state,
          // cartItems: [...state.cartItems, action.payload],
          cartItems: state.cartItems.every(item=> item._id!==action.payload._id)?([...state.cartItems, action.payload]) : ( state.cartItems)
          // ls1.every(item => item < 10 ) 
        };
      case "UPDATE_CART":
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      case "DELETE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item._id !== action.payload._id
          ),
        };
      default:
        return state;
    }
  };