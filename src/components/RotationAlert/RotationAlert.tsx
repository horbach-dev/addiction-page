import { useWindowSize } from "../../hooks/useWindowSize";
import styles from './RotationAlert.module.css';

export const RotationAlert = () => {
  const { width, height } = useWindowSize();

  if (height > width + height / 4) {
    return null;
  }

  return (
    <div className={styles.container}>
      <p>Пожалуйста <br/> поверните устройство</p>
    </div>
  )
}
