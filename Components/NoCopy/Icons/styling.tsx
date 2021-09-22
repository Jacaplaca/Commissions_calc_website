import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import { cloneElement, FunctionComponent } from "react";
import { LoadingOutlined, CheckOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useTheme } from "styled-components";

// const useStyles = makeStyles(theme => ({
//   removeRow__icon: {
//     fontSize: "0.8em",
//     color: theme.palette.antBlue.main,
//   },
// }));

const CompStyled = styled(({ component, ...props }) => cloneElement(component, props))`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.antBlue.main};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const SmallPrimaryIcon: FunctionComponent = ({ Comp, loading = false, disabled }) => {
  const theme = useTheme();
  // const CompStyled = styled(Comp)`
  //   font-size: 0.8em;
  //   color: ${({ theme }) => theme.colors.antBlue.main};
  //   opacity: ${({}) => (disabled ? 0.5 : 1)};
  // `;
  const loadingIcon = <LoadingOutlined style={{ fontSize: 20, color: theme.colors.antBlue.main }} spin />;
  // const classes = useStyles();
  return loading ? <Spin indicator={loadingIcon} /> : <CompStyled disabled={disabled} component={<Comp />} />;
};
