import { ChevronLeft } from 'lucide-react';
import { useGoBack } from '../../../utils/hooks/useGoBack';
import styles from './back.module.scss'

interface IBackProps {
  onBack?: () => void;
  label?: string;
}

export const Back = ({ onBack, label = 'Назад' }: IBackProps) => {
  const goBack = useGoBack();
  
  const handleClick = () => {
    if (onBack) {
      onBack();
    } else {
      goBack();
    }
  };

  return (
    <div className={styles.back} onClick={handleClick}>
      <ChevronLeft size={24}/>
      <span className='typo-main'>{label}</span>
    </div>
  );
};
