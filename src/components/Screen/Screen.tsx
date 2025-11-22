import { useState } from "react";
import { closeMiniApp } from '@telegram-apps/sdk-react';
import clsx from "clsx";
import { useSafeArea } from "../../hooks/useSafeArea";
import { Page } from "../Page";
import { Background } from "./ui/Background";
import { Options } from "./ui/Options";
import { Indicator } from "./ui/Indicator";
import { Picker } from "./ui/Picker";
import { options, getSectionIndex, COLORS, problems } from "./config";
import styles from './Screen.module.css';
import {updateUserData} from "../../services/updateUserData.ts";

const TRANSITION_ANIMATION = 400
const DEFAULT_VALUE = 18
type TProblem = 'casino' | 'betting' | 'trading' | null

export const Screen = () => {
  const [isEnd, setEnd] = useState<boolean>(false);
  const [isEndContent, setIsEndContent] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentProblem, setCurrentProblem] = useState<TProblem>(null)
  const [value, setValue] = useState<number>(DEFAULT_VALUE)
  const { bottom } = useSafeArea()

  const sectionIndex = getSectionIndex(value)
  const currentColor = COLORS[sectionIndex]

  const handleSelectProblem = (value: TProblem) => {
    if (value !== null) {
      updateUserData({ type: value })
    }

    setIsAnimating(true)

     setTimeout(() => {
       setIsAnimating(false)
       setCurrentProblem(value as TProblem)
       if (value === null) {
         setValue(DEFAULT_VALUE)
       }
     }, TRANSITION_ANIMATION)
  }

  const handleApprove = () => {
    updateUserData({ level: value })
    setEnd(true)

    setTimeout(() => {
      setEnd(false)
      setIsEndContent(true)
    }, TRANSITION_ANIMATION)
  }

  return (
    <Page back={!!currentProblem && !isEndContent} onClick={() => handleSelectProblem(null)}>
      <Background key={currentProblem} type={currentProblem} />
      <div className={clsx(styles.container, isEnd && styles.containerEnd)}>
        {isEndContent ? (
          <div className={styles.endContent}>
            <p>
              Спасибо за ответ! <br />
              {value === 0 ? 'Похоже вы не нуждаетесь в лечении!' : 'Мы подбираем для вас курс лечения'}
            </p>
            <button
              className={styles.button}
              disabled={!currentProblem}
              style={{ background: currentColor }}
              onClick={() => closeMiniApp()}
            >
              Закрыть приложение
            </button>
          </div>
        ) : (
          <>
            <div className={clsx(styles.content, isAnimating && styles.contentHide)}>
              {currentProblem ? (
                <>
                  <div className={styles.view}>
                    <p className={styles.question}>
                      Выберите вариант приближенный к вашей ситуации
                    </p>
                    <Picker
                      options={options[currentProblem]}
                      value={value}
                      setValue={(value) => setValue(value as number)}
                    />
                  </div>
                </>
              ) : (
                <div className={styles.view}>
                  <p className={styles.question}>
                    Какой вид азартной деятельности вас беспокоит?
                  </p>
                  <Options
                    value={currentProblem}
                    options={problems}
                    onChange={(value) => handleSelectProblem(value as TProblem)}
                  />
                </div>
              )}
            </div>
            <div className={clsx(styles.indicator, currentProblem && styles.indicatorShow)}>
              <Indicator
                value={value}
                currentColor={currentColor}
                sectionIndex={sectionIndex}
              />
              <div
                // @ts-ignore
                style={{ '--default-padding-bottom': bottom + 'px' }}
                className={styles.footer}
              >
                <button
                  className={styles.button}
                  disabled={!currentProblem}
                  style={{ background: currentColor }}
                  onClick={handleApprove}
                >
                  Подтвердить проблему
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Page>
  )
}
