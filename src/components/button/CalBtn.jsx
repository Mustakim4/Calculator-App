const CalBtn = ({ children, color, getValue }) => {
  return (
    <div className="col">
      <button
        type="button"
        className={`btn btn-outline-${color} btn-size`}
        onClick={() => getValue(children)}
      >
        {children}
      </button>
    </div>
  );
};

export default CalBtn;
