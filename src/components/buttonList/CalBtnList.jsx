import OneRowBtn from "./OneRowBtn";

const CalBtnList = () => {
  return (
    <div className="row">
      <div className="col">
        <OneRowBtn rowData={["1", "2", "3", "/"]}></OneRowBtn>
        <OneRowBtn rowData={["4", "5", "6", "x"]}></OneRowBtn>
        <OneRowBtn rowData={["7", "8", "9", "+"]}></OneRowBtn>
        <OneRowBtn
          rowData={[".", "0", "", "-"]}
          rowDataIsEqualTo={"="}
        ></OneRowBtn>
      </div>
    </div>
  );
};

export default CalBtnList;
