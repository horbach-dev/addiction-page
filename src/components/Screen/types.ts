import { STEPS } from "./config";

export type TProblem = 'casino' | 'betting' | 'trading' | null
export type TStep = keyof typeof STEPS

export type TStepProps = {
  value: number;
  setValue: (value: number) => void;
  currentProblem: TProblem;
  setCurrentProblem: (value: TProblem) => void;
  handleNextStep: (value: TStep, isBack?: boolean) => void;
}
