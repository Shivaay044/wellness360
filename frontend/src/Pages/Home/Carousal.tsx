import Carousel from "better-react-carousel";
import { Heading } from "@chakra-ui/react";

import Img1 from "../../Images/carousal (1).jpg";
import Img2 from "../../Images/carousal (2).jpg";
import Img3 from "../../Images/carousal (3).jpg";
import Img4 from "../../Images/carousal (4).jpg";
import Img5 from "../../Images/carousal (5).jpg";
import Img6 from "../../Images/carousal (6).jpg";
import Img7 from "../../Images/carousal (7).jpg";
import Img8 from "../../Images/carousal (8).jpg";
import Img9 from "../../Images/carousal (9).jpg";
import Img10 from "../../Images/carousal (10).jpg";
import Img11 from "../../Images/carousal (11).jpg";
import Img12 from "../../Images/carousal (12).jpg";
import Img13 from "../../Images/carousal (13).jpg";
import Img14 from "../../Images/carousal (14).jpg";
import Img15 from "../../Images/carousal (15).jpg";
import Img16 from "../../Images/carousal (16).jpg";
import Img17 from "../../Images/carousal (17).jpg";
import Img18 from "../../Images/carousal (18).jpg";
import Img19 from "../../Images/carousal (19).jpg";
import Img20 from "../../Images/carousal (20).jpg";

type Props = {};

function WebsiteHeading() {
  return (
    <Heading as="h2" size="lg" m={10} color="#5D0000">
      Experience WeFit: A Visual Journey to a Healthier You
    </Heading>
  );
}

const Carousal = (props: Props) => {
  return (
    <>
      <WebsiteHeading />
      <Carousel cols={5} rows={1} gap={15} height="50px" loop>
        <Carousel.Item>
          <img width="100%" src={Img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img2} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img3} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img4} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img5} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img6} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img7} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img8} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img9} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img10} />
        </Carousel.Item>

        {/* ... */}

        <Carousel.Item>
          <img width="100%" src={Img11} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img12} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img13} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img14} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img15} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img16} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img17} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img18} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img19} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Img20} />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousal;
