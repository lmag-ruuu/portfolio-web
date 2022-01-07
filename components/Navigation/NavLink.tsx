import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./NavLink.module.css";

const NavLink: FC<{ href: string }> = (props) => {
  const { asPath } = useRouter();
  const ariaCurrent = props.href === asPath ? "page" : undefined;

  return (
    <Link href={props.href}>
      <a aria-current={ariaCurrent}>{props.children}</a>
    </Link>
  );
};

export default NavLink;
