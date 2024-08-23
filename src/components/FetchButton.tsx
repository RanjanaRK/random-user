import fetchAtom from "@/atoms/fetchAtom";
import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

const FetchButton = () => {
  const [fetch, setFetch] = useAtom(fetchAtom);

  const queryClient = useQueryClient();
  const fechbtn = () => {
    const fetchHandle = queryClient.invalidateQueries({
      queryKey: ["getuser"],
    });
  };

  return (
    <>
      <Button color="primary" onPress={fechbtn} isLoading={fetch}>
        {fetch ? "" : "Refetch"}
      </Button>
    </>
  );
};

export default FetchButton;
