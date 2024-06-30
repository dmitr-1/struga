import React from 'react';
import client1 from '../Page/images/client1.svg';
import client2 from '../Page/images/client2.svg';
import client3 from '../Page/images/client3.svg';
import client4 from '../Page/images/client4.svg';
import client5 from '../Page/images/client5.svg';

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
  return (
    <div className='mapClient'>
      {clients.map((el) => (
        <div key={el.id}>
          <img src={el.client} className='imgClient' />
        </div>
      ))}
    </div>
  );
}
