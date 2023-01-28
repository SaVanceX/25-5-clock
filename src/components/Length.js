export default function Length(props) {
  const { type, handleClick, value } = props;
  return (
    <>
      <div className="dec-inc-container">
        <p>{type} Length</p>
        <div className="btns-container">
          <button className={type + "-dec"} onClick={handleClick}>
            Decrement
          </button>
          <p>{value}</p>
          <button className={type + "-inc"} onClick={handleClick}>
            Inecrement
          </button>
        </div>
      </div>
    </>
  );
}
