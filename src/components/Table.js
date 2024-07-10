"use client";
import styles from "./table.module.css";

export default function Table({ title }) {
  console.log({ title });
  return (
    <table className={styles.table}>
      <caption>lista de {title}</caption>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th} scope="col">
            Nombre
          </th>
          <th className={styles.th} scope="col">
            Apellido
          </th>
          <th className={styles.th} scope="col">
            País
          </th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        <tr>
          <th className={styles.th} scope="row">
            Chris
          </th>
          <td className={styles.td}>HTML tables</td>
          <td>22</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="2">
            FUTURO BOTÓN DE AGREGAR NUEVO
          </th>
          <td>33</td>
        </tr>
      </tfoot>
    </table>
  );
}
