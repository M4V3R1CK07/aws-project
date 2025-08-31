import styles from "./App.module.css";
import { Overview } from "./components/Overview/Overview";
import { Contact } from "./components/Contact/Contact";
import { Architecture } from "./components/Architecture/Architecture";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Team } from "./components/Team/Team";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Overview />
      <Architecture />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
