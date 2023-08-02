import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          fill={true}
          alt=""
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            vero ducimus distinctio asperiores eligendi iure aliquid porro cum
            <br />
            <br />
            ut, praesentium minus quibusdam reiciendis veniam aspernatur error
            quia. Nostrum alias, maiores animi nesciunt numquam a fuga error
            aspernatur aperiam iure corrupti? Fuga reprehenderit vero sunt,
            explicabo incidunt molestiae odit aperiam delectus nesciunt
            cupiditate eligendi odio soluta modi deserunt amet saepe, voluptatum
            <br />
            <br />
            impedit dolorum rerum placeat perferendis. Ipsa molestias ex illum
            unde exercitationem. Odio similique dolores consectetur, dolorem
            provident aliquid qui quia.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What Do We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            est ad incidunt laudantium omnis eius assumenda porro aperiam!
            Aliquid commodi inventore quam libero. Eius cum consequatur aliquam
            porro sequi quidem!
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
