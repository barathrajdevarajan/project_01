import React from 'react';
import img3 from '../../img/img3.jpg';

const DIY = () => {
  return (
    <div>
      <div className='title_group'>
        <h1>DiyKits</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          assumenda ullam culpa aut alias libero modi minus asperiores
          distinctio animi dignissimos reiciendis dolor harum amet accusantium,
          commodi maxime possimus. Quo?
        </p>
      </div>
      <div className='grid_home'>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
        <div className='img_group'>
          <div className='title'>Title</div>
          <small>View all</small>
          <img src={img3} width='230px' height='300px' alt='' />
        </div>
      </div>
    </div>
  );
};

export default DIY;
