import styled, { css } from "styled-components";

const sideShadows = css`
  box-shadow: 9px 0 15px -4px rgb(199 199 199 / 50%),
    -9px 0 8px -4px rgb(199 199 199 / 50%);
`;

const tail = css`
  &:after {
    content: "";
    position: absolute;
    content: "";
    bottom: -20px;
    /* left: 0; */
    /* width: 0; */
    height: 20px;
    /* background: red; */
    width: 100%;
    border-bottom: 1px solid darkblue;
    border-left: 1px solid darkblue;
    border-right: 1px solid darkblue;
    background: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    left: -1px;
    width: calc(100% + 2px);
  }
`;

const ColumnContent = styled.div<{ highlight: boolean; showTail?: boolean }>`
  margin-left: -1px;
  --borderColor: ${({ highlight, theme }) =>
    highlight ? "darkblue" : "lightgrey"};
  --borderBottomWidth: ${({ highlight, theme }) => (highlight ? 0 : 1)}px;
  /* --opacity: ${({ highlight, theme }) => (highlight ? "100%" : "80%")}; */
  --blur: ${({ highlight, theme }) => (highlight ? "none" : ".5px")};
  --radius: ${({ highlight, theme }) => (highlight ? "0px" : "3px")};
  /* --scale: ${({ highlight, theme }) => (highlight ? 1.015 : 1)}; */
  flex: auto;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  transform: scale(var(--scale));
  background: white;

  transition: transform 0.2s ease-in-out;
  /* opacity: ${({ highlight }) => (highlight ? 1 : 0.8)}; */
  z-index: ${({ highlight }) => (highlight ? 1 : 0)};
  ${({ highlight }) => highlight && sideShadows};
  filter: opacity(var(--opacity)) blur(var(--blur));
  /* border-left: 1px solid var(--borderColor); */
  /* border-right: 1px solid var(--borderColor); */
  border: 1px solid var(--borderColor);
  border-bottom-width: var(--borderBottomWidth);
  /* box-shadow: inset 0px 0px 0px 1px var(--borderColor); */
  /* outline: 1px solid var(--borderColor); */
  /* box-shadow: -1px 0px 0px var(--borderColor) inset; */
  position: relative;
  /* box-shadow: -1px 0px 0px 0px var(--borderColor), 1px 0px 0px 0px var(--borderColor); */
  /* outline: 1px solid var(--borderColor); */
  /* outline-offset: -1px; */
  ${({ showTail }) => showTail && tail}
`;

export default ColumnContent;
