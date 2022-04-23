import { useDispatch, useSelector } from "react-redux";
import getApiProduct from "../../../api/product";
import { changePizzaInfo } from "../../../store/actions/rootActions";
import {
    ButtonsList,
    CardCategory, CardDescription, CardInfoWrapper,
    CardPrice, CardTitle, ItemBlock
} from "../../../styles/card";
import { IState, PizzaInfo } from "../../../types";
import { Button } from "../Button";
import { ButtonsItem } from "../ButtonsItem";

const validType = (type: string | null) => {
    switch (type) {
        case 'Обычное тесто':
            return 'common';
        case 'Тонкое тесто':
            return 'thin';
    }
}

const validSize = (type: string | null) => {
    switch (type) {
        case 'Маленькая':
            return 's';
        case 'Средняя':
            return 'm';
        case 'Большая':
            return 'l';
    }
}

export function CardInfo() {
    const {
        category, title, description, variant,
        price, weight, energy, size, type
    } = getApiProduct();
    const variantList: PizzaInfo[] = [{price, weight, energy, size, type}].concat(variant);

    const dispatch = useDispatch();
    const pizzaInfo= useSelector((state: IState) => state.pizzaInfo);

    const onTypeChange = (e: React.MouseEvent<HTMLElement>) => {
        const element = e.target as HTMLInputElement;
        const newPizza = variantList.find(item => item.type === validType(element.textContent));
        if (newPizza) {
            dispatch(changePizzaInfo({
                ...newPizza,
            }));
        }
    }

    const onSizeChange = (e: React.MouseEvent<HTMLElement>) => {
        const element = e.target as HTMLInputElement;
        const newPizza = variantList.find(item => (
            item.size === validSize(element.textContent) && item.type === pizzaInfo.type
        ));
        if (newPizza) {
            dispatch(changePizzaInfo({
                ...newPizza,
            }));
        }
    }

    return (
        <CardInfoWrapper>
            <CardCategory>{category}</CardCategory>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <ItemBlock>
                <div>{pizzaInfo.weight} г</div>
                <div>{pizzaInfo.energy} ккал</div>
            </ItemBlock>
            <ButtonsList onClick={(e) => onTypeChange(e)}>
                {Array.from(new Set(variantList.map(item => item.type))).map((item, id) =>
                    <ButtonsItem key={id} active={item === pizzaInfo.type} type={item} />)}
            </ButtonsList>
            <ButtonsList onClick={(e) => onSizeChange(e)}>
                {variantList.filter(item => item.type === pizzaInfo.type).map(item => item.size).map((item, id) =>
                    <ButtonsItem key={id} size={item} active={item === pizzaInfo.size} />)}
            </ButtonsList>
            <CardPrice>{pizzaInfo.price},00 ₽</CardPrice>
            <Button />
        </CardInfoWrapper>
    );
}