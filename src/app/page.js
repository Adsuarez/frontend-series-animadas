import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title_1}>Siempre</h1>
      <h1 className={styles.title_2}>Cartoons</h1>
      <Image
        className={styles.landing_image}
        src="/tom_and_jerry.webp"
        width={300}
        height={200}
        alt="the cartoon tom and jerry"
        priority={true}
      />
    </main>
  );
}
