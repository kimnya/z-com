import { ReactNode } from "react";
import styles from "../(beforeLogin)/_component/main.module.css";

type props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
