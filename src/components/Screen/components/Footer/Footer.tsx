import clsx from "clsx";
import { useSafeArea } from "../../../../hooks/useSafeArea";
import { updateUserData } from "../../../../services/updateUserData";
import type { TStepProps } from "../../types";
import { Indicator } from "./components/Indicator";
import styles from "./Footer.module.css";

interface IProps extends Pick<TStepProps, 'handleNextStep' | 'value'> {
  isShow: boolean;
}

export const Footer = ({ value, isShow, handleNextStep }: IProps) => {
  const { bottom } = useSafeArea()

  const handleApprove = () => {
    updateUserData({ level: value })
    handleNextStep(3)
  }

  return (
    <div className={clsx(styles.container, isShow && styles.containerShow)}>
      <Indicator value={value} />
      <div
        // @ts-ignore
        style={{ '--default-padding-bottom': bottom + 'px' }}
        className={styles.action}
      >
        <button
          className={styles.button}
          disabled={!isShow}
          onClick={handleApprove}
        >
          {value === 0 ? 'Нет проблем' : 'Подтвердить проблему'}
        </button>
      </div>
    </div>
  )
}
