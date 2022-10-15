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
    //console.log(`Nombre: ${fullname} y su salario es: ${salary}`);
    if (fullname !== "" && valVenta !== "" && zona !== "") {
      //alert(`Nombre: ${fullname}, salario: ${salary}, email: ${email}`);
      if (parseFloat(comision) === "norte") {
        setComision(parseFloat(comision) * 0.3);
      } else {
        setComision("");
      }
    } else {
      alert("Todos los datos son obligatorios");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Nombre Completo</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Nombre Completo"
          className="form-control"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />

        <label htmlFor="valVenta">Valor venta</label>
        <input
          type="number"
          id="valVenta"
          name="valVenta"
          placeholder="Ingresa el valor de la venta"
          className="form-control"
          onChange={(event) => setvalVenta(event.target.value)}
          value={valVenta}
        />

        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(event) => setZona(event.target.value)}
          value={setZona}
        >
          <option selected>Seleccione una zona</option>
          <option value="sur">Sur</option>
          <option value="norte">Norte</option>
          <option value="occidente">Occidente</option>
        </select>

        <label htmlFor="comision">Comision</label>
        <input
          type="number"
          id="comision"
          name="comision"
          readOnly
          className="form-control"
        />
        <button className="btn btn-success btn-sm mt-5">Calcular</button>
      </form>
      <form
        onSubmit={() => {
          setFullname("");
          setvalVenta("");
          setZona("");
          setComision("");
        }}
      >
        <button className="btn btn-danger mt-2">Borrar datos</button>
      </form>
    </div>
  );
}
