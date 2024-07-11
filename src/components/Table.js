"use client";
import { useEffect, useState } from "react";
import styles from "./table.module.css";
import { deleteDirector, readDirectors } from "@/services/directors";
import Form from "./Form";
import Toast from "./Toast";
import {
  createDirectorHandler,
  updateDirectorHandler,
} from "@/helpers/directors";

const DIRECTORS_HANDLERS = {
  update: updateDirectorHandler,
  create: createDirectorHandler,
};

export default function Table() {
  const [list, setList] = useState([]);
  const [changes, setChanges] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [dataToSave, setDataToSave] = useState({});
  const [action, setAction] = useState("");
  const [showToast, setShowToast] = useState(false);
  //const pathname = window.location.pathname;

  useEffect(() => {
    readDirectors().then((res) => setList(res));
  }, [changes]);

  if (action === "update" && dataToSave.name) {
    setDataToSave({});
    DIRECTORS_HANDLERS[action]({
      dataToSave,
      setList,
      setChanges,
      setShowToast,
    });
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  if (action === "create" && dataToSave.name) {
    setDataToSave({});
    DIRECTORS_HANDLERS[action]({ dataToSave, setList, setShowToast });
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
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
      </table>
      {showToast && <Toast action={action}></Toast>}
    </>
  );
}
