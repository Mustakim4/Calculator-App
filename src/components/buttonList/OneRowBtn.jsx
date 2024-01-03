import CalBtn from "../button/CalBtn";

const OneRowBtn = ({ rowData, getValue }) => {
  return (
    <div className="row">
      {rowData.map((item) =>
        item !== "=" ? (
          <CalBtn getValue={getValue} key={item} color={"primary"}>
            {item}
          </CalBtn>
        ) : (
          <CalBtn getValue={getValue} key={item} color={"success"}>
            {item}
          </CalBtn>
        )
      )}
    </div>
  );
};

export default OneRowBtn;
