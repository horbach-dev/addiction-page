import { hideBackButton, onBackButtonClick, showBackButton } from '@telegram-apps/sdk-react';
import { type PropsWithChildren, useEffect } from 'react';

export function Page({ children, back = true, onClick }: PropsWithChildren<{
  backLink?: string | null
  back?: boolean
  onClick: () => void
}>) {
  useEffect(() => {
    if (back) {
      showBackButton();
      return onBackButtonClick(() => {
        onClick()
      });
    }
    hideBackButton();
  }, [back]);

  return <>{children}</>;
}
