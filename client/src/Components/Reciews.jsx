import React, { useRef, useState } from 'react';
import imgDefault from '../Page/images/imageDefault.png';
import Rating from '@mui/material/Rating';
import arrow from '../Page/images/strelk.svg';

const reciews = [
  {
    id: 1,
    rating: 4,
    txt: 'Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу',
    photo: imgDefault,
    name: 'Иван',
    job: 'Директор',
  },
  {
    id: 2,
    rating: 5,
    txt: 'Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro',
    photo: imgDefault,
    name: 'Петр',
    job: 'Владелец',
  },
  {
    id: 3,
    rating: 3,
    txt: 'Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу',
    photo: imgDefault,
    name: 'Игорь',
    job: 'Курьер',
  },
  {
    id: 4,
    rating: 5,
    txt: 'Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro',
    photo: imgDefault,
    name: 'Александр',
    job: 'Директор',
  },
  {
    id: 5,
    rating: 3,
    txt: 'Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу',
    photo: imgDefault,
    name: 'fsedfsf',
    job: 'Строитель',
  },
  {
    id: 6,
    rating: 4,
    txt: 'Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro',
    photo: imgDefault,
    name: 'fsedfsf',
    job: 'Курьер',
  },
  {
    id: 7,
    rating: 5,
    txt: 'Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу',
    photo: imgDefault,
    name: 'Александр',
    job: 'Строитель',
  },
  {
    id: 8,
    rating: 4,
    txt: 'Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro',
    photo: imgDefault,
    name: 'fsedfsf',
    job: 'Курьер',
  },
];

export default function Reciews() {
  const mapReciewsRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (mapReciewsRef.current) {
      mapReciewsRef.current.scrollLeft -= 500;
      setScrollPosition(mapReciewsRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (mapReciewsRef.current) {
      mapReciewsRef.current.scrollLeft += 500;
      setScrollPosition(mapReciewsRef.current.scrollLeft);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div onClick={() => scrollLeft()}>
        <img
          src={arrow}
          style={{ cursor: 'pointer', marginRight: '15px' }}
          alt='left arrow'
        />
      </div>
      <div className='mapReciews' ref={mapReciewsRef}>
        {reciews.map((el) => (
          <div key={el.id} className='oneRec'>
            <Rating
              name='read-only'
              value={el.rating}
              readOnly
              style={{ marginBottom: '20px' }}
            />
            <div style={{ width: '300px', marginBottom: '20px' }}>{el.txt}</div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img src={el.photo} className='defaultPhoto' />
              <div>
                <div style={{ color: '#BE713C' }}>{el.name}</div>
                <div>{el.job}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div onClick={() => scrollRight()}>
        <img
          src={arrow}
          style={{
            transform: 'rotate(180deg)',
            cursor: 'pointer',
            marginLeft: '30px',
          }}
          alt='right arrow'
        />
      </div>
    </div>
  );
}
