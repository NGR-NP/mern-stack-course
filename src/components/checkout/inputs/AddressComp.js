const AddressComp = ({ address, setAddress }) => {
  return (
    <div>
      <input
        type="text"
        name="address"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
};

export default AddressComp;
