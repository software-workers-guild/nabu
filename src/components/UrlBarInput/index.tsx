import * as React from "react";
import {
  Wrapper,
  Form,
  Input,
  BackButton,
  ForwardButton,
  SettingsButton
} from "./styles";
import { IUrlBarInputProps } from "./types";

const UrlBarInput = ({
  onVisit,
  inputValue,
  onInputChange
}: IUrlBarInputProps) => (
  <Wrapper>
    <div>
      <BackButton>←</BackButton>
      <ForwardButton>→</ForwardButton>
    </div>
    <Form onSubmit={e => onVisit(e)}>
      <Input
        onChange={e => onInputChange(e)}
        placeholder="where to?"
        value={inputValue}
      />
    </Form>
    <SettingsButton>Aa</SettingsButton>
  </Wrapper>
);

export default UrlBarInput;
