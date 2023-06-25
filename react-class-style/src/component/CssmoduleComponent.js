import styles from "./style.module.css";

/* in the normal way the style.css file will effect this file without even import it here because in react it inject all styles inside dom so if this file has the same class name will effect it too. I need to use css module it'll be better in react */

export default function CssmoduleComponent() {
  return (
    <h3 className={styles.heading}>
      This is from Css module Component using CSS Module
    </h3>
  );
}