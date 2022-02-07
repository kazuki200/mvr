import React from 'react';

export const Search = () => {
  console.log("rendered Search")
  return(
   <div>
     <form action="" method='post' className='flex justify-center mt-20'>
      <input className='border-2 border-black rounded-full w-3/5 h-10 px-4 mr-5' id='search-keyword' type="text" placeholder='映画名、人物名などで検索' />
      <input className='cursor-pointer hover:text-white' type="submit" value="検索"></input>
    </form>
  </div>
  )
};
