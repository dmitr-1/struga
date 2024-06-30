import React from 'react';
import img1 from '../Page/images/image1.png';
import img2 from '../Page/images/image2.png';
import img3 from '../Page/images/image3.png';
import img4 from '../Page/images/image4.png';
import img5 from '../Page/images/image5.png';
import img6 from '../Page/images/image6.png';
import img7 from '../Page/images/image7.png';


export default function CatalogImg() {
  return (
    <div>
      <div className='catalogBlockMain'>
        <div className='One'>
          <img src={img1} className='tgt1' />

          <div className='catalogBlockMain'>
            <div className='One'>
              <img src={img2} className='tgt' />
              <img src={img3} className='tgt' />
            </div>
            <div className='One'>
              <img src={img4} className='tgt' />
              <img src={img5} className='tgt' />
            </div>
          </div>
        </div>
        <div className='One'>
          <img src={img6} className='tgt' />
          <img src={img7} className='tgt2' />
        </div>
      </div>
    </div>
  );
}
