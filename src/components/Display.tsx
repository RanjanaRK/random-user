import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UserCard from "./UserCard";
import SkeletonCard from "./SkeletonCard";
import { useEffect } from "react";
import { useAtom } from "jotai";
import fetchAtom from "@/atoms/fetchAtom";
import { Userdata } from "./udata/Usersdata";

const fetchHeroes = async () => {
  const request = await axios.get("https://randomuser.me/api/");
  const response = request.data;
  const data = response.results;
  return data;
};

const Display = () => {
  const [fetch, setFetch] = useAtom(fetchAtom);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["getuser"],
    queryFn: fetchHeroes,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isLoading || isFetching) {
      setFetch(true);
    } else {
      setFetch(false);
    }
  }, [isLoading || isFetching]);

  if (isLoading || isFetching) {
    return (
      <>
        <div className="">
          <SkeletonCard />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="">
        {data.map((users: Userdata) => {
          return <UserCard key={users.login.uuid} detail={users} />;
        })}
      </div>
    </>
  );
};

export default Display;
