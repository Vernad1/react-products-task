import { FC, ReactNode } from "react";
import styles from "./appLayout.module.css";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  title?: string;
}

export const AppLayout: FC<Props> = ({ children }) => {
  const headerLinks = [
    { href: "/products", name: "Каталог" },
    { href: "/create-product", name: "Создать товар" },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <nav>
            <ul className={styles.headerLinks}>
              {headerLinks.map((link) => {
                return (
                  <li key={link.href}>
                    <Link className={styles.headerLink} to={link.href}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className={styles.section}>{children}</section>
      </main>
    </>
  );
};
