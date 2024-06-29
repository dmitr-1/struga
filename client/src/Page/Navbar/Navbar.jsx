import React from 'react';
import Logo from '../images/Logotype.svg';
import Elipse from '../images/Elipse.svg';

export default function Navbar() {
  const ElipsImg = <img className='ElipsNav' src={Elipse} alt='Elipse' />;

  return (
    <div className='navMenu'>
      <span>О нас {ElipsImg}</span>
      <span>Каталог {ElipsImg}</span>
      <span>Отзывы</span>
      <img src={Logo} alt='Логотип' />
      <span>Оплата и доставка {ElipsImg}</span>
      <span>Контакты</span>
    </div>
  );
}
