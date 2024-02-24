import { useForm } from "react-hook-form";
import useFilters from "../../hooks/useFilters";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const { register, handleSubmit } = useForm();
  const { genres, platforms } = useFilters();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(
      `/results?name=${data.name}&genres=${data.genres}&platforms=${data.platforms}`
    );
  };

  return (
    <form className="row" onSubmit={handleSubmit(onSubmit)}>
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
      <div>
        <button
          className="btn btn-outline-secondary my-3 my-sm-3"
          type="submit"
        >
          Search / Apply filters
        </button>
      </div>
    </form>
  );
}
