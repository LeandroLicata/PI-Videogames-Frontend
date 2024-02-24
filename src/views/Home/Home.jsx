import Filters from "../../components/Filters/Filters";

export default function Home() {
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
