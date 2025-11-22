import { closeMiniApp } from "@telegram-apps/sdk-react";
import styles from "./LastStep.module.css";

interface IProps {
  value: number;
  currentProblem: any
}

export function LastStep({ value, currentProblem }: IProps) {
  return (
    <div className={styles.container}>
      <p>
        Спасибо за ответ! <br />
        {value === 0 ? 'Похоже вы не нуждаетесь в лечении!' : 'Мы подбираем для вас курс лечения'}
      </p>
      <button
        className={styles.button}
        disabled={!currentProblem}
        onClick={() => closeMiniApp()}
      >
        Закрыть приложение
      </button>
    </div>
  )
}
