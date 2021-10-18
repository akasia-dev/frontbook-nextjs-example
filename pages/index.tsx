import type { NextPage } from "next";
import PrimaryTest from "../component/primary-test";

const Home: NextPage = () => {
  return (
    <div>
      <p>Hello Next.js</p>
      <PrimaryTest name="Test?" />
    </div>
  );
};

export default Home;
