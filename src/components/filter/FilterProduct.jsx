import styled from "styled-components";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import EmojiPeople from "@mui/icons-material/EmojiPeople";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useEffect, useState } from "react";
const FilterCont = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
  position: relative;
  flex-wrap: wrap;
`;
const Filter = styled.div`
  --left: 21px;
  display: flex;
  align-items: center;
  position: relative;
`;
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  margin: 5px 90px 12px 0;
  @media screen and (max-width: 750px) {
    margin: 5px;
  }
`;
const FTitle = styled.div`
  margin: 5px 12px 12px 0;
  font-size: 23px;
  padding: 8px 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 20px 0px;
  font-family: var(--font1);
  border-radius: 6px;
  color: #636363;
`;
const ColorIcon = styled(ColorLensIcon)`
  position: absolute;
  left: var(--left);
  color: ${(props) => props.color};
`;
const SizeIcon = styled(EmojiPeople)`
  position: absolute;
  left: var(--left);
`;

const NewIcon = styled(FiberNewIcon)`
  position: absolute;
  left: var(--left);
`;
const Select = styled.select`
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);

  font-size: 18px;
  padding: 9px 4px 9px 29px;
  text-align: center;
  background-color: var(--pink);
  color: #4e4e4e;
  border: 0;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 13px;
`;
const Option = styled.option`
  font-size: 18px;
  cursor: pointer;
  text-align: start;
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  right: -6px;
  display: block;
  height: 100%;
  width: 2rem;
  background: var(--midBlue);
  pointer-events: none;
  border-radius: 0 5px 5px 0;
  &::before,
  &::after {
    --size: 0.4em;
    --arrow: rgb(255 255 255 / 77%);
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid var(--arrow);
    top: 35%;
  }
  &::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid var(--arrow);
    top: 65%;
  }
`;
const Reset = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 13px;
`;
const Button = styled.div`
  padding: 4px 9px;
  background-color: #e7e7e7;
  color: #8e0000;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 20px 0px;
  cursor: pointer;
  margin-left: 1rem;
  border-radius: 50px;
  display: flex;
`;
const FilterProduct = ({
  products,
  handleFilter,
  setSort,
  sort,
  setFilters,
}) => {
  const [dflVluClr, setDflVluClr] = useState();
  const [dflVluSize, setDflVluSize] = useState();
  const [clrOptions, setClrOptions] = useState();
  const [sizeOptions, setSizeOptions] = useState();
  const [clr, setClr] = useState("");
  // useEffect(() => {
  //   if (products) {
  //     const uniqueClr = [
  //       ...new Set(products.flatMap((product) => product.color)),
  //     ];
  //     setClrOptions(
  //       uniqueClr.map((color) => (
  //         <Option key={color} val={color}>
  //           {color}
  //         </Option>
  //       ))
  //     );
  //   } else {
  //     setClrOptions([]);
  //   }
  // }, [products]);

  // useEffect(() => {
  //   if (products) {
  //     const colors = products.map((product) => product.color);
  //     const flatColors = colors.flat();
  //     const uniqueColors = Array.from(new Set(flatColors));
  //     setClrOptions(
  //       uniqueColors.map((color) => <Option value={color}>{color}</Option>)
  //     );
  //   } else {
  //     setClrOptions([]);
  //   }
  // }, [products]);

  useEffect(() => {
    if (products) {
      const uniqueClr = Array.from(
        new Set(products.map((product) => product.color).flat())
      );
      const uniqueSize = Array.from(
        new Set(products.map((product) => product.size).flat())
      );
      setClrOptions(
        uniqueClr.map((color) => (
          <Option key={color} val={color}>
            {color}
          </Option>
        ))
      );
      setSizeOptions(
        uniqueSize.map((size) => (
          <Option key={size} val={size}>
            {size}
          </Option>
        ))
      );
    } else {
      setClrOptions([]);
      setSizeOptions([]);
    }
  }, [products]);

  const resetClr = (e) => {
    setDflVluClr(e.target.value);
  };

  const resetSiz = (e) => {
    setDflVluSize(e.target.value);
  };

  const handleReset = () => {
    setFilters([]);
    setDflVluClr("defaultValue");
    setDflVluSize("defaultValue");
  };
  return (
    <FilterCont>
      <FTitle>Filter Products:</FTitle>
      <Wrap>
        <Filter>
          <SizeIcon fontSize="small" />
          <Select
            name="size"
            value={dflVluSize}
            defaultValue={"defaultValue"}
            onChange={(e) => {
              handleFilter(e);
              resetSiz(e);
            }}
          >
            <Option value="defaultValue" disabled>
              Size
            </Option>
            {sizeOptions}
          </Select>
          <Arrow />
        </Filter>
        <Filter>
          <ColorIcon fontSize="small" color={clr} />
          <Select
            name="color"
            value={dflVluClr}
            defaultValue={"defaultValue"}
            onChange={(e) => {
              handleFilter(e);
              resetClr(e);
              setClr(e.target.value);
            }}
          >
            <Option value="defaultValue" disabled>
              Color
            </Option>
            {clrOptions}
          </Select>
          <Arrow />
        </Filter>

        <Filter className="filter">
          <NewIcon fontSize="small" />
          <Select
            defaultValue={"newest"}
            onChange={(e) => setSort(e.target.value)}
          >
            <Option value="newest">Newest</Option>
            <Option value="asc">Asc</Option>
            <Option value="desc">Desc</Option>
          </Select>
          <Arrow />
        </Filter>
      </Wrap>
      <Reset>
        <Button onClick={handleReset}>
          <RestartAltIcon fontSize="1.4rem" />
        </Button>
      </Reset>
    </FilterCont>
  );
};

export default FilterProduct;
