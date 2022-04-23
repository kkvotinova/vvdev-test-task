import { useSelector } from 'react-redux';
import { FooterWrapper } from '../../styles/shoppingCart';
import { IState } from '../../types';

export function ShoppingCart() {
  const cartTotal = useSelector((state: IState) => state.cartTotal)

  return (
    <FooterWrapper visibility={cartTotal ? 'visible' : 'hidden'}>
      Итого к оплате: {cartTotal},00 ₽
    </FooterWrapper>
  );
}
