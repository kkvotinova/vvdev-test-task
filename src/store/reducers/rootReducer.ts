import { Action, ActionTypes, IState } from "../../types";

export const initialStatee: IState = {
    cartTotal: 0,
    pizzaInfo: {
        price: 100,
        weight: 700,
        energy: 2220,
        size: 's',
        type: 'common'
    }
};

export const rootReducer = (state = initialStatee, action: Action): IState => {
    switch (action.type) {
        case ActionTypes.CHANGE_CART_TOTAL:
            return {
                ...state,
                cartTotal: action.payload,
            };
        case ActionTypes.CHANGE_PIZZA_INFO:
            return {
                ...state,
                pizzaInfo: action.payload,
            };
        default:
            return state;
    }
}