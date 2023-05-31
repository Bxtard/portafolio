import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.landingImage}
        src='/cyberpunk-city-buildings-art.jpg'
        alt='background'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <section className={styles.section}>
        <Image
          src='/profile.webp'
          className={styles.profile}
          width={400}
          height={500}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>Bxtard</h1>
          <p className={styles.mainInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga
            accusantium reiciendis quod aspernatur neque quasi ullam aliquam aut
            assumenda. Hic nobis animi autem, cumque fugiat, ipsam nesciunt vero
            neque corrupti repellat eos ipsum quae voluptatem cupiditate soluta,
            eaque non est ea fugit esse laudantium! Quam suscipit sapiente
            quisquam sint recusandae explicabo eos doloribus, dolores natus
            aspernatur saepe, iste itaque quis ratione at. A natus sit nisi
            sapiente ipsa atque neque? Quae reprehenderit repellat explicabo cum
            in fugiat et ullam labore optio, numquam voluptatum! Nesciunt vero
            eum omnis iste! Perspiciatis id ipsa dolorum deleniti, dignissimos
            delectus rem nam ut assumenda!
          </p>
        </div>
      </section>
    </main>
  );
}
