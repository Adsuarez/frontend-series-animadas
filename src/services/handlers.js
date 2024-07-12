import { createGenre, updateGenre } from "./genres";
import { createDirector, updateDirector } from "./directors";

const serviceUpdateSelector = {
  "/directores": async ({ dataToSave }) =>
    updateDirector({ dataToSave }).then((res) => res),
  "/generos": async ({ dataToSave }) =>
    updateGenre({ dataToSave }).then((res) => res),
};

const serviceCreateSelector = {
  "/directores": async ({ dataToSave }) =>
    createDirector({ dataToSave }).then((res) => res),
  "/generos": async ({ dataToSave }) =>
    createGenre({ dataToSave }).then((res) => res),
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
