import { ROUTES } from "@/constants";
import styles from "./table.module.css";
const BUTTON_MESAGGES_PER_PAGE = {
  [ROUTES.directors]: "Nuevo director",
  [ROUTES.genres]: "Nuevo género",
};

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
        <th scope="row" colSpan="3" className={styles.new_director}>
          {BUTTON_MESAGGES_PER_PAGE[pathname]}
        </th>
        <td colSpan="2" className={styles.new_director}>
          ➕
        </td>
      </tr>
    </tfoot>
  );
}
