import React from "react";
import styles from "./Architecture.module.css";

export const Architecture = () => {
  return (
    <section className={styles.container} id="architecture">
      <h2 className={styles.title}>Architecture</h2>

      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src="public/assets/architecture/amazon_s3.png"
                alt="Amazon S3"
              />
            </div>
            <p>Amazon S3 for static hosting</p>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src="public/assets/architecture/amazon_cloudfront.png"
                alt="Amazon CloudFront"
              />
            </div>
            <p>CloudFront for HTTPS and caching</p>
          </div>

          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src="public/assets/architecture/amazon_route53.png"
                alt="Amazon Route 53"
              />
            </div>
            <p>Route 53 alias records to CloudFront</p>
          </div>
        </div>

        <div className={styles.history}>
          <div className={styles.historyItem}>
            <div className={styles.historyItemDetails}>
              <h3>Static hosting configuration</h3>
              <p>
                Enable Static website hosting and set Index document to
                index.html; set Error document to error.html or index.html for
                SPA fallback.
              </p>
              <ul>
                <li>Public website endpoint or OAC with CloudFront</li>
                <li>Correct content-type metadata for HTML/CSS/JS</li>
              </ul>
            </div>
          </div>

          <div className={styles.historyItem}>
            <div className={styles.historyItemDetails}>
              <h3>CloudFront + HTTPS</h3>
              <p>
                Use the S3 “website endpoint” as a custom origin and set default
                root object to index.html for directory indexes.
              </p>
              <ul>
                <li>Attach ACM certificate to distribution</li>
                <li>Consider custom error responses for SPA routes</li>
              </ul>
            </div>
          </div>

          <div className={styles.historyItem}>
            <div className={styles.historyItemDetails}>
              <h3>Custom Domain</h3>
              <p>
                Map domain via Route 53 alias A/AAAA records to CloudFront
                distribution for a branded HTTPS URL.
              </p>
              <ul>
                <li>Validate domain in ACM (us-east-1 for CloudFront)</li>
                <li>Invalidate cache after deployments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
