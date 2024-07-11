import styles from "./toast.module.css";
export default function Toast({ action }) {
  let message = "";
  if (action === "create") {
    message = `Nuevo director creado`;
  }
  if (action === "update") {
    message = `Director actualziado`;
  }

  return (
    <article className={styles.article}>
      <h2>Notificación:</h2>
      <p>{message}</p>
    </article>
  );
}
