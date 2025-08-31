import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>
          For evaluation or questions about the AWS Hosting Project, reach out
          to the team.
        </p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/emailIcon.png" alt="" />
          <a href="mailto:team@example.edu">team@example.edu</a>
        </li>
        <li className={styles.link}>
          <img src="/githubIcon.png" alt="" />
          <a
            href="https://github.com/example/aws-hosting-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://example-bucket.s3-website-<region>.amazonaws.com"
            target="_blank"
            rel="noreferrer"
          >
            Live site (S3 website endpoint)
          </a>
        </li>
      </ul>
    </section>
  );
};
