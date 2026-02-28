import Spinner from "react-bootstrap/Spinner";
import "./Loader.css"

const Loader = () => {
  return (
    <div className="cargador">
      <Spinner animation="border" variant="primary"/>
    </div>
  );    
};

export default Loader;

