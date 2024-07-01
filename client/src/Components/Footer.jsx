import React from 'react';
import logoFooter from '../Page/images/logoFooter.svg';
import shops from '../Page/images/shopFooter.svg';
import cont from '../Page/images/contactsFoot.svg';

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
          <img src={shops} style={{ marginTop: '20px', cursor: 'pointer' }} />
          <div className='strugaDop'>struga.pro 2024</div>
          <div className='strugaDop'>Политика конфиденциальности</div>
        </div>
        <div className='footerCont'>
          <div style={{ color: '#BE713C', fontSize: '20px' }}>КОНТАКТЫ</div>
          <div className='infoContFooter'>+7 (917) 449-01-30</div>
          <div className='infoContFooter'>+7 (927) 082-18-49</div>
          <div className='infoContFooter'>struga.pro@yandex.ru</div>
          <img src={cont} className='infoContFooter'/>
        </div>
        <div className='footerNavi'>
          <div style={{ color: '#BE713C', fontSize: '20px' }}>НАВИГАЦИЯ</div>
          <div className='infoNaviFooter'>О нашей мастерской</div>
          <div className='infoNaviFooter'>Каталог товаров</div>
          <div className='infoNaviFooter'>Отзывы</div>
          <div className='infoNaviFooter'>Галерея наших работ</div>
          <div className='infoNaviFooter'>Оплата и доставка</div>
          <div className='infoNaviFooter'>Контакты</div>
        </div>
        <div className='footercatalog'>
          <div style={{ color: '#BE713C', fontSize: '20px' }}>КАТАЛОГ</div>
          <div className='infoCatalogFooter'>Мебель и интерьер</div>
          <div className='infoCatalogFooter'>Менажницы-орешницы</div>
          <div className='infoCatalogFooter'>Доски сервировочные</div>
          <div className='infoCatalogFooter'>Тарелки и блюда</div>
          <div className='infoCatalogFooter'>Доски разделочные</div>
          <div className='infoCatalogFooter'>
            Индивидуальные изделия для ресторанов
          </div>
        </div>
      </div>
    </div>
  );
}
