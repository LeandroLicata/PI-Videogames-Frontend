import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addVideogame } from "../../features/videogame/videogameThunks";
import { useEffect } from "react";
import { fetchGenres } from "../../features/genre/genreThunks";
import { fetchPlatforms } from "../../features/platform/platformThunks";

export default function AddForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(addVideogame(formData));
    console.log(formData);
  };

  const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPlatforms());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-vh-100 container">
      <fieldset>
        <legend>Add your videogame</legend>
        <div className="form-group">
          <label className="form-label mt-4">
            Name:
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              {...register("name", { required: true })}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label mt-4">
            Genres:
            <select className="form-select" {...register("genres")}>
              {genres.map((g, i) => {
                return (
                  <option key={i} value={g.slug}>
                    {g.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label className="form-label mt-4">
            Platforms:
            <select className="form-select" {...register("platforms")}>
              {platforms.map((p, i) => {
                return (
                  <option key={i} value={p.id}>
                    {p.name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label className="form-label mt-4">
            Release date:
            <input
              type="date"
              className="form-control"
              {...register("released")}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label mt-4">
            Rating:
            <input
              type="number"
              className="form-control"
              {...register("rating", { min: 0, max: 5 })}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}
