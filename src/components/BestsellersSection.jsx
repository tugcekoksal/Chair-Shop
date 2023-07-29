import BestSellers from "./BestsellersFeatures";
import chair1Image from "./chair-1.jpg";
import chair2Image from "./chair-2.jpg";
import chair3Image from "./chair-3.jpg";

const BestSellingChairs = () => {
  const path1features = [
    "Leisure and relaxing",
    "Comfortable for 4h",
    "Vegan leather",
    "Weighs 16 kg",
  ];
  const path2features = [
    "Work",
    "Comfortable for 8h",
    "Vegan leather",
    "Weighs 22 kg",
  ];
  const path3features = [
    "Leisure and relaxing",
    "Comfortable all day!",
    "Organic cotton",
    "Weighs 80 kg",
  ];
  return (
    <section>
      <h2>Our bestselling chairs</h2>
      <div className="grid-3-cols">
        <BestSellers
          image={chair1Image}
          price={250}
          name={"The Laid Back"}
          features={path1features}
        />
        <BestSellers
          image={chair2Image}
          price={525}
          name={"The Worker Bee"}
          features={path2features}
        />
        <BestSellers
          image={chair3Image}
          price={1450}
          name={"The Chair 4/2"}
          features={path3features}
        />
      </div>
    </section>
  );
};

export default BestSellingChairs;
