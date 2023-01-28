export default function Length(props) {
  const { type } = props;
  return (
    <>
      <div className="dec-inc-container">
        <p>{type} Length</p>
        <div className="btns-container">
          <button>Decrement</button>
          <p>Value</p>
          <button>Inecrement</button>
        </div>
      </div>
    </>
  );
}
