import type { NextPage } from "next";
import { WineContainers } from "../../components/WineContainers";

const DessertWinePage: NextPage = () => {
  const name = "dessert";

  return (
    <div>
      <WineContainers name={name} />
    </div>
  );
};

export default DessertWinePage;
