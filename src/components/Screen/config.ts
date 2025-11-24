import { Loading } from "./components/Loading";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { LastStep } from "./components/LastStep";

export const STEPS = {
  0: Loading,
  1: FirstStep,
  2: SecondStep,
  3: LastStep,
}

export const DEFAULT_VALUE = 18

export const problems = [
  { label: 'Казино', value: 'casino' },
  { label: 'Ставки', value: 'betting' },
  { label: 'Трейдинг', value: 'trading' },
]

export const options = {
  casino: [
    { label: 'Не играю', value: 0 },
    { label: 'Иногда думаю', value: 12 },
    { label: 'Редко играю', value: 18 },
    { label: 'По настроению играю', value: 23 },
    { label: 'Иногда играю', value: 29 },
    { label: 'Часто играю', value: 38 },
    { label: 'Регулярно играю', value: 46 },
    { label: 'Уже привычка', value: 52 },
    { label: 'Тянет играть', value: 58 },
    { label: 'Часто срываюсь', value: 72 },
    { label: 'Сильная тяга', value: 80 },
    { label: 'Зависимость', value: 90 },
    { label: 'Тяжёлая зависимость', value: 100 },
  ],
  betting: [
    { label: 'Не ставлю', value: 0 },
    { label: 'Иногда думаю', value: 12 },
    { label: 'Редко ставлю', value: 18 },
    { label: 'Ставлю по настроению', value: 23 },
    { label: 'Иногда ставлю', value: 29 },
    { label: 'Часто ставлю', value: 38 },
    { label: 'Регулярно ставлю', value: 46 },
    { label: 'Уже привычка', value: 52 },
    { label: 'Тянет делать ставки', value: 58 },
    { label: 'Часто срываюсь', value: 72 },
    { label: 'Сильная тяга', value: 80 },
    { label: 'Зависимость', value: 90 },
    { label: 'Тяжёлая зависимость', value: 100 },
  ],
  trading: [
    { label: 'Не торгую', value: 0 },
    { label: 'Иногда думаю', value: 12 },
    { label: 'Редко торгую', value: 18 },
    { label: 'Торгую по настроению', value: 23 },
    { label: 'Иногда торгую', value: 29 },
    { label: 'Часто торгую', value: 38 },
    { label: 'Регулярно торгую', value: 46 },
    { label: 'Уже привычка', value: 52 },
    { label: 'Тянет торговать', value: 58 },
    { label: 'Часто срываюсь', value: 72 },
    { label: 'Сильная тяга', value: 80 },
    { label: 'Зависимость', value: 90 },
    { label: 'Тяжёлая зависимость', value: 100 },
  ]
}

export const getSectionIndex = (value: number) => {
  if (value >= 78) {
    return 3
  }
  if (value >= 50) {
    return 2
  }
  if (value >= 22) {
    return 1
  }
  return 0
}

export const COLORS = [
  '#00E595',
  '#dba841',
  '#FF6F00',
  '#FB4848',
]
