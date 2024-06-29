import React from 'react';
import PlayLbl from '../Page/images/PlayLbl.svg';

export default function VideoPlay() {
  return (
    <div>
      <svg className='circle' viewBox='0 0 100 100'>
        <path id='circle' d='M 0,50 a 50,50 0 1,1 0,1 z' />
        <foreignObject x='25' y='17' width='80' height='80'>
          <img src={PlayLbl} alt='Логотип' id='playLogo' />
        </foreignObject>
        <text>
          <textPath xlinkHref='#circle'>
            Краткое видео о нашей мастерской
          </textPath>
        </text>
      </svg>
    </div>
  );
}
