import Text from "../Atoms/Text";
import FeaturedMomentCard from "./FeaturedMomentCard";

const cardsData = [
  {
    id: 1,
    name: "Rustyn's first walk",
    backgroundColor: "lightBlue",
  },
  {
    id: 2,
    name: "Ileana's first birthday",
    backgroundColor: "pink",
  },
  {
    id: 3,
    name: "Rustyn's first food",
    backgroundColor: "lightBlue",
  },
  {
    id: 4,
    name: "Ileana's first food",
    backgroundColor: "pink",
  },
  {
    id: 5,
    name: "Rustyn's first job",
    backgroundColor: "lightBlue",
  },
  {
    id: 6,
    name: "Ileana's first job",
    backgroundColor: "pink",
  },
];

const CardGroup = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          width: "632px",
          gap: "11px",
          overflowX: "auto",
        }}
      >
        <style>
          {`
      /* Hide scrollbar for Chrome, Safari, and Opera */
      div::-webkit-scrollbar {
        display: none;
      }
    `}
        </style>
        {cardsData.map((card) => {
          return (
            <>
              <FeaturedMomentCard
                name={card.name}
                backgroundColor={card.backgroundColor}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

const FeaturedMoments = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "629px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text
            content="Featured Moments"
            variant="h6"
            sx={{ fontWeight: "bold" }}
          />
          <div style={{ marginTop: "3px" }}>
            <Text variant="subtitle2" content={"See More"} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "18px" }}>
        <CardGroup />
        <CardGroup />
      </div>
    </>
  );
};

export default FeaturedMoments;
