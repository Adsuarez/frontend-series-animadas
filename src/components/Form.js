import styles from "./form.module.css";

export default function Form({ setShowForm, setDataToSave, dataToSave }) {
  const close = async (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  const save = async (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target));

    const isAllDataFilled = Object.values(data).every(
      (value) => value.length > 0
    );

    if (isAllDataFilled) {
      setDataToSave({ ...dataToSave, ...data });
    }

    setShowForm(false);
  };

  return (
    <form
      action=""
      method="get"
      className={styles.form}
      onSubmit={(event) => save(event)}
    >
      <div>
        <label>
          Nombre
          <input type="text" name="name" />
        </label>
      </div>
      <div>
        <label>
          Apellido
          <input type="text" name="lastname" />
        </label>
      </div>
      <div>
        <label>
          País
          <input type="text" name="country" />
        </label>
      </div>

      <button className={styles.close} onClick={(event) => close(event)}>
        X
      </button>

      <button className={styles.save}>✔️</button>
    </form>
  );
}
