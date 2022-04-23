import { useDispatch, useSelector } from "react-redux";
import { changeCartTotal } from "../../../store/actions/rootActions";
import { CardButton } from "../../../styles/card";
import { IState } from "../../../types";

export function Button() {
    const dispatch = useDispatch();
    const { cartTotal, pizzaInfo }  = useSelector((state: IState) => state)

    return (
        <CardButton onClick={() => {
            dispatch(changeCartTotal(cartTotal + pizzaInfo.price));
        }}>В корзину</CardButton>
    );
}