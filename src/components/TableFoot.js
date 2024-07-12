import styles from "./table.module.css";

export default function TableFoot({ setShowForm, setAction }) {
  return (
    <tfoot>
      <tr></tr>
      <tr
        onClick={() => {
          setShowForm(true);
          setAction("create");
        }}
      >
        <th scope="row" colSpan="3" className={styles.new_director}>
          Nuevo director
        </th>
        <td colSpan="2" className={styles.new_director}>
          ➕
        </td>
      </tr>
    </tfoot>
  );
}
