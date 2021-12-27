import type { NextPage } from "next";
import { WineContainers } from "../../components/WineContainers";

const RoseWinePage: NextPage = () => {
  const name = "rose";
  return (
    <div>
      <WineContainers name={name} />
    </div>
  );
};

export default RoseWinePage;
