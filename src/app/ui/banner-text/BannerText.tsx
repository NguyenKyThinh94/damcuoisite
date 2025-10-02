import BannerTextSimple from "./BannerTextSimple";
import BannerTextWithAddress from "./BannerTextWithAddress";
import BannerTextSingle from "./BannerTextSingle";

interface BannerTextProps {
  type: 'simple' | 'withAddress' | 'single';
  brideName: string;
  groomName: string;
  groomWeddingDate: string;
  brideWeddingDate: string;
  weddingDate?: string; // Cho type 'single'
  className?: string;
}

export default function BannerText({
  type = 'withAddress',
  brideName,
  groomName,
  groomWeddingDate,
  brideWeddingDate,
  weddingDate,
  className = ""
}: BannerTextProps) {
    if (type === 'simple') {
        return <BannerTextSimple
            brideName={brideName}
            groomName={groomName}
            groomWeddingDate={groomWeddingDate}
            brideWeddingDate={brideWeddingDate}
            className={className}
        />;
    }
    
    if (type === 'single') {
        return <BannerTextSingle
            brideName={brideName}
            groomName={groomName}
            weddingDate={weddingDate || groomWeddingDate}
            className={className}
        />;
    }
    
  return <BannerTextWithAddress
    brideName={brideName}
    groomName={groomName}
    groomWeddingDate={groomWeddingDate}
    brideWeddingDate={brideWeddingDate}
    className={className}
  />;
}