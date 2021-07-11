import Link from "next/link";
import { headerStyle } from "../style/header.css";

export const Header = () => {
  return (
    <header className={headerStyle.wrapper}>
      <span className={headerStyle.title}>
        <Link href="/">
          <a className={headerStyle.link}>shop.ojisan.io</a>
        </Link>
      </span>
    </header>
  );
};
