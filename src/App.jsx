import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Img from './components/img';
import FormVenta from './components/form';
import "./App.css";

function App() {
  return (
    <div className="container my-5">
      <Navbar></Navbar>
      <Banner></Banner>
      <Img></Img>
      <FormVenta></FormVenta>
    </div>
  );
}

export default App;
