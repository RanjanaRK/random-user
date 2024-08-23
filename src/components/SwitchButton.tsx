import { Switch } from "@nextui-org/react";
import { Sunicon } from "./icons/Sunicon";
import { Moonicon } from "./icons/Moonicon";
import { useEffect } from "react";
import { useAtom } from "jotai";
import Atomdark from "@/atoms/Atomdark";

const SwitchButton = () => {
  const [dark, setDark] = useAtom(Atomdark);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <Switch
      size="lg"
      color="primary"
      startContent={<Sunicon />}
      endContent={<Moonicon />}
      onValueChange={setDark}
      isSelected={dark}
    ></Switch>
  );
};

export default SwitchButton;
