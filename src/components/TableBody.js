import styles from "./table.module.css";

export default function TableBody({
  list,
  columns,
  setDataToSave,
  setShowForm,
  setAction,
}) {
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
