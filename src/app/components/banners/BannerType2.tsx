'use client';

import DecorationCrown from '@/app/ui/decoration/DecorationCrown';
import Background from '../../ui/background/Background';
import { BannerProps } from './interface.banner';

export default function BannerType2({
  brideName,
  groomName,
  groomWeddingDate,
  brideWeddingDate,
  backgroundImage,
  title = 'Save the Date'
}: BannerProps) {
  return (
    <div className="relative h-screen flex items-center justify-center">
            <Background
        src={backgroundImage}
        alt="Banner background"
        className="absolute inset-0"
        priority
      />
      <div className="absolute inset-0 bg-red-500 opacity-10"></div>
      <div className="relative z-10 text-white text-center items-center  w-full max-w-[1200px] mx-auto">
        <div className="text-lg md:text-xl font-bold mb-4 text-center">
          {brideWeddingDate ? (
            <div className="flex justify-center items-start gap-4 md:gap-8">
              <div className="text-center w-1/2">
                <p className="font-bold text-xl md:text-3xl mb-1 md:mb-2">Groom's family</p>
                <p className="text-md md:text-lg font-normal">{groomWeddingDate}</p>
              </div>
              <div className="text-center w-1/2">
                <p className="font-bold text-xl md:text-3xl mb-1 md:mb-2">Bride's family</p>
                <p className="text-md md:text-lg font-normal">{brideWeddingDate}</p>
              </div>
            </div>
          ) : (
<p className="font-bold text-xl md:text-3xl mb-1 md:mb-2">
                {groomWeddingDate}
            </p>
          )}
        </div>

        <div className="flex flex-col items-center w-[150px] mb-6 mx-auto">
          <DecorationCrown />
          <div className="text-[1.5rem] leading-[1.4em] font-bold tracking-widest mt-2 text-center">
            {title}
          </div>
        </div>
        <div className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[1.4em] mb-4 hidden md:block font-bold text-center">
          <div className="flex items-center justify-center">
            <div className="text-right flex-1">{groomName}</div>
            <div className="px-6">&</div>
            <div className="text-left flex-1">{brideName}</div>
          </div>
        </div>
        <div className='text-[3rem] md:text-[3rem] leading-[1.2em] mb-4 md:hidden font-bold text-center'>
          <div>
            {groomName}
          </div>
          <div className="px-6">&</div>
          <div>
            {brideName}
          </div>
        </div>
      </div>
    </div>
  );
}
