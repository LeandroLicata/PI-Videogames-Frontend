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
    formData.genres = formData.genres.map((genreSlug) =>
      genres.find((genre) => genre.slug === genreSlug)
    );

    formData.platforms = formData.platforms.map((platformId) =>
      platforms.find((platform) => platform.id === parseInt(platformId))
    );
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container card border-warning mb-2"
    >
      <fieldset className="row">
        <legend className="text-center text-danger">Add your videogame</legend>
        <div className="col-md-4 d-flex flex-column justify-content-end">
          <div className="form-group">
            <img
              src="/images/kusanagi motoko.png"
              alt="Imagen"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-8">
          <div className="form-group">
            <label className="form-label mt-4 text-warning">
              Name:
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
                {...register("name", { required: "Name is required" })}
              />
            </label>

            {errors.name && (
              <span className="text-danger">{errors.name.message}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label mt-4 text-warning">
              Image:
              <input
                type="url"
                placeholder="Enter image url"
                className="form-control"
                {...register("background_image", {
                  pattern: {
                    value: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp)$/,
                    message:
                      "Please enter a valid image URL (png, jpg, jpeg, gif, bmp)",
                  },
                })}
              />
            </label>
            {errors.background_image && (
              <span className="text-danger">
                {errors.background_image.message}
              </span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label mt-4 text-warning">Genres:</label>
            <div>
              {genres.map((g, i) => (
                <label key={i} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={g.slug}
                    {...register(`genres`, {
                      validate: {
                        min: (value) =>
                          value.length >= 1 || "Select at least one genre",
                        max: (value) =>
                          value.length <= 3 || "Select up to three genres",
                      },
                    })}
                  />
                  {g.name}
                </label>
              ))}
            </div>
            {errors.genres && (
              <span className="text-danger">{errors.genres.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label mt-4 text-warning">Platforms:</label>
            <div>
              {platforms.map((p, i) => (
                <label key={i} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={p.id}
                    {...register(`platforms`, {
                      validate: {
                        min: (value) =>
                          value.length >= 1 || "Select at least one platform",
                        max: (value) =>
                          value.length <= 5 || "Select up to five platforms",
                      },
                    })}
                  />
                  {p.name}
                </label>
              ))}
            </div>
            {errors.platforms && (
              <span className="text-danger">{errors.platforms.message}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label mt-4 text-warning">
              Release date:
              <input
                type="date"
                className="form-control"
                {...register("released")}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label mt-4 text-warning">
              Rating:
              <input
                type="number"
                className="form-control"
                placeholder="Enter Rating"
                {...register("rating", { min: 0, max: 5 })}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label mt-4 text-warning">
              Description:
              <textarea
                className="form-control"
                placeholder="Enter Description"
                {...register("description", { required: true })}
              />
            </label>
            {errors.description && (
              <span className="text-danger">Description is required</span>
            )}
          </div>
          <button type="submit" className="btn btn-outline-info mb-2">
            Submit
          </button>
          {Object.keys(errors).length > 0 && (
            <span className="text-danger">Please fix the form errors.</span>
          )}
        </div>
      </fieldset>
    </form>
  );
}
