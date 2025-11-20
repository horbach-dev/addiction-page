import { WheelPicker, WheelPickerWrapper } from "@ncdai/react-wheel-picker";
import styles from './Picker.module.css'
import {useWindowSize} from "../../../../hooks/useWindowSize.ts";

interface IProps {
  options: { value: number | string, label: string }[];
  value: number | string;
  setValue: (value: number | string) => void;
}

export const Picker = ({ options, value, setValue }: IProps) => {
  const { width } = useWindowSize();
  const vw = width * 8 / 100

  return (
    <div className={styles.container}>
      <WheelPickerWrapper>
        <WheelPicker
          options={options}
          optionItemHeight={vw}
          value={value}
          onValueChange={setValue}
        />
      </WheelPickerWrapper>
    </div>
  )
}
