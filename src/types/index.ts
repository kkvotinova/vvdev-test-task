import { ApiProductVariant } from "../api/product";

export enum ActionTypes {
    CHANGE_CART_TOTAL = "CHANGE_CART_TOTAL",
    CHANGE_PIZZA_INFO = "CHANGE_PIZZA_INFO",
}

export type PizzaInfo = Omit<ApiProductVariant, 'id'>;

export interface IState {
    cartTotal: number;
    pizzaInfo: PizzaInfo;
}

export type Action = IChangeCartTotal | IChangePizzaInfo;

export interface IChangeCartTotal {
    type: typeof ActionTypes.CHANGE_CART_TOTAL;
    payload: number;
}

export interface IChangePizzaInfo {
    type: typeof ActionTypes.CHANGE_PIZZA_INFO;
    payload: PizzaInfo;
}