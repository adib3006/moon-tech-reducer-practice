import { actionTypes } from "./actionTypes";

export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    wishList: [],
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false,
            };
        case actionTypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case actionTypes.ADD_TO_WISHLIST:
            return {
                ...state,
                wishList: [...state.wishList, action.payload],
            };
        case actionTypes.REMOVE_FROM_CART:
            const restCart = state.cart.filter(
                //price needs to be replaced with _id
                (product) => product.price !== action.payload.price
            );
            return {
                ...state,
                cart: [...restCart],
            };
        case actionTypes.REMOVE_FROM_WISHLIST:
            const restWishList = state.wishList.filter(
                //price needs to be replaced with _id
                (product) => product.price !== action.payload.price
            );
            return {
                ...state,
                wishList: [...restWishList],
            };
        default:
            return state;
    }
};
