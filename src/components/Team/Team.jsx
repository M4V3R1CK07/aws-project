import React from "react";
import styles from "./Team.module.css";

export const Team = () => {
  return (
    <section className={styles.container} id="team">
      <h2 className={styles.title}>Team</h2>

      <div className={styles.members}>
        <div className="project-card">
          <h3>Y. Abhinav</h3>
          <p>23BPS1154</p>
        </div>
        <div className="project-card">
          <h3>Aditya Kumar</h3>
          <p>23BPS1163</p>
        </div>
        <div className="project-card">
          <h3>Raghav Gupta</h3>
          <p>23BPS1092</p>
        </div>
      </div>
    </section>
  );
};
