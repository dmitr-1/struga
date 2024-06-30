import React from 'react';
import VideoPlay from '../../Components/VideoPlay';
import Navbar from '../Navbar/Navbar';
import CatalogImg from '../../Components/CatalogImg';
import img1About from '../images/imageAbout1.png';
import img2About from '../images/imageAbout2.png';
import Clients from '../../Components/Clients';

export default function HomePage() {
  return (
    <div>
      <div className='mainBlock'>
        <Navbar />
        <div className='info'>
          <div className='infoText'>
            <div className='infoTextOne'>
              Изделия из дерева на заказ с доставкой по России
            </div>
            <div className='infoTextTwo'>
              Cтиль и уют деревянных аксессуаров в ваш дом, ресторан или кафе
            </div>
            <button type='submit' className='btnCatalogMain'>
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
      <div className='catalogBlock'>
        <div className='catTitle'>Каталог</div>
        <div className='catDiscription'>
          Мы любим дерево, для нас важны детали, ценим профессиональный подход.
          Наши изделия изготовлены из отборной древесины и обработаны
          натуральными материалами. Мы гарантируем долговечность произведений
          мастерской.
        </div>
        <CatalogImg />
        <div style={{ textAlign: 'center' }}>
          <button type='submit' className='btnCatalog'>
            СМОТРЕТЬ ВЕСЬ КАТАЛОГ
          </button>
        </div>
      </div>
      <div className='aboutMaster'>
        <div style={{ width: '80vw', margin: '0 auto' }}>
          <div className='aboutMasterJScontent'>
            <div>
              <div className='aboutTitle'>О нашей мастерской</div>
              <div className='discriptonAbout'>
                Struga — творческая столярная мастерская, ручное производство
                деревянной посуды и кухонной утвари, предметов декора, элементов
                интерьера и мебели, подарков, сувениров. Для дома и бизнеса.
                Наши изделия изготовлены из отборной, хорошо высушенной
                древесины твердых пород, тщательно отшлифованы и пропитаны
                натуральными маслами. Мы любим дерево, для нас важны детали,
                ценим профессиональный подход, не экономим на материалах и
                инструментах, поэтому гарантируем долговечность произведений
                мастерской.
              </div>
              <div className='discriptonAbout'>
                История мастерской Struga началась в 2010 году с хобби —
                изготовление оригинальных фоторамок из состаренных сосновых
                дощечек на подарки для друзей. Начиная с 2015 столярная
                мастерская уже становится основным занятием, приносящим
                заработок. В процессе работы и творчества осваивались новые
                технологии, приемы и инструменты.   Пробовали изготавливать
                разделочные доски, тарелки, шкатулки, светильники. Со временем
                мастерская Struga обзавелась своим помещением и серьезным
                арсеналом станков и инструментов, преобразовалась во вполне
                удачный коммерческий проект с интересными работами.
              </div>
            </div>
            <div className='imgAbout'>
              <img src={img1About} className='tgtAbout1' />
              <img src={img2About} className='tgtAbout2' />
            </div>
          </div>
          <div className='aboutClient'>Наши клиенты</div>
          <Clients />
          <div className='aboutReciew'>Отзывы</div>
        </div>
      </div>
    </div>
  );
}
