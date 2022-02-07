import React from 'react';

export const MainImg = () => {
  console.log("rendered MainImg")
  return (
    <>
  <div>
    <img className='h-mainImg w-full object-cover' src="mainImg.png" alt="" />
  </div>
  <div className='absolute top-52 w-full text-center'>
    <h1 className='text-white text-6xl font-sans mb-20 '>映画・ドラマ・アニメの評価サイトです</h1>
    <div className='flex justify-center items-center'>
      <div className='bg-white h-0.5 w-24'></div>
      <p className='text-white text-4xl font-sans'>人生に、ムダな時間を提供します</p>
      <div className='bg-white h-0.5 w-24'></div>
    </div>
  </div>
  </>
  );
};
