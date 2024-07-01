import React, { useRef, useState } from 'react';
import client1 from '../Page/images/client1.svg';
import client2 from '../Page/images/client2.svg';
import client3 from '../Page/images/client3.svg';
import client4 from '../Page/images/client4.svg';
import client5 from '../Page/images/client5.svg';
import arrow from '../Page/images/strelk.svg';

const clients = [
  { id: 1, client: client1 },
  { id: 2, client: client2 },
  { id: 3, client: client3 },
  { id: 4, client: client4 },
  { id: 5, client: client5 },
  { id: 6, client: client1 },
  { id: 7, client: client2 },
  { id: 8, client: client3 },
];

export default function Clients() {
  const mapClientRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (mapClientRef.current) {
      mapClientRef.current.scrollLeft -= 300;
      setScrollPosition(mapClientRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (mapClientRef.current) {
      mapClientRef.current.scrollLeft += 300;
      setScrollPosition(mapClientRef.current.scrollLeft);
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
      <div className='mapClient' ref={mapClientRef}>
        {clients.map((el) => (
          <div key={el.id}>
            <img
              src={el.client}
              className='imgClient'
              alt={`Client ${el.id}`}
            />
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
