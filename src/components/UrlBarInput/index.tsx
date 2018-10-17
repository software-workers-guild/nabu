import * as React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 0;
  display: block;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  flex-basis: 40px;
  font-size: 20px;
`;

interface IUrlBarInput {
  onVisit: () => void;
}

const UrlBarInput = ({ onVisit }: IUrlBarInput) => (
  <Wrapper>
    <Input placeholder="where to?" />
    <Button onClick={onVisit}>☞</Button>
  </Wrapper>
);

export default UrlBarInput;
