import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Admin = () => {
  return (
    <section className={styles.adminpage}>
      <section className={styles.login_card}>
        <h1 className={styles.h11}>MEK Blog Admin Giriş</h1>
        <form className={styles.formm}>
          <label className={styles.labell} htmlFor="username">
            Kullanıcı Adı:
          </label>
          <input
            className={styles.inputt}
            type="text"
            id="username"
            name="username"
          />
          <label className={styles.labell} htmlFor="password">
            Şifre:
          </label>
          <input
            className={styles.inputt}
            type="password"
            id="password"
            name="password"
          />
          <input className={styles.inputt} type="submit" value="Giriş Yap" />
        </form>
      </section>
    </section>
  );
};

export default Admin;
