import { Action, ActionTypes, PizzaInfo } from "../../types";

export const changeCartTotal = (payload: number): Action => ({
    type: ActionTypes.CHANGE_CART_TOTAL,
    payload
});

export const changePizzaInfo = (payload: PizzaInfo): Action => ({
    type: ActionTypes.CHANGE_PIZZA_INFO,
    payload
});