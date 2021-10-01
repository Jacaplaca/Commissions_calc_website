import styled from "styled-components";
import { Slider } from "@mui/material";
import { FunctionComponent } from "react";

const SliderStyled = styled(Slider)`
  --background: ${(p) => p.theme.colors.palette.pricing.dark};
  color: var(--background) !important;
  height: 10px !important;
  .MuiSlider-markLabel {
    font-weight: 600;
    color: ${(p) => p.theme.colors.text.midDarkBlue};
  }
  .MuiSlider-thumb {
    height: 26px;
    width: 26px;
  }
  .MuiSlider-rail {
    opacity: 0.3;
  }
  .MuiSlider-valueLabel {
    background-color: var(--background) !important;
    font-size: 1.2em;
    border-radius: 6px;
    top: -17px;
    :before {
      border-radius: 2px;
      height: 14px;
      width: 14px;
      bottom: 1px;
    }
  }
`;

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 100,
    label: "100+",
  },
];

type Props = {
  value: number;
  max: number;
  onChange: (
    event: Event,
    value: number | Array<number>,
    activeThumb: number
  ) => void;
};

const EmployeesSlider: FunctionComponent<Props> = ({
  value,
  max,
  onChange,
}) => {
  return (
    <SliderStyled
      aria-label="Always visible"
      // defaultValue={0}
      value={value}
      // getAriaValueText={(n) => "asdf"}
      max={max}
      onChange={onChange}
      marks={marks}
      valueLabelDisplay="on"
      step={5}
    />
  );
};

export default EmployeesSlider;