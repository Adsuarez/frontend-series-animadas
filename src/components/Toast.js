import { ROUTES } from "@/constants";
import styles from "./toast.module.css";
const TOAST_CREATE_MESSAGE = {
  [ROUTES.directors]: "director",
  [ROUTES.genres]: "género",
};

const TOAST_UPDATE_MESSAGE = {
  [ROUTES.directors]: "Director",
  [ROUTES.genres]: "Género",
};

export default function Toast({ action, pathname }) {
  let message = "";
  if (action === "create") {
    message = `Nuevo ${TOAST_CREATE_MESSAGE[pathname]} creado`;
  }
  if (action === "update") {
    message = `${TOAST_UPDATE_MESSAGE[pathname]} actualizado`;
  }

  return (
    <article className={styles.article}>
      <h2>Notificación:</h2>
      <p>{message}</p>
    </article>
  );
}
