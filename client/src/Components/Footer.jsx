import React from 'react';
import logoFooter from '../Page/images/logoFooter.svg';
import shops from '../Page/images/shopFooter.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerContent'>
        <div className='footerStruga'>
          <img src={logoFooter} />
          <div className='StrugaDiscript'>
            Struga.pro — творческая столярная мастерская. Работаем в Уфе,
            доставляем по всей России.
          </div>
          <img src={shops} />
          <div className='strugaDop'>struga.pro 2024</div>
          <div className='strugaDop'>Политика конфиденциальности</div>
        </div>
        <div className='footerCont'>
          <div style={{ color: '#BE713C', fontSize: '20px' }}>КОНТАКТЫ</div>
        </div>
        <div className='footerNavi'>
          <div style={{ color: '#BE713C', fontSize: '20px' }}>НАВИГАЦИЯ</div>
        </div>
        <div className='footercatalog'>
          <div style={{ color: '#BE713C', fontSize: '20px' }}>КАТАЛОГ</div>
        </div>
      </div>
    </div>
  );
}
