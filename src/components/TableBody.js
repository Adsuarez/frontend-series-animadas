import { deleteDirector } from "@/services/directors";
import styles from "./table.module.css";
import { KEYS_PER_PAGE } from "@/constants";

export default function TableBody({
  list,
  setList,
  pathname,
  setDataToSave,
  setShowForm,
  setAction,
}) {
  const columns = KEYS_PER_PAGE[pathname];

  const deleteItem = async (id) => {
    deleteDirector({ id }).then((res) => setList(res));
  };

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
            <td className={styles.button} onClick={() => deleteItem(item.id)}>
              ❌
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
