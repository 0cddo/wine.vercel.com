import type { NextPage } from "next";
import { WineContainers } from "../../components/WineContainers";

const RedsWinePage: NextPage = () => {
  const name = "reds";

  return (
    <div>
      <WineContainers name={name} />
    </div>
  );
};

export default RedsWinePage;
