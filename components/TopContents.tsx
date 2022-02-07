import React, { VFC } from 'react';
import {AiOutlineStar,AiOutlineHeart} from 'react-icons/ai'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Mousewheel, Pagination,Scrollbar } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { useQueryMV } from '../hooks/useQueryMV';

type Props ={
  children: string
}

export const TopContents:VFC<Props> = ({children}) => {
  const {data,status} = useQueryMV()
  console.log("rendered TopCOntents")
  if (status === "loading") return <div>{"ローディング中です"}</div>
  if (status === "error") return <div>{"エラーです"}</div>
  return (
    <div className='w-5/6 my-0 mx-auto mt-32'>
      <h2 className='text-2xl font-bold font-mono mb-10 mt-10'>{children}</h2>
      <Swiper
        slidesPerView={4}
        // centeredSlides={true}
        mousewheel={true}
        // pagination={{
        //   clickable: true,
        // }}
        scrollbar={true}
        modules={[Mousewheel, Pagination,Scrollbar]}
      className="mySwiper"
       >
         {data.map((movie)=> (
           <SwiperSlide>
           <div className='w-44'>
             <img className='h-52 w-44 object-cover rounded-3xl' src="movie" alt="映画・ドラマ・アニメ" />
             <div className='flex justify-around'>
               <AiOutlineStar className='text-3xl'/>
               <AiOutlineHeart className='text-3xl'/>
             </div>
             <p className='text-center text-lg font-medium font-serif'>{movie.title}</p>
            <p className='text-center text-xs text-gray-500'>2020/01/01</p>
           </div>
       </SwiperSlide>
         ))}
        
        <SwiperSlide >
          <div className='w-44'>
            <img className='h-52 w-44 object-cover rounded-3xl' src="pokemonM.png" alt="映画・ドラマ・アニメ" />
            <div className='flex justify-around'>
              <AiOutlineStar className='text-3xl'/>
              <AiOutlineHeart className='text-3xl'/>
            </div>
            <p className='text-center text-lg font-medium font-serif'>映画の名前</p>
            <p className='text-center text-xs text-gray-500'>2020/01/01</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='w-44'>
            <img className='h-52 w-44 object-cover rounded-3xl' src="pokemonM.png" alt="映画・ドラマ・アニメ" />
            <div className='flex justify-around'>
              <AiOutlineStar className='text-3xl'/>
              <AiOutlineHeart className='text-3xl'/>
            </div>
            <p className='text-center text-lg font-medium font-serif'>映画の名前</p>
            <p className='text-center text-xs text-gray-500'>2020/01/01</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='w-44'>
            <img className='h-52 w-44 object-cover rounded-3xl' src="pokemonM.png" alt="映画・ドラマ・アニメ" />
            <div className='flex justify-around'>
              <AiOutlineStar className='text-3xl'/>
              <AiOutlineHeart className='text-3xl'/>
            </div>
            <p className='text-center text-lg font-medium font-serif'>映画の名前</p>
            <p className='text-center text-xs text-gray-500'>2020/01/01</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='w-44'>
            <img className='h-52 w-44 object-cover rounded-3xl' src="pokemonM.png" alt="映画・ドラマ・アニメ" />
            <div className='flex justify-around'>
              <AiOutlineStar className='text-3xl'/>
              <AiOutlineHeart className='text-3xl'/>
            </div>
            <p className='text-center text-lg font-medium font-serif'>映画の名前</p>
            <p className='text-center text-xs text-gray-500'>2020/01/01</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='w-44'>
            <img className='h-52 w-44 object-cover rounded-3xl' src="pokemonM.png" alt="映画・ドラマ・アニメ" />
            <div className='flex justify-around'>
              <AiOutlineStar className='text-3xl'/>
              <AiOutlineHeart className='text-3xl'/>
            </div>
            <p className='text-center text-lg font-medium font-serif'>映画の名前</p>
            <p className='text-center text-xs text-gray-500'>2020/01/01</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='w-44'>
            <img className='h-52 w-44 object-cover rounded-3xl' src="pokemonM.png" alt="映画・ドラマ・アニメ" />
            <div className='flex justify-around'>
              <AiOutlineStar className='text-3xl'/>
              <AiOutlineHeart className='text-3xl'/>
            </div>
            <p className='text-center text-lg font-medium font-serif'>映画の名前</p>
            <p className='text-center text-xs text-gray-500'>2020/01/01</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className='w-44'>
            <img className='h-52 w-44 object-cover rounded-3xl' src="pokemonM.png" alt="映画・ドラマ・アニメ" />
            <div className='flex justify-around'>
              <AiOutlineStar className='text-3xl'/>
              <AiOutlineHeart className='text-3xl'/>
            </div>
            <p className='text-center text-lg font-medium font-serif'>映画の名前</p>
            <p className='text-center text-xs text-gray-500'>2020/01/01</p>
          </div>
        </SwiperSlide>
      </Swiper>
  </div>
  );
};
