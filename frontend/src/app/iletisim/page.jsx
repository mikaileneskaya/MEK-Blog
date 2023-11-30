import React from "react";
import styles from "./styles.module.css";

const iletisim = () => {
  return (
    <section class={styles.containerr}>

      <div className={styles.form}>
        <h2 className={styles.h22}>İletişim Formu</h2>
        <div className={styles.contactformwidget}>
          <form name="contact-form">
            <span className={styles.spann}>İsim</span>
            <br />
            <input
              className={styles.inputt}
              name="name"
              size="30"
              type="text"
            />
            <span className={styles.spann}>E-posta</span>{" "}
            <span className={styles.required}>*</span>
            <br />
            <input
              className={styles.inputt}
              name="email"
              size="30"
              type="text"
            />
            <span className={styles.spann}>Mesaj</span>{" "}
            <span className={styles.required}>*</span>
            <br />
            <textarea
              className={styles.textareaa}
              cols="25"
              name="email-message"
              rows="5"
            ></textarea>
            <button className={styles.btn}>gönder</button>
            <br />
          </form>
        </div>
      </div>
    </section>
  );
};

export default iletisim;
