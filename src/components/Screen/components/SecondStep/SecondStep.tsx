import styles from "../../Screen.module.css";
import { options } from "../../config";
import { Picker } from "./components/Picker";
import type { TStepProps } from "../../types";

export const SecondStep = ({ value, currentProblem, setValue }: TStepProps) => {
  return (
    <div className={styles.view}>
      <p className={styles.question}>
        Выберите вариант приближенный к вашей ситуации
      </p>
      {currentProblem && (
        <Picker
          options={options[currentProblem]}
          value={value}
          setValue={(value) => setValue(value as number)}
        />
      )}
    </div>
  )
}
