import { useLayoutEffect, useState } from "react";
import { getSafeArea } from "../utils/getSafeeArea";

const DEFAULT_PADDING_BOTTOM = 24
type TSafeArea = { top: number, bottom: number }

export const useSafeArea = () => {
  const [paddings, setPaddings] = useState<TSafeArea>({ top: 0, bottom: DEFAULT_PADDING_BOTTOM });

  // safe areas
  useLayoutEffect(() => {
    getSafeArea().then(setPaddings);
  }, []);

  return paddings
}
