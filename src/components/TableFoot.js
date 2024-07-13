import { BUTTON_MESAGGES_PER_PAGE } from "@/constants";
import styles from "./table.module.css";

export default function TableFoot({ setShowForm, setAction, pathname }) {
  return (
    <tfoot>
      <tr></tr>
      <tr
        onClick={() => {
          setShowForm(true);
          setAction("create");
        }}
      >
        <th scope="row" colSpan="3" className={styles.addDirector}>
          {BUTTON_MESAGGES_PER_PAGE[pathname]}
        </th>
        <td colSpan="2" className={styles.addDirector}>
          ➕
        </td>
      </tr>
    </tfoot>
  );
}
