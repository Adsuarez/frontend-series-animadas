import styles from "./table.module.css";
import { IMAGES_HOSTNAME, KEYS_PER_PAGE } from "@/constants";
import { deleteHandler } from "@/services/handlers";
import Image from "next/image";

export default function TableBody({
  list,
  setList,
  pathname,
  setDataToSave,
  setShowForm,
  setAction,
}) {
  const columns = KEYS_PER_PAGE[pathname];

  return (
    <tbody className={styles.tbody}>
      {list.map((item) => {
        return (
          <tr key={item.id}>
            {columns.map((column) => {
              return (
                <td key={column} className={styles.td}>
                  {item.imageUrl && column === "imageUrl" ? (
                    item.imageUrl.startsWith(IMAGES_HOSTNAME) && (
                      <Image
                        alt={`portada de la película ${item.name}`}
                        width={106}
                        height={139}
                        src={item.imageUrl}
                      />
                    )
                  ) : item.trailerUrl && column === "trailerUrl" ? (
                    <div
                      className={styles.trailer}
                      dangerouslySetInnerHTML={{ __html: item.trailerUrl }}
                    />
                  ) : (
                    item[column]
                  )}
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
              onClick={() => deleteHandler({ id: item.id, pathname, setList })}
            >
              ❌
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
