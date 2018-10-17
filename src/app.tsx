import * as React from "react";
import UrlBarInput from "./components/UrlBarInput";
import ActiveUrlBar from "./components/ActiveUrlBar";
import PageContent from "./components/PageContent";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
`;

export class App extends React.Component<undefined, undefined> {
  private fetchUrl = () => {
    console.log("fetching url");
  };

  render() {
    return (
      <Container>
        <UrlBarInput />
        <ActiveUrlBar successfulFetch={true} url="example.com" />
        <PageContent />
      </Container>
    );
  }
}
