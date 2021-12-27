import styled from "@emotion/styled";
import { Error, Loading, WineCard } from ".";
import { MEDIA_QUERY_END_POINT } from "../constants";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";

interface WineContainersProps {
  name: string;
}
export const WineContainers = ({ name }: WineContainersProps) => {
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <WineTitle>{name} Wine</WineTitle>
      <WineCardContainer>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`${name}-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </WineCardContainer>
    </div>
  );
};

const WineTitle = styled.h1`
  line-height: 180%;
  border-bottom: 1px solid #eee;
`;
const WineCardContainer = styled.main`
  display: grid;

  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-column: repeat(2, 1fr);
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
