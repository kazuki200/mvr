import React from 'react';
import FadeMenu from './FadeMenu';

export const Header = () => {
  console.log("rendered Header")
  return (
    <div className='bg-white h-20 w-screen fixed flex justify-around  z-50'>
    <ul className='flex items-center w-5/12 justify-between'>
      <li><img className='h-16 w-80 object-cover' src="/title.png" alt="ヘッドロゴ" /></li>
      <li><FadeMenu children="映画" title1='人気の映画' title2='上映中の映画' title3='近日公開の映画'/></li>
      <li><FadeMenu children="ドラマ"  title1='人気のドラマ' title2='放送中のドラマ'/></li>
      <li><FadeMenu children="アニメ"  title1='人気のアニメ' title2='放送中のアニメ'/></li>
    </ul>
    <ul className='w-80 flex items-center justify-between'>
      <li>ゲストアカウントです</li>
      <li><img className='h-6 w-6' src="myPage.png" alt="マイページ" /></li>
      <li><img className='h-6 w-6'  src="search.png" alt="サーチ" /></li>
    </ul>
  </div>
  );
};
