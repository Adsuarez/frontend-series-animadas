"use client";
import { useEffect, useState } from "react";
import styles from "./table.module.css";
import { deleteDirector, readDirectors } from "@/services/directors";
import Form from "./Form";
import Toast from "./Toast";
import { usePathname } from "next/navigation";

import {
  createDirectorHandler,
  updateDirectorHandler,
} from "@/helpers/directors";
import { readGenres } from "@/services/genres";

const DIRECTORS_HANDLERS = {
  update: updateDirectorHandler,
  create: createDirectorHandler,
};

const readHandlers = {
  "/directores": (setList) => readDirectors().then((res) => setList(res)),
  "/generos": (setList) => readGenres().then((res) => setList(res)),
};

const COLUMNS_TITLES_DICTIONARY = {
  name: "Nombre",
  lastname: "Apellido",
  country: "País",
};

export default function Table() {
  const [list, setList] = useState([]);
  const [changes, setChanges] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [dataToSave, setDataToSave] = useState({});
  const [action, setAction] = useState("");
  const [showToast, setShowToast] = useState(false);
  const pathname = usePathname();
  let columns = [];

  useEffect(() => {
    readHandlers[pathname](setList);
  }, [changes, pathname]);

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

  if (list.length > 0) {
    const keys = Object.keys(list[0]);
    columns = keys.filter((key) => key !== "id");
  }

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
            {columns.map((column) => {
              return (
                <th key={column} className={styles.th} scope="col">
                  {COLUMNS_TITLES_DICTIONARY[column]}
                </th>
              );
            })}
          </tr>
        </thead>
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
