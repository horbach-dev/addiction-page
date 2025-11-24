import { useEffect, useState } from "react";
import clsx from "clsx";
import { trackUserVisit } from "../../services/trackUserVisit";
import { Page } from "../Page";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";
import { COLORS, STEPS, getSectionIndex, DEFAULT_VALUE } from "./config";
import type { TProblem, TStep } from "./types";
import styles from './Screen.module.css';

const TRANSITION_ANIMATION = 400

export const Screen = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [value, setValue] = useState<number>(DEFAULT_VALUE);
  const [currentStep, setCurrentStep] = useState<TStep>(0);
  const [currentProblem, setCurrentProblem] = useState<TProblem>(null);

  useEffect(() => {
    trackUserVisit().finally(() => {
      handleNextStep(1)
    })
  }, [])

  const handleNextStep = (step: TStep) => {
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentStep(step)
      setIsAnimating(false)
      if (step === 2) {
        setCurrentProblem(null)
      }
    }, TRANSITION_ANIMATION)
  }

  const handleBack = () => {
    if (currentStep === 1) return
    handleNextStep(currentStep - 1 as TStep)
  }

  const CurrentStep = STEPS[currentStep]
  const sectionIndex = getSectionIndex(value)
  const currentColor = COLORS[sectionIndex]

  return (
    <Page
      back={!!currentProblem}
      onClick={handleBack}
    >
      <Background
        key={currentProblem}
        type={currentProblem}
      />
      <div
        // @ts-ignore
        style={{ '--current-color': currentColor }}
        className={styles.container}
      >
        <div className={clsx(styles.content, isAnimating && styles.contentHide)}>
          <CurrentStep
            value={value}
            setValue={setValue}
            currentProblem={currentProblem}
            setCurrentProblem={setCurrentProblem}
            handleNextStep={handleNextStep}
          />
        </div>
        <Footer
          value={value}
          isShow={currentStep === 2}
          handleNextStep={handleNextStep}
        />
      </div>
    </Page>
  )
}
