"use client";
import { useEffect, useState } from "react";
import styles from "./table.module.css";
import {
  createDirector,
  deleteDirector,
  readDirectors,
  updateDirector,
} from "@/services/directors";
import Form from "./Form";

export default function Table({ title }) {
  const [list, setList] = useState([]);
  const [changes, setChanges] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [dataToSave, setDataToSave] = useState({});
  const [action, setAction] = useState("");

  useEffect(() => {
    readDirectors().then((res) => setList(res));
  }, [changes]);

  if (action === "update" && dataToSave.name) {
    setDataToSave({});
    setAction("");
    updateDirector({ dataToSave }).then((res) => {
      setList(res);
      setChanges((prev) => prev + 1);
    });
  }

  if (action === "create" && dataToSave.name) {
    setDataToSave({});
    setAction("");
    createDirector({ dataToSave }).then((res) => {
      setList(res);
    });
  }

  const deleteItem = async (id) => {
    deleteDirector({ id }).then((res) => setList(res));
  };

  return (
    <>
      {showForm && (
        <Form
          setShowForm={setShowForm}
          setDataToSave={setDataToSave}
          dataToSave={dataToSave}
        ></Form>
      )}
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
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan="2">
              Nuevo director
            </th>
            <td
              className={styles.button}
              onClick={() => {
                setShowForm(true);
                setAction("create");
              }}
            >
              ➕
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
