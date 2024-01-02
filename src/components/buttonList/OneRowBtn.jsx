import CalBtn from "../button/CalBtn";

const OneRowBtn = ({ rowData, rowDataIsEqualTo }) => {
  return (
    <div className="row">
      {rowData.map((item) =>
        item !== "" ? (
          <CalBtn key={item}>{item}</CalBtn>
        ) : (
          <div key={rowDataIsEqualTo} className="col">
            <button type="button" className="btn btn-outline-success btn-size">
              {rowDataIsEqualTo}
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default OneRowBtn;
