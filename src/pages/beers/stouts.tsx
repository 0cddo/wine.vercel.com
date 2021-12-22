import type { NextPage } from "next";
import { Error, Loading, BeerCard } from "../../components";
import { useBeerData } from "../../hooks/useBeerData";
import { Beer } from "../../types/Beer";

const StoutBeerPage: NextPage = () => {
  // name에 stout가 되면 error, stouts 변경 후 정상 작동
  const name = "stouts";
  const { data, error } = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Stout Beer</h1>
      <main>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={`stout-beer-list-${beerData.id}`}
              beerData={beerData}
            />
          );
        })}
      </main>
    </div>
  );
};

export default StoutBeerPage;
