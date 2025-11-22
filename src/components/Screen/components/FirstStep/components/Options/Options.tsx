import clsx from "clsx";
import styles from './Options.module.css'

type TOption = { value: string, label: string }

interface IProps {
  options: TOption[];
  value: string | null;
  onChange: (value: string) => void;
}

export function Options({ options, value, onChange }: IProps) {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <div
          key={option.value}
          className={clsx(styles.item, value === option.value && styles.itemActive)}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}
