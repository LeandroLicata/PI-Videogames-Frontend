import Search from "../Search/Search";

export default function Filters() {
  return (
    <div className="container mt-3">
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
        <Search />
      </div>
    </div>
  );
}
