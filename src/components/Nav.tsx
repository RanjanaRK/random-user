import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import FetchButton from "./FetchButton";
import SwitchButton from "./SwitchButton";

const Nav = () => {
  return (
    <>
      <div className="sticky top-0 z-40">
        <Navbar
          isBordered
          isBlurred={false}
          className=" h-[7dvh] backdrop-blur-xl backdrop-saturate-100 bg-background/50"
        >
          <NavbarBrand>
            <p className="font-bold text-inherit">RandomUser</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-1" justify="center">
            <NavbarItem className="flex justify-center items-center gap-4">
              <SwitchButton />
              <FetchButton />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  );
};

export default Nav;
