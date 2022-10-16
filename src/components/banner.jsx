export default function Banner() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4 w-50"
        src="https://images.wallpaperscraft.com/image/single/traveler_backpack_loneliness_train_station_speed_113724_1280x720.jpg"
        alt=""
      />
      <h1 className="display-5 fw-bold">Station</h1>
      <div className="col-lg-10 mx-auto">
        <p className="lead mb-4">
          En esta aplicacion vas a poder comprar tus tiquetes para el metro de la ciudad.
        </p>
      </div>
    </div>
  );
}
