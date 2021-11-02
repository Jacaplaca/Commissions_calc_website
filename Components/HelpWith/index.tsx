import styled from "styled-components";
import { FunctionComponent } from "react";
import Steps from "../Steps";
import antdBreakpoints from "../../themes/antdBreakpoints";

type Props = {};

const Wrapper = styled.section`
  /* display: flex; */
  @media ${antdBreakpoints.lgMax} {
    padding: 0 25px;
  }
  h2 {
    font-weight: 600;
    ${({ theme }) => theme.colors.text.dark};
  }
`;

const steps = [
  {
    number: 1,
    title: "Pkjasd lksjj",
    description:
      "asdfa hdfkjsdhfklsjdhf asdkfjasdlkf asldkjfasldkjfa kdfjalskdjfl aksdjfaksdjf",
  },
  {
    number: 2,
    title: "Ssdfsdd sdfdf",
    description:
      "asdfa hdfkjsdhfklsjdhf asdkfjasdlkf asldkjfasldkjfa kdfjalskdjfl aksdjfaksdjf",
  },
  {
    number: 3,
    title: "Hsdl asldkdj ldkd",
    description:
      "asdfa hdfkjsdhfklsjdhf asdkfjasdlkf asldkjfasldkjfa kdfjalskdjfl aksdjfaksdjf",
  },
];

const HelpWith: FunctionComponent<Props> = ({}) => {
  return (
    <Wrapper>
      <h2>sakdlfj</h2>
      <Steps steps={steps} />
    </Wrapper>
  );
};

export default HelpWith;
