import { Options } from "./components/Options";
import {DEFAULT_VALUE, problems} from "../../config";
import { updateUserData } from "../../../../services/updateUserData";
import type { TStepProps, TProblem } from "../../types";
import styles from "../../Screen.module.css";

export const FirstStep = ({ currentProblem, setValue, setCurrentProblem, handleNextStep }: TStepProps) => {
  const handleClick = (type: string) => {
    updateUserData({ type })
    setValue(DEFAULT_VALUE)
    setCurrentProblem(type as TProblem)
    handleNextStep(2)
  }

  return (
    <div className={styles.view}>
      <p className={styles.question}>
        Какой вид азартной деятельности вас беспокоит?
      </p>
      <Options
        value={currentProblem}
        options={problems}
        onChange={handleClick}
      />
    </div>
  )
}
