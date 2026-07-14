import { GET_USER_DATA } from "@/app/_graphql/typeDefs";
import { GetUserDataQuery } from "@/app/_types/Auth";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import EmptyProfileImage from "@/public/emptyProfilePicture.svg";

const ProfileMenuItem = () => {
  const { data } = useQuery<GetUserDataQuery>(GET_USER_DATA);

  return (
    <li className="bg-[rgba(251,251,251,0.82)] dark:bg-[rgba(50,50,50,0.82)] dark:text-white m-4 rounded-[45px] h-16 w-[calc(100%-32px)] hidden lg:flex justify-center items-center gap-5 absolute">
      <h1>
        <Image
          src={data?.getUserData.picture ?? EmptyProfileImage}
          alt="Profile photo"
          width={60}
          height={60}
          className="rounded-[45px]"
        />
      </h1>
      <section>
        <p>{data?.getUserData.name}</p>
        <p>
          <span>{data?.getUserData.points} XP</span>
          <span>{data?.getUserData.subscription.name}</span>
        </p>
      </section>
    </li>
  );
};

export default ProfileMenuItem;
