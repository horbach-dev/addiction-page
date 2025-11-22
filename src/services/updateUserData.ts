import { db } from '../utils/firebaseConfig';
import { doc, setDoc } from "firebase/firestore";
import { getTelegramUser } from "../utils/getTelegramUser";

type TData = {
  type?: string;
  level?: number;
}

export const updateUserData = async (data: TData) => {
  const { id } = getTelegramUser()
  const userDocRef = doc(db, "users", id);
  try {
    await setDoc(userDocRef, {
      ...data,
      last_updated_at: new Date().toISOString(),
    }, { merge: true });
    console.log("Данные изменены для пользователя:", id);
  } catch (error) {
    console.error("Ошибка при записи данных:", error);
  }
};
