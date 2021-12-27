import type { NextPage } from "next";
import { WineContainers } from "../../components/WineContainers";

const PortWinePage: NextPage = () => {
  const name = "port";

  return (
    <div>
      <WineContainers name={name} />
    </div>
  );
};

export default PortWinePage;
