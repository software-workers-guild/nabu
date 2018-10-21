import * as React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  margin: 0;
  display: block;
  border: 1px solid #000;
`;

const Wrapper = styled.div`
  position: fixed;
  padding: 15px 10px;
  border-bottom: 1px solid #000;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
`;

const Form = styled.form`
  display: flex;
`;

interface IUrlBarInput {
  onVisit: any;
  onInputChange: any;
  inputValue: string;
}

const UrlBarInput = ({ onVisit, inputValue, onInputChange }: IUrlBarInput) => (
  <Wrapper>
    <Form onSubmit={e => onVisit(e)}>
      <Input
        onChange={e => onInputChange(e)}
        placeholder="where to?"
        value={inputValue}
      />
    </Form>
  </Wrapper>
);

export default UrlBarInput;
