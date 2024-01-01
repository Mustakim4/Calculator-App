import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-4 allBorder">
          <div className="row">
            <div className="col">
              <textarea name="" id="" cols="" rows=""></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col">1</div>
            <div className="col">2</div>
            <div className="col">3</div>
            <div className="col">/</div>
          </div>

          <div className="row">
            <div className="col">4</div>
            <div className="col">5</div>
            <div className="col">6</div>
            <div className="col">x</div>
          </div>

          <div className="row">
            <div className="col">7</div>
            <div className="col">8</div>
            <div className="col">9</div>
            <div className="col">+</div>
          </div>

          <div className="row">
            <div className="col">.</div>
            <div className="col">0</div>
            <div className="col">=</div>
            <div className="col">-</div>
          </div>

          <div className="row text-center">
            <div className="col">clear</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
