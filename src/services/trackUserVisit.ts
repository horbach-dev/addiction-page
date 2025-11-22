import { db } from '../utils/firebaseConfig';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getTelegramUser } from "../utils/getTelegramUser";

export const trackUserVisit = async () => {
  const { id, username, first_name, avatar } = getTelegramUser()
  const userDocRef = doc(db, "users", id);

  try {
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      await setDoc(userDocRef, {
        user_id: id,
        avatar,
        first_name,
        username: username || 'N/A',
        first_visit_at: new Date().toISOString(),
        type: null,
        level: null
      });
      console.log("Новый пользователь добавлен:", id);
    } else {
      console.log("Пользователь уже существует:", id);
    }
  } catch (error) {
    console.error("Ошибка при трекинге пользователя:", error);
  }
};
