import type { NextPage } from "next";
import { WineContainers } from "../../components/WineContainers";

const SparklingWinePage: NextPage = () => {
  const name = "Sparkling";
  return (
    <div>
      <WineContainers name={name} />
    </div>
  );
};

export default SparklingWinePage;
