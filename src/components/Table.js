"use client";
import { useEffect, useState } from "react";
import styles from "./table.module.css";
import { deleteDirector, readDirectors } from "@/services/directors";

export default function Table({ title }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    readDirectors().then((res) => setList(res));
  }, []);

  const updateItem = async (id) => {
    console.log(`actualizando item ${id}`);
  };

  const deleteItem = async (id) => {
    deleteDirector({ id }).then((res) => setList(res));
  };

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
        {list.map((item) => {
          return (
            <tr key={item.id}>
              <th className={styles.th} scope="row">
                {item.name}
              </th>
              <td className={styles.td}>{item.lastname}</td>
              <td className={styles.td}>{item.country}</td>
              <td className={styles.button} onClick={() => updateItem(item.id)}>
                ✏️
              </td>
              <td className={styles.button} onClick={() => deleteItem(item.id)}>
                ❌
              </td>
            </tr>
          );
        })}
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
