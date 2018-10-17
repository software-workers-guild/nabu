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
  onInputChange: any;
  inputValue: string;
}

const UrlBarInput = ({ onVisit, inputValue, onInputChange }: IUrlBarInput) => (
  <Wrapper>
    <Input
      onChange={e => onInputChange(e)}
      placeholder="where to?"
      value={inputValue}
    />
    <Button onClick={onVisit}>☞</Button>
  </Wrapper>
);

export default UrlBarInput;
