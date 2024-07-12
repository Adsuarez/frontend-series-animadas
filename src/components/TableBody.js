import styles from "./table.module.css";
import { KEYS_PER_PAGE } from "@/constants";
import { deleteHandler } from "@/services/handlers";

export default function TableBody({
  list,
  setList,
  pathname,
  setDataToSave,
  setShowForm,
  setAction,
}) {
  const columns = KEYS_PER_PAGE[pathname];

  return (
    <tbody className={styles.tbody}>
      {list.map((item) => {
        return (
          <tr key={item.id}>
            {columns.map((column) => {
              return (
                <td key={column} className={styles.td}>
                  {item[column]}
                </td>
              );
            })}
            <td
              className={styles.button}
              onClick={() => {
                setDataToSave({ id: item.id });
                setShowForm(true);
                setAction("update");
              }}
            >
              ✏️
            </td>
            <td
              className={styles.button}
              onClick={() => deleteHandler({ id: item.id, pathname, setList })}
            >
              ❌
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
