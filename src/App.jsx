import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-4 card">
          <div className="row">
            <div className="col mt-3">
              <textarea name="" id="" cols="" rows="3"></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    1
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    2
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    3
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    /
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    4
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    5
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    6
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    X
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    7
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    8
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    9
                  </button>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    .
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    0
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-size"
                  >
                    =
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-size"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col mt-3">
              <button type="button"  className="btn btn-outline-danger btn-size">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
