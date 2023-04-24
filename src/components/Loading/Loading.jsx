export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}
    >
      <h1>LOADING...</h1>
      <br />
      <img src="/images/pac-man.gif" alt="loading..." height={100}/>
    </div>
  );
}

