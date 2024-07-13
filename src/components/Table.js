"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./table.module.css";

import Form from "./Form";
import Toast from "./Toast";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFoot from "./TableFoot";

import { createHandler, readHandler, updateHandler } from "@/services/handlers";

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

  useEffect(() => {
    readHandler({ pathname, setList });
  }, [changes, pathname]);

  if (action === "update" && dataToSave.name) {
    setDataToSave({});
    updateHandler({
      pathname,
      dataToSave,
      setList,
      setChanges,
      setShowToast,
    });
    toastManager(setShowToast);
  }

  if (action === "create" && dataToSave.name) {
    setDataToSave({});
    createHandler({ pathname, dataToSave, setList, setShowToast });
    toastManager(setShowToast);
  }

  return (
    <>
      {showForm && (
        <article className={styles.formContainer}>
          <Form
            setShowForm={setShowForm}
            setDataToSave={setDataToSave}
            dataToSave={dataToSave}
            pathname={pathname}
          ></Form>
        </article>
      )}
      <table className={styles.table}>
        <TableHead pathname={pathname} />
        <TableBody
          pathname={pathname}
          list={list}
          setList={setList}
          setAction={setAction}
          setDataToSave={setDataToSave}
          setShowForm={setShowForm}
        />
        <TableFoot
          setAction={setAction}
          setShowForm={setShowForm}
          pathname={pathname}
        />
      </table>
      {showToast && <Toast action={action} pathname={pathname}></Toast>}
    </>
  );
}
