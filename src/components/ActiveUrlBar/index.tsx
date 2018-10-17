import * as React from "react";
import styled from "styled-components";

interface WrapperProps {
  successColor: boolean;
}

const Wrapper = styled.div`
  background-color: ${(props: WrapperProps) =>
    props.successColor ? "#74cc6b" : "#ff496c"};
`;

const Text = styled.p`
  color: #fff;
`;

interface ActiveUrlBarProps {
  successfulFetch: boolean;
  url: string;
}

const ActiveUrlBar = ({ successfulFetch, url }: ActiveUrlBarProps) => (
  <Wrapper successColor={successfulFetch}>
    <Text>{successfulFetch ? `Viewing ${url}` : `Error accessing ${url}`}</Text>
  </Wrapper>
);

export default ActiveUrlBar;
