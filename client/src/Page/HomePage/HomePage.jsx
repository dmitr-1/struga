import React from 'react';
import VideoPlay from '../../Components/VideoPlay';

export default function HomePage() {
  return (
    <div>
      <div className='mainBlock'>
        <div className='info'>
          <div className='infoText'>
            <div className='infoTextOne'>
              Изделия из дерева на заказ с доставкой по России
            </div>
            <div className='infoTextTwo'>
              Cтиль и уют деревянных аксессуаров в ваш дом, ресторан или кафе
            </div>
            <button type='submit' className='btnCatalog'>
              ПЕРЕЙТИ В КАТАЛОГ
            </button>
          </div>
          <div className='infoPlay'>
            <VideoPlay />
          </div>
        </div>
        <div className='aboutMe'>
          <span className='numberInfo'>
            <div style={{ fontSize: '60px', fontWeight: '700' }}>14</div>
            <div style={{ fontSize: '20px' }}>ЛЕТ ОПЫТА</div>
          </span>
          <span className='numberInfo'>
            <div style={{ fontSize: '60px', fontWeight: '700' }}>12 000</div>
            <div style={{ fontSize: '20px' }}>ИЗДЕЛИЙ ИЗГОТОВЛЕНО</div>
          </span>
          <span className='numberInfo'>
            <div style={{ fontSize: '60px', fontWeight: '700' }}>700+</div>
            <div style={{ fontSize: '20px' }}>ДОВОЛЬНЫХ КЛИЕНТОВ</div>
          </span>
          <span className='numberInfo'>
            <div style={{ fontSize: '60px', fontWeight: '700' }}>4.95</div>
            <div style={{ fontSize: '20px' }}>СРЕДНИЙ РЕЙТИНГ ЗАКАЗОВ</div>
          </span>
        </div>
      </div>
    </div>
  );
}
