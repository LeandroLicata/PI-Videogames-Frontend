import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { searchVideogames } from "../../features/videogame/videogameThunks";
import useFilters from "../../hooks/useFilters";

export default function Filters() {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const { genres, platforms } = useFilters();

  const onSubmit = (data) => {
    dispatch(searchVideogames(data));
  };

  return (
    <form className="container mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <img
            src="images/logo-big.png"
            alt="Logo"
            style={{ height: 100 }}
            className="img-fluid"
          />
          <h3 className="text-info text-center">
            Your ultimate gaming encyclopedia.
          </h3>
        </div>
        <div className="col-12">
          <label className="form-label">Search by Name</label>
          <input
            className="form-control me-sm-2 bg-dark"
            type="text"
            placeholder="Search..."
            {...register("name")}
          />
        </div>
        <div className="my-3 col-6">
          <label className="form-label">Genre filter</label>
          <select
            className="form-select bg-info text-dark"
            {...register("genres")}
          >
            <option value="">All</option>
            {genres?.map((g, i) => (
              <option value={g.slug} key={i}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3 col-6">
          <label className="form-label">Platform filter</label>
          <select
            className="form-select bg-info text-dark"
            {...register("platforms")}
          >
            <option value="">All</option>
            {platforms?.map((p, i) => (
              <option value={p.id} key={i}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <button
            className="btn btn-outline-secondary my-3 my-sm-3"
            type="submit"
          >
            Search / Apply filters
          </button>
        </div>
      </div>
    </form>
  );
}
