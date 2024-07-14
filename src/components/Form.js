import {
  FIELDS_PER_PAGE,
  REUSABLE_FIELDS,
  ROUTES,
  SPANISH_TO_ENGLISH_FIELDS,
} from "@/constants";
import styles from "./form.module.css";
import { useEffect, useState } from "react";
import { readHandler } from "@/services/handlers";

export default function Form({
  setShowForm,
  setDataToSave,
  dataToSave,
  pathname,
}) {
  const [directors, setDirectors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [countries, setCountries] = useState([]);
  const [actors, setActors] = useState([]);
  const [group, setGroup] = useState({});

  useEffect(() => {
    readHandler({ pathname: ROUTES.directors, setList: setDirectors });
    readHandler({ pathname: ROUTES.genres, setList: setGenres });
    readHandler({ pathname: ROUTES.countries, setList: setCountries });
    readHandler({ pathname: ROUTES.actors, setList: setActors });
    setGroup({
      ["director"]: directors,
      ["genre"]: genres,
      ["country"]: countries,
      ["actors"]: actors,
    });
  }, [directors, genres, countries, actors]);

  const columns = FIELDS_PER_PAGE[pathname];

  const close = async (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  const save = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const isAllDataFilled = Object.values(data).every(
      (value) => value.length > 0
    );

    if (data.trailerUrl) {
      const widthRegex = /width="([0-9]+)"/g;
      data.trailerUrl = data.trailerUrl.replace(widthRegex, `width="250"`);
      const heigthRegex = /height="([0-9]+)"/g;
      data.trailerUrl = data.trailerUrl.replace(heigthRegex, `height="139"`);
    }

    if (isAllDataFilled) {
      setDataToSave({ ...dataToSave, ...data });
    }
    setShowForm(false);
  };

  return (
    <form
      action=""
      method="get"
      className={styles.form}
      onSubmit={(event) => save(event)}
    >
      {columns.map((column) => {
        return (
          <div key={column}>
            <label>
              {column}
              {REUSABLE_FIELDS.some(
                (field) => field === SPANISH_TO_ENGLISH_FIELDS[column]
              ) ? (
                <select name={SPANISH_TO_ENGLISH_FIELDS[column]}>
                  <option value="">--Seleccione una opción--</option>
                  {group["director"] &&
                    group[SPANISH_TO_ENGLISH_FIELDS[column]].map((item) => {
                      return (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
              ) : (
                <input type="text" name={SPANISH_TO_ENGLISH_FIELDS[column]} />
              )}
            </label>
          </div>
        );
      })}
      <button className={styles.close} onClick={(event) => close(event)}>
        X
      </button>

      <button className={styles.save}>✔️</button>
    </form>
  );
}
