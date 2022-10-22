export default function Banner() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4 w-50"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ca944688226269.5dcfdc104fc7c.gif"
        alt=""
      />
      <h1 className="display-5 fw-bold">Bus Parade</h1>
      <div className="col-lg-10 mx-auto">
        <p className="lead mb-4">
          Compra tus tiquetes de bus desde la comodidad de tu casa para recorrer los distintos puntos de la ciudad.
        </p>
      </div>
    </div>
  );
}
