import Link from "next/link";
import routes from "../../../../../lib/constants/routes";
import { Logo } from "@hexify/atoms";

const Nav = ({ logoVariant }: { logoVariant?: "simple" | "dark" }) => {
  return (
    <nav>
      <Link href={routes.home}>
        <Logo variant={logoVariant} />
      </Link>
    </nav>
  );
};

export default Nav;
