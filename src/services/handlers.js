import { PETITIONERS, ROUTES } from "@/constants";
import { create, read, remove, update } from "./services";

const serviceCreateSelector = {
  [ROUTES.directors]: async ({ dataToSave }) =>
    create({ petitioner: PETITIONERS.directors, dataToSave }).then(
      (res) => res
    ),
  [ROUTES.genres]: async ({ dataToSave }) =>
    create({ petitioner: PETITIONERS.genres, dataToSave }).then((res) => res),
  [ROUTES.movies]: async ({ dataToSave }) =>
    create({ petitioner: PETITIONERS.movies, dataToSave }).then((res) => res),
  [ROUTES.countries]: async ({ dataToSave }) =>
    create({ petitioner: PETITIONERS.countries, dataToSave }).then(
      (res) => res
    ),
  [ROUTES.actors]: async ({ dataToSave }) =>
    create({ petitioner: PETITIONERS.actors, dataToSave }).then((res) => res),
};

const serviceReadSelector = {
  [ROUTES.directors]: async () =>
    read({ petitioner: PETITIONERS.directors }).then((res) => res),
  [ROUTES.genres]: async () =>
    read({ petitioner: PETITIONERS.genres }).then((res) => res),
  [ROUTES.movies]: async () =>
    read({ petitioner: PETITIONERS.movies }).then((res) => res),
  [ROUTES.countries]: async () =>
    read({ petitioner: PETITIONERS.countries }).then((res) => res),
  [ROUTES.actors]: async () =>
    read({ petitioner: PETITIONERS.actors }).then((res) => res),
};

const serviceUpdateSelector = {
  [ROUTES.directors]: async ({ dataToSave }) =>
    update({ petitioner: PETITIONERS.directors, dataToSave }).then(
      (res) => res
    ),
  [ROUTES.genres]: async ({ dataToSave }) =>
    update({ petitioner: PETITIONERS.genres, dataToSave }).then((res) => res),
  [ROUTES.movies]: async ({ dataToSave }) =>
    update({ petitioner: PETITIONERS.movies, dataToSave }).then((res) => res),
  [ROUTES.countries]: async ({ dataToSave }) =>
    update({ petitioner: PETITIONERS.countries, dataToSave }).then(
      (res) => res
    ),
  [ROUTES.actors]: async ({ dataToSave }) =>
    update({ petitioner: PETITIONERS.actors, dataToSave }).then((res) => res),
};

const serviceDeleteSelector = {
  [ROUTES.directors]: async ({ id }) =>
    remove({ petitioner: PETITIONERS.directors, id }).then((res) => res),
  [ROUTES.genres]: async ({ id }) =>
    remove({ petitioner: PETITIONERS.genres, id }).then((res) => res),
  [ROUTES.movies]: async ({ id }) =>
    remove({ petitioner: PETITIONERS.movies, id }).then((res) => res),
  [ROUTES.countries]: async ({ id }) =>
    remove({ petitioner: PETITIONERS.countries, id }).then((res) => res),
  [ROUTES.actors]: async ({ id }) =>
    remove({ petitioner: PETITIONERS.actors, id }).then((res) => res),
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

export const readHandler = async ({ pathname, setList }) => {
  serviceReadSelector[pathname]().then((res) => setList(res));
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
