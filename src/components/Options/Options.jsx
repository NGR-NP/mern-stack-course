import "../dropdown/customDropdown.css";

const Options = ({ option, title, setChoose }) => {
  return (
    <>
      <div
        className="customDropdown customDropdownIconCont"
        title="Categorites"
      >
        <select
          style={{ paddingLeft: "10px" }}
          className="customDropdownSelect"
          onChange={(e) => setChoose(e.target.value)}
          defaultValue={title}
        >
          <option  value={title} disabled>{title}</option>
          {option.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="customDropdownArrow"></div>
      </div>
    </>
  );
};

export default Options;
