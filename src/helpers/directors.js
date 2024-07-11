import { createDirector, updateDirector } from "@/services/directors";

export const updateDirectorHandler = async ({
  dataToSave,
  setList,
  setChanges,
  setShowToast,
}) => {
  updateDirector({ dataToSave }).then((res) => {
    setList(res);
    setChanges((prev) => prev + 1);
    setShowToast(true);
  });
};

export const createDirectorHandler = async ({
  dataToSave,
  setList,
  setShowToast,
}) => {
  createDirector({ dataToSave }).then((res) => {
    setList(res);
    setShowToast(true);
  });
};
