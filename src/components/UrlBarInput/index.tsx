import * as React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 0;
  display: block;
`;

const UrlBarInput = () => (
  <div>
    <Input placeholder="where to?" />
  </div>
);

export default UrlBarInput;
