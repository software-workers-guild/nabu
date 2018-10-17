import * as React from "react";
import styled from "styled-components";

interface WrapperProps {
  successColor: boolean;
}

const Wrapper = styled.div`
  background-color: ${(props: WrapperProps) =>
    props.successColor ? "#74cc6b" : "#ff496c"};
`;

interface ActiveUrlBarProps {
  successfulFetch: boolean;
  url: string;
}

const ActiveUrlBar = ({ successfulFetch, url }: ActiveUrlBarProps) => (
  <Wrapper successColor={successfulFetch}>
    <p>{successfulFetch ? `Viewing ${url}` : `Error accessing ${url}`}</p>
  </Wrapper>
);

export default ActiveUrlBar;
