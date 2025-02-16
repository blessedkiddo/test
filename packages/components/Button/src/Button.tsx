import { theme } from "@supremes-ui/theme";
import styled from "styled-components";

const Styled = styled("div")(({ theme }) => ({
  background: theme.borderRadius,
}));

export const Button = () => {
  return <div>Button</div>;
};
