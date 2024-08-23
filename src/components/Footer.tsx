import { Navbar } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Navbar
      isBordered
      className=" h-[6dvh] border-t-[1px] border-b-0 grid place-items-center"
    >
      <div className="flex flex-col text-blue-500">
        <Link
          href="https://randomapi.com/"
          className="hover:opacity-75 transition-opacity active:opacity-disabled"
        >
          Powered By RandomAPI
        </Link>
        <Link
          href="https://randomuser.me/"
          className="hover:opacity-75 transition-opacity active:opacity-disabled"
        >
          https://randomuser.me
        </Link>
      </div>
    </Navbar>
  );
};

export default Footer;
