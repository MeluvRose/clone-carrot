import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <p className="first-letter:text-7xl first-letter:hover:text-fuchsia-400">
        Hello World!
      </p>
    </div>
  );
};

export default Home;
