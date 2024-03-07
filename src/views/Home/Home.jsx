import Filters from "../../components/Filters/Filters";
import useFilters from "../../hooks/useFilters";
import Loading from "../../components/Loading/Loading";

export default function Home() {
  const { isLoading } = useFilters();

  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Filters />
        </div>
        <div className="text-center col-md-6 d-none d-md-block">
          <img
            src="/images/tachikoma.png"
            alt="landing"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
