import Card from "../Card/Card";

export default function CardsContainer({ videogames, startIndex, endIndex }) {
  return (
    <div>
      {videogames.length ? (
        videogames.slice(startIndex, endIndex).map((videogame, idx) => {
          return (
            <div key={idx}>
              <Card
                id={videogame.id}
                name={videogame.name}
                background_image={videogame.background_image}
                genres={videogame.genres}
              />
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
