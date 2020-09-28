import React from "react";

import { css } from "@emotion/core";

const AppCss = css`
  padding: 32px;
  background-color: #d4f1f1;
  font-size: 24px;
  border-radius: 4px;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: hotpink;
    }
  }
`;

const App = () => (
  <div css={AppCss}>
    <h1>React + Express Starter Pack!</h1>
    <h3>
      A minimal (but still batteries included) React starter setup for building web apps that
      require a Node/Express backend
    </h3>
    <p>
      <a href="https://twitter.com/sunilsandhu">@sunilsandhu</a>
    </p>
  </div>
);

export default App;
