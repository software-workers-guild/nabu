import * as React from "react";
import { Wrapper, Form, Input } from "./styles";
import { IUrlBarInputProps } from "./types";

const UrlBarInput = ({
  onVisit,
  inputValue,
  onInputChange
}: IUrlBarInputProps) => (
  <Wrapper>
    <div>
      <button id="back-button">←</button>
      <button id="forward-button">→</button>
    </div>
    <Form onSubmit={e => onVisit(e)}>
      <Input
        onChange={e => onInputChange(e)}
        placeholder="where to?"
        value={inputValue}
      />
    </Form>
    <button id="settings-button">Aa</button>
  </Wrapper>
);

export default UrlBarInput;
