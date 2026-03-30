const ProfileMenuItem = () => {
  return (
    <li className="bg-[rgba(251,251,251,0.82)] dark:bg-[rgba(50,50,50,0.82)] dark:text-white m-4 rounded-[45px] h-16 w-[calc(100%-32px)] hidden lg:flex justify-center items-center gap-5 absolute">
      <h1>IMG</h1>
      <section>
        <p>NAME</p>
        <p>
          <span>XP</span>
          <span>PLAN</span>
        </p>
      </section>
    </li>
  );
};

export default ProfileMenuItem;
