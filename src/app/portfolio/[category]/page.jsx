import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <p className={styles.title}>Title</p>
          <h1 className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            deserunt similique iure. At, autem quia aliquam voluptates et
            excepturi eum!
          </h1>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
            fill={true}
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <p className={styles.title}>Title</p>
          <h1 className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aperiam possimus, quos harum at nihil voluptates. Nulla dolorem
            laudantium voluptatem.
          </h1>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Category;
