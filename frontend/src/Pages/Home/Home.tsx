import React from "react";
import SimpleCardWrapper from "./SimpleCardWrapper";
import FirstIntro from "./FirstIntro";
import Carousal from "./Carousal";
import SecondIntro from "./SecondIntro";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <FirstIntro />
      <Carousal />
      <SimpleCardWrapper />
      <SecondIntro />
    </div>
  );
};

export default Home;
