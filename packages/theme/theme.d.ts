import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      primary: string;
      positive: string;
      negative: string;
    };
  }
}
