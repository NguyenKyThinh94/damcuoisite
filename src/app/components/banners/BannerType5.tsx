'use client';

import Image from 'next/image';
import { BannerProps } from './interface.banner';
import DecorationTopLLeft from '@/app/ui/decoration/Decoration.page.type1';
import DecorationBottom from '@/app/ui/decoration/DecorationBottom';

export default function BannerType5({
  brideName,
  groomName,
  groomWeddingDate,
  brideWeddingDate,
  backgroundImage,
  title = 'Save the Date'
}: BannerProps) {

  return (
          <div className="relative h-screen md:flex">
                        <div className='relative md:w-3/5 h-[85vh] md:h-screen'>
                <Image
                  src={backgroundImage}
                  alt="Banner"
                  fill
                  className='object-cover'
                  priority
                />
                    <button
                    className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:opacity-70 rounded-full p-3 transition-all duration-300"
                    aria-label="Scroll to content"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" className="zui-svg-icon css-suxo5u elkal1d1" viewBox="0 0 14 8" color="FFFFFF" fill="currentColor" style={{ width: '28px', height: '16px' }} aria-labelledby="Caret4"><title id="Caret4">Caret</title><path fillRule="evenodd" clipRule="evenodd" d="M6.285 7.701a1.027 1.027 0 001.459-.01l5.937-5.919A1.02 1.02 0 0014 1.034 1.028 1.028 0 0012.257.3l-.003-.004-5.226 5.19L1.764.301 1.76.305A1.028 1.028 0 000 1.027c0 .298.13.561.333.748l5.95 5.93.002-.004z"></path></svg>
                  </button>
              </div>
            <div 
              className='md:w-2/5 overflow-y-auto text-[#4a4a4a] [&::-webkit-scrollbar]:hidden' 
              style={{
                backgroundColor: 'rgba(254, 226, 226, 0.8)',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div className="min-h-[200vh]">
                <div className="relative flex flex-col justify-center items-center h-screen">
                  <DecorationTopLLeft
                    width={500}
                    height={700}
                    className='max-w-1/2'
                  />
                  <DecorationBottom
                    width={500}
                    height={700}
                    className='max-w-1/2'
                  />
                  <div className=" text-[3rem] md:text-[5rem] leading-[1.2em] mb-4 font-bold text-center">
                    <div>
                      {groomName}
                    </div>
                    <div>&</div>
                    <div>
                      {brideName}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      document.getElementById('banner-text')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 hover:opacity-70 rounded-full p-3 transition-all duration-300"
                    aria-label="Scroll to content"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" className="zui-svg-icon css-suxo5u elkal1d1" viewBox="0 0 14 8" color="FFFFFF" fill="currentColor" style={{ width: '28px', height: '16px' }} aria-labelledby="Caret4"><title id="Caret4">Caret</title><path fillRule="evenodd" clipRule="evenodd" d="M6.285 7.701a1.027 1.027 0 001.459-.01l5.937-5.919A1.02 1.02 0 0014 1.034 1.028 1.028 0 0012.257.3l-.003-.004-5.226 5.19L1.764.301 1.76.305A1.028 1.028 0 000 1.027c0 .298.13.561.333.748l5.95 5.93.002-.004z"></path></svg>
                  </button>
                </div>
                <div id="banner-text" className="relative h-screen flex items-center justify-center">
                  <div className="z-10 text-center items-center  w-full max-w-[1200px] mx-auto">
                    <div className="text-lg md:text-xl font-bold mb-4 text-center w-full">
                      {brideWeddingDate ? (
                          <div className="text-center ">
                            <div className=" mb-4">
                              <p className="font-bold text-2xl">Groom's family</p>
                              <p className="text-base font-normal">{groomWeddingDate}</p>
                            </div>
                            <div className=" mb-4">
                              <p className="font-bold text-2xl">Bride's family</p>
                              <p className="text-base font-normal">{brideWeddingDate}</p>
                            </div>
                          </div>
                      ) : (
                        <p className="">
                          {groomWeddingDate}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-center w-[300px] mb-6 mx-auto">
                      <div className="text-[1.5rem] leading-[1.4em] font-bold tracking-widest mt-2 text-center">
                        {title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
  );
}
