import { createGenre, deleteGenre, updateGenre } from "./genres";
import { createDirector, deleteDirector, updateDirector } from "./directors";
import { ROUTES } from "@/constants";

const serviceCreateSelector = {
  [ROUTES.directors]: async ({ dataToSave }) =>
    createDirector({ dataToSave }).then((res) => res),
  [ROUTES.genres]: async ({ dataToSave }) =>
    createGenre({ dataToSave }).then((res) => res),
};

const serviceUpdateSelector = {
  [ROUTES.directors]: async ({ dataToSave }) =>
    updateDirector({ dataToSave }).then((res) => res),
  [ROUTES.genres]: async ({ dataToSave }) =>
    updateGenre({ dataToSave }).then((res) => res),
};

const serviceDeleteSelector = {
  [ROUTES.directors]: async ({ id }) =>
    deleteDirector({ id }).then((res) => res),
  [ROUTES.genres]: async ({ id }) => deleteGenre({ id }).then((res) => res),
};

export const createHandler = async ({
  pathname,
  dataToSave,
  setList,
  setShowToast,
}) => {
  serviceCreateSelector[pathname]({ dataToSave }).then((res) => {
    setList(res);
    setShowToast(true);
  });
};

export const updateHandler = async ({
  pathname,
  dataToSave,
  setList,
  setChanges,
  setShowToast,
}) => {
  serviceUpdateSelector[pathname]({ dataToSave }).then((res) => {
    setList(res);
    setChanges((prev) => prev + 1);
    setShowToast(true);
  });
};

export const deleteHandler = async ({ pathname, setList, id }) => {
  serviceDeleteSelector[pathname]({ id }).then((res) => setList(res));
};
