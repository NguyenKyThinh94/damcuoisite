'use client';

import BannerType1 from './BannerType1';
import BannerType2 from './BannerType2';
import BannerType3 from './BannerType3';
import BannerType4 from './BannerType4';
import BannerType5 from './BannerType5';
import { BannerProps } from './interface.banner';

interface BannerWrapperProps extends BannerProps {
  type: 'type1' | 'type2' | 'type3' | 'type4' | 'type5';
}

export default function Banner({
  type,
  ...props
}: BannerWrapperProps) {
  switch (type) {
    case 'type1':
      return <BannerType1 {...props} />;
    case 'type2':
      return <BannerType2 {...props} />;
    case 'type3':
      return <BannerType3 {...props} />;
    case 'type4':
      return <BannerType4 {...props} />;
    case 'type5':
      return <BannerType5 {...props} />;
    default:
      return <BannerType1 {...props} />;
  }
}
