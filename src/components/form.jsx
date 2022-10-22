// Importar el hook de useState
import { useState } from "react";
export default function FormVenta() {
  // Definir las varibales dde estado del formulairo, a traves de el hook useState
  const [fullname, setFullname] = useState(""); // valor predeterminado del estado
  const [valVenta, setvalVenta] = useState("");
  const [zona, setZona] = useState("");
  const [comision, setComision] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); //Hace que no se ejecute el postback
    // console.log(`Nombre: ${fullname} y su salario es: ${salary}`);
    if (fullname !== "" && valVenta !== "" && zona !== "") {
      // alert(`Nombre: ${fullname}, valor venta: ${valVenta}, comision: ${comision}`);
      switch (zona) {
        case "norte":
          setComision(parseFloat(valVenta * 0.3 + parseFloat(valVenta)));
          break;
        case "sur":
          setComision(parseFloat(valVenta * 0.2 + parseFloat(valVenta)));
          break;
        case "occidente":
          setComision(parseFloat(valVenta * 0.4 + parseFloat(valVenta)));
          break;
        default:
          alert(`Debe seleccionar una zona`);
          break;
      }
    } else {
      alert("Todos los datos son obligatorios");
    }
  };
  return (
    <div className="container my-5 px-5">
      <form onSubmit={handleSubmit}>
        <div className="row my-2">
          <div class="col-sm-12 col-md-6">
            <label htmlfor="fullname" class="col-form-label">
              Nombre 
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Nombre Completo"
              className="form-control"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="valVenta" className="col-form-label">
              Valor 
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="number"
              id="valVenta"
              name="valVenta"
              placeholder="Ingresa el valor de la venta"
              className="form-control"
              onChange={(event) => setvalVenta(event.target.value)}
              value={valVenta}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="zona" className="col-form-label">
              Zona
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(event) => setZona(event.target.value)}
              value={setZona}
            >
              <option selected>Seleccione una zona</option>
              <option value="norte">Norte</option>
              <option value="sur">Sur</option>
              <option value="occidente">Occidente</option>
            </select>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="comision" className="col-form-label">
              Comision
            </label>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto text-center">
            <input
              type="number"
              id="comision"
              name="comision"
              className="form-control"
              readOnly
              value={comision}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-sm-12 col-md-6">
            <button className="btn btn-primary btn-sm my-1 w-25 col-sm-12 col-md-6">
              Calcular
            </button>
          </div>
          <div className="col-sm-12 col-md-6">
            <form
              onSubmit={() => {
                setFullname("");
                setvalVenta("");
                setZona("");
                setComision("");
              }}
            >
              <button className="btn btn-primary mt-2 w-25">Borrar datos</button>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}
