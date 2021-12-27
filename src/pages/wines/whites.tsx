import type { NextPage } from "next";
import { WineContainers } from "../../components/WineContainers";

const WhitesWinePage: NextPage = () => {
  const name = "white";

  return (
    <div>
      <WineContainers name={name} />
    </div>
  );
};

export default WhitesWinePage;
