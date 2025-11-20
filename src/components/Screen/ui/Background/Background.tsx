import { useState } from "react";
import clsx from "clsx";
import Img1 from './assets/casino-min.png'
import Img2 from './assets/betting-min.png'
import Img3 from './assets/trading-min.png'
import styles from './Background.module.css'

const images = {
  casino: Img1,
  betting: Img2,
  trading: Img3,
}

interface IProps {
  type: 'casino' | 'betting' | 'trading' | null
}

export const Background = ({ type }: IProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div className={clsx(styles.container, isLoaded && styles.containerShow)}>
      {type && (
        <img
          alt='background'
          src={images[type]}
          onLoad={() => {
            setIsLoaded(true)
          }}
        />
      )}
    </div>
  )
}
