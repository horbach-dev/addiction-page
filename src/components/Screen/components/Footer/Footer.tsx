import clsx from "clsx";
import { useSafeArea } from "../../../../hooks/useSafeArea";
import { updateUserData } from "../../../../services/updateUserData";
import { COLORS, getSectionIndex } from "../../config";
import type { TStepProps } from "../../types";
import { Indicator } from "./components/Indicator";
import styles from "./Footer.module.css";

interface IProps extends Pick<TStepProps, 'handleNextStep' | 'value'> {
  isShow: boolean;
}

export const Footer = ({ value, isShow, handleNextStep }: IProps) => {
  const { bottom } = useSafeArea()
  const sectionIndex = getSectionIndex(value)
  const currentColor = COLORS[sectionIndex]

  const handleApprove = () => {
    updateUserData({ level: value })
    handleNextStep(3)
  }

  return (
    <div className={clsx(styles.container, isShow && styles.containerShow)}>
      <Indicator
        value={value}
        currentColor={currentColor}
        sectionIndex={sectionIndex}
      />
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
          Подтвердить проблему
        </button>
      </div>
    </div>
  )
}
