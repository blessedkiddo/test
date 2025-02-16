import styled from "styled-components";

styled("div")(({ theme }) => ({
  background: theme.colors.main,
}));

export const theme = {
  palette: {
    parimary: "red",
  },
};

console.log("lala");
