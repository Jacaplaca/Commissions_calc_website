import styled from "styled-components";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import antdBreakpoints from "../../themes/antdBreakpoints";

const SignUpButtonStyled = styled.button`
  @media ${antdBreakpoints.smMax} {
    /* width: auto; */
    padding: 6px;
    margin: 0 15px;
    font-size: 1em;
  }
  outline: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.palette.red.main};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: white;
  border: 0px solid transparent;
  padding: 12px 20px;
  font-size: 1.23em;
  font-weight: 500;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 0.8)};
  transition: opacity 0.2s linear;
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  }
`;

const SignUpButton: FunctionComponent<{ isFree: boolean; disabled?: boolean }> =
  ({ isFree, disabled }) => {
    const { t } = useTranslation("common");

    return (
      <SignUpButtonStyled disabled={disabled}>
        {isFree ? t("signUpFree") : t("startFreeTrial")}
      </SignUpButtonStyled>
    );
  };
export default SignUpButton;
