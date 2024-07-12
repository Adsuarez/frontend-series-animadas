import { createGenre, updateGenre } from "@/services/genres";

export const updateGenreHandler = async ({
  dataToSave,
  setList,
  setChanges,
  setShowToast,
}) => {
  updateGenre({ dataToSave }).then((res) => {
    setList(res);
    setChanges((prev) => prev + 1);
    setShowToast(true);
  });
};

export const createGenreHandler = async ({
  dataToSave,
  setList,
  setShowToast,
}) => {
  createGenre({ dataToSave }).then((res) => {
    setList(res);
    setShowToast(true);
  });
};
