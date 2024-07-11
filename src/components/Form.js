import styles from "./form.module.css";

export default function Form({ setShowForm }) {
  const close = async (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <form action="" method="get" className={styles.form}>
      <div>
        <label>
          Nombre
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Apellido
          <input type="text" />
        </label>
      </div>
      <div>
        <label>
          País
          <input type="text" />
        </label>
      </div>

      <button className={styles.close} onClick={(event) => close(event)}>
        X
      </button>
    </form>
  );
}
