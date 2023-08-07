import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Lamamia Contact",
  description: "This is Lamamia contact page",
};

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="/contact.png"
            alt="contact"
            fill={true}
          />
        </div>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="name" />
          <input className={styles.input} type="email" placeholder="name" />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
