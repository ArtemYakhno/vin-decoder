import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import clsx from "clsx";
import { RoutePath } from "../../../routes/root.config";

export const Header = () => (
  <header className={clsx("container", styles.header)}>
    <div className={styles.inner}>
      <span className={styles.logo}>VIN Decoder</span>
      <nav className={styles.nav} aria-label="Main navigation">
        <NavLink
          to={RoutePath.Default}
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.active)
          }
        >
          Home
        </NavLink>
        <NavLink
          to={RoutePath.Variables}
          className={({ isActive }) =>
            clsx(styles.link, isActive && styles.active)
          }
        >
          Variables
        </NavLink>
      </nav>
    </div>
  </header>
);
