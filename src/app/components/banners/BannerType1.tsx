'use client';

import Background from '../../ui/background/Background';
import { BannerProps } from './interface.banner';

export default function BannerType1({
  brideName,
  groomName,
  groomWeddingDate,
  brideWeddingDate,
  backgroundImage,
  title = 'Save the Date'
}: BannerProps) {
  return (
    <div className="relative h-screen">
      <Background
        src={backgroundImage}
        alt="Banner background"
        className="absolute inset-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="z-10 text-white text-left md:text-left text-center max-w-[1200px] mx-auto px-6 flex flex-col items-center md:items-start justify-center h-full">
        <div className="text-[6rem] leading-[1.4em] mb-4 hidden md:block font-bold text-left">
          {groomName} & {brideName}
        </div>
        <div className='text-[3rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.2em] mb-4 md:hidden font-bold text-center'>
          <div>
            {groomName}
          </div>
          <div>&</div>
          <div>
            {brideName}
          </div>
        </div>
        <div className="text-lg md:text-2xl font-bold mb-4 text-center md:text-left w-full">
          {brideWeddingDate ? (
            <>
              <p className="hidden md:block">
                Groom's family: {groomWeddingDate} <span className=''> | </span> Bride's family: {brideWeddingDate}
              </p>
              <div className="md:hidden sm:text-base w-full">
                <div className="text-center">
                  <div className="text-center text-2xl ">Groom's family</div>
                  <div className="text-center"> {groomWeddingDate} </div>
                </div>
                <div className='mt-2 text-center'>
                  <div className="text-center text-2xl">Bride's family</div>
                  <div className="text-center"> {brideWeddingDate} </div>
                </div>
              </div>
            </>
          ) : (
            <p className="">
              {groomWeddingDate}
            </p>
          )}
        </div>
        <p className="text-3xl md:text-4xl font-bold text-center md:text-left">
          {title}
        </p>
      </div>
    </div>
  );
}
