import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

export const getTelegramUser = () => {
  const launchParams = retrieveLaunchParams()
  return {
    id: String(launchParams?.tgWebAppData?.user?.id || 'local'),
    language: 'ru-RU',
    first_name: launchParams?.tgWebAppData?.user?.first_name || 'N/A',
    last_name: launchParams?.tgWebAppData?.user?.last_name || 'N/A',
    username: launchParams?.tgWebAppData?.user?.username || 'N/A',
    avatar: launchParams?.tgWebAppData?.user?.photo_url || '',
  }
}
