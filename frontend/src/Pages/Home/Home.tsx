import React from "react";
import SimpleCardWrapper from "./SimpleCardWrapper";
import FirstIntro from "./FirstIntro";
import Carousal from "./Carousal";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <FirstIntro />
      <Carousal />
      <SimpleCardWrapper />
    </div>
  );
};

export default Home;
