import getApiProduct from '../../api/product';
import { CardImg, CardWrapper } from '../../styles/card';
import { CardInfo } from './CardInfo';

export function Card() {
  const {image} = getApiProduct();

  return (
    <CardWrapper>
      <CardImg
        src={image}
        alt='Пицца'/>
      <CardInfo />
    </CardWrapper>
  );
}
