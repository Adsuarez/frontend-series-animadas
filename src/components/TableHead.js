import { FIELDS_PER_PAGE } from "@/constants";
import styles from "./table.module.css";

export default function TableHead({ pathname }) {
  const columns = FIELDS_PER_PAGE[pathname];
  return (
    <thead className={styles.thead}>
      <tr>
        {columns.map((column) => {
          return (
            <th key={column} className={styles.th} scope="col">
              {column}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
