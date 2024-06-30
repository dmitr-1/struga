import React from 'react';
import imgDefault from '../Page/images/imageDefault.png';
import Rating from '@mui/material/Rating';

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
  return (
    <div className='mapReciews'>
      {reciews.map((el) => (
        <div key={el.id} className='oneRec'>
          <Rating name='read-only' value={el.rating} readOnly style={{marginBottom:'20px'}}/>
          <div style={{width:'300px',marginBottom:'20px'}}>{el.txt}</div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <img src={el.photo} className='defaultPhoto' />
            <div>
              <div style={{color:'#BE713C'}}>{el.name}</div>
              <div>{el.job}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
