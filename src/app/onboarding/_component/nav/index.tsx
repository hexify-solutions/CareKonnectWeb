import Link from "next/link";
import routes from "../../../_lib/constants/routes";
import { CareKonnectLogo } from "@hexify/atoms";

const Nav = ({ logoVariant }: { logoVariant?: "simple" | "dark" }) => {
  return (
    <nav>
      <Link href={routes.home}>
        <CareKonnectLogo variant={logoVariant} />
      </Link>
    </nav>
  );
};

export default Nav;
