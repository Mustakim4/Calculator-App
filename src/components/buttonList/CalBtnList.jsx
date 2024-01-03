import CalBtn from "../button/CalBtn";
import OneRowBtn from "./OneRowBtn";
import { useReducer } from "react";

const reducerFunc = (state, action) => {
  if (action.type === "ADD") {
    let addition = state + "" + action.payload.val;
    state = addition;
    return state;
  } else if (action.type === "CLEAR") {
    return "";
  } else if (action.type === "ISEQUALTO") {
    let newEvaluateValue = state;
    try {
      state = eval(newEvaluateValue);
      return state;
    } catch (error) {
      return "";
    }
  }
};

const CalBtnList = () => {
  const [state, dispatch] = useReducer(reducerFunc, "");

  const getValue = (e) => {
    if (e === "Clear") {
      dispatch({ type: "CLEAR" });
    } else if (e === "=") {
      dispatch({ type: "ISEQUALTO" });
    } else {
      dispatch({
        type: "ADD",
        payload: {
          val: e,
        },
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col mt-3">
          <input
            type="text"
            className="inputText fs-3"
            readOnly
            value={state}
          />
        </div>
      </div>

      <div className="row">
        <div className="col mt-3">
          <OneRowBtn
            getValue={getValue}
            rowData={["1", "2", "3", "/"]}
          ></OneRowBtn>
          <OneRowBtn
            getValue={getValue}
            rowData={["4", "5", "6", "*"]}
          ></OneRowBtn>
          <OneRowBtn
            getValue={getValue}
            rowData={["7", "8", "9", "+"]}
          ></OneRowBtn>
          <OneRowBtn
            getValue={getValue}
            rowData={[".", "0", "=", "-"]}
          ></OneRowBtn>
        </div>
      </div>

      <div className="row text-center mt-2">
        <CalBtn getValue={getValue} key={"clear"} color={"danger"}>
          Clear
        </CalBtn>
      </div>
    </>
  );
};

export default CalBtnList;
