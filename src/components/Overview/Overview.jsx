import React from "react";
import styles from "./Overview.module.css";

export const Overview = () => {
  return (
    <section className={styles.container} id="overview">
      <h2 className={styles.title}>Project Overview</h2>

      <div className={styles.content}>
        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <div>
              <h3>Goal</h3>
              <p>
                Publish a static site to Amazon S3, optionally fronted by
                CloudFront for HTTPS and performance, and mapped to a custom
                domain via Route 53.
              </p>
            </div>
          </div>

          <div className={styles.aboutItem}>
            <div>
              <h3>Deliverables</h3>
              <p>
                Static build output, S3 bucket configured for website hosting,
                CloudFront distribution (optional), and Route 53 DNS records
                where applicable.
              </p>
            </div>
          </div>

          <div className={styles.aboutItem}>
            <div>
              <h3>Outcomes</h3>
              <p>
                A reliable, low-cost, CDN-enabled static website with an index
                document and a graceful error document configuration suitable
                for demos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
