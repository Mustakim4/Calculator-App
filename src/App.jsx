import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CalCard from "./components/cardComponent/CalCard";

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <CalCard></CalCard>
      </div>
    </div>
  );
}

export default App;
