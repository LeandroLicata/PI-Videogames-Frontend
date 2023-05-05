import Card from "../Card/Card";

export default function CardsContainer({ videogames, startIndex, endIndex }) {
  return (
    <div className="row">
      {videogames.length ? (
        videogames.slice(startIndex, endIndex).map((videogame, idx) => {
          return (
            <div key={idx} className="col-6 col-md-4 col-lg-4">
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
        <h1>Not games found</h1>
      )}
    </div>
  );
}
