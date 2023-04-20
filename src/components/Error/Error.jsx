import { useSelector } from "react-redux";

export default function Error() {
  const error = useSelector((state) => state.videogame.error);
  return (
    <div>
      <h1>ERROR</h1>
      <h2>{error}</h2>
    </div>
  );
}
