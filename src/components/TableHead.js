import styles from "./table.module.css";

const COLUMNS_TITLES_DICTIONARY = {
  name: "Nombre",
  lastname: "Apellido",
  country: "País",
};

export default function TableHead({ columns }) {
  return (
    <thead className={styles.thead}>
      <tr>
        {columns.map((column) => {
          return (
            <th key={column} className={styles.th} scope="col">
              {COLUMNS_TITLES_DICTIONARY[column]}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
