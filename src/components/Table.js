"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./table.module.css";

import Form from "./Form";
import Toast from "./Toast";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFoot from "./TableFoot";

import { readDirectors } from "@/services/directors";
import { readGenres } from "@/services/genres";
import {
  createDirectorHandler,
  updateDirectorHandler,
} from "@/helpers/directors";
import { createGenreHandler, updateGenreHandler } from "@/helpers/genres";

const directorsHandler = {
  update: updateDirectorHandler,
  create: createDirectorHandler,
};

const genresHandler = {
  update: updateGenreHandler,
  create: createGenreHandler,
};

const handlers = {
  "/directores": directorsHandler,
  "/generos": genresHandler,
};

const readHandlers = {
  "/directores": (setList) => readDirectors().then((res) => setList(res)),
  "/generos": (setList) => readGenres().then((res) => setList(res)),
};

const toastManager = (setShowToast) => {
  setTimeout(() => {
    setShowToast(false);
  }, 3000);
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
    handlers[pathname][action]({
      dataToSave,
      setList,
      setChanges,
      setShowToast,
    });
    toastManager(setShowToast);
  }

  if (action === "create" && dataToSave.name) {
    setDataToSave({});
    handlers[pathname][action]({ dataToSave, setList, setShowToast });
    toastManager(setShowToast);
  }

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
          columns={columns}
        ></Form>
      )}
      <table className={styles.table}>
        <TableHead columns={columns} />
        <TableBody
          columns={columns}
          list={list}
          setAction={setAction}
          setDataToSave={setDataToSave}
          setShowForm={setShowForm}
        />
        <TableFoot setAction={setAction} setShowForm={setShowForm} />
      </table>
      {showToast && <Toast action={action}></Toast>}
    </>
  );
}
