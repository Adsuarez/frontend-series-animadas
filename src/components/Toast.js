import { TOAST_CREATE_MESSAGE, TOAST_UPDATE_MESSAGE } from "@/constants";
import styles from "./toast.module.css";

export default function Toast({ action, pathname }) {
  let message = "";
  if (action === "create") {
    message = `${TOAST_CREATE_MESSAGE[pathname]}`;
  }
  if (action === "update") {
    message = `${TOAST_UPDATE_MESSAGE[pathname]}`;
  }

  return (
    <article className={styles.article}>
      <h2>Notificación:</h2>
      <p>{message}</p>
    </article>
  );
}
