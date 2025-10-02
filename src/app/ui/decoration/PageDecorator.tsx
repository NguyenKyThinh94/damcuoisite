import DecorationPageType1 from './pages/Decoration.page.type1';
import DecorationPageType2 from './pages/Decoration.page.type2';

interface PageDecoratorProps {
  type: 'type1' | 'type2';
  className?: string;
  width?: number;
  height?: number;
}

export default function PageDecorator({ 
  type,
  className = "",
  width = 250,
  height = 300
}: PageDecoratorProps) {
      return null;
}
