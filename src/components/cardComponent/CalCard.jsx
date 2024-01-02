import CalBtnList from "../buttonList/CalBtnList";

const CalCard = () => {
  return (
    <div className="col-4 card">
      <div className="row">
        <div className="col mt-3">
          <textarea name="" id="" cols="" rows="3"></textarea>
        </div>
      </div>
      <CalBtnList></CalBtnList>
      <div className="row text-center mt-2">
        <div className="col">
          <button type="button" className="btn btn-outline-danger btn-size">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalCard;
