const NumberComp = ({number, setNumber}) => {
  return (
    <div>
      <input
        type="tel"
        name="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Number"
      />
    </div>
  );
};

export default NumberComp;
