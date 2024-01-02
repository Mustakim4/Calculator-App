const CalBtn = ({ children }) => {
  return (
    <div className="col">
      <button type="button" className="btn btn-outline-primary btn-size">
        {children}
      </button>
    </div>
  );
};

export default CalBtn;
