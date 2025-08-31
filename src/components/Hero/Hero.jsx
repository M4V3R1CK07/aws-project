import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container} id="top">
      <div className={styles.content}>
        <h1 className={styles.title}>AWS Static Website Hosting</h1>
        <p className={styles.description}>
          A student group project demonstrating static website hosting on Amazon
          S3 with optional CloudFront and Route 53 integration.
        </p>
        {/* <a className={styles.contactBtn} href="#overview">
          View Project
        </a> */}
      </div>

      {/* <img
        className={styles.heroImg}
        src="/aws_logo.jpg"
        alt="Abstract illustration representing cloud hosting"
      /> */}

      <div className={styles.topBlur} aria-hidden="true" />
      <div className={styles.bottomBlur} aria-hidden="true" />
    </section>
  );
};
