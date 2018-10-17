import * as React from "react";
import UrlBarInput from "./components/UrlBarInput";
import ActiveUrlBar from "./components/ActiveUrlBar";
import PageContent from "./components/PageContent";
import styled from "styled-components";
const mercury = require("mercury-parser")(
  "PB12LDArVRzLeMogouAolKnimhRDgQcCG1kHCPUy"
);

const Container = styled.div`
  padding: 10px;
`;

interface IMercuryResponse {
  title: string;
  author: string;
  date_published: string;
  dek: string;
  lead_image_url: string;
  content: string;
  next_page_url: string;
  url: string;
  domain: string;
  excerpt: string;
  word_count: number | null | undefined;
  direction: string;
  total_pages: number;
  rendered_pages: number;
}

interface AppState {
  title?: string;
  author?: string;
  content?: string;
  datePublished?: string;
  url?: string;
  wordCount?: number | null | undefined;
  inputValue?: string;
}

export class App extends React.Component<{}, AppState> {
  state = {
    title: "",
    author: "",
    content: "",
    datePublished: "",
    url: "",
    wordCount: null,
    inputValue: ""
  };
  private fetchUrl = () => {
    console.log("fetching url");

    mercury
      .parse(this.state.inputValue)
      .then((response: IMercuryResponse) => {
        console.log(response);
        this.setState({
          title: response.title,
          url: response.url,
          author: response.author,
          content: response.content,
          datePublished: response.date_published,
          wordCount: response.word_count
        });
      })
      .catch((err: any) => {
        console.log("Error", err);
      });
  };

  private onInputChange = (e: any) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    const {
      title,
      author,
      content,
      datePublished,
      url,
      wordCount
    } = this.state;
    return (
      <Container>
        <UrlBarInput
          onInputChange={this.onInputChange}
          onVisit={this.fetchUrl}
          inputValue={this.state.inputValue}
        />
        <ActiveUrlBar successfulFetch={true} url={url} />
        <PageContent
          title={title}
          author={author}
          content={content}
          datePublished={datePublished}
          url={url}
          wordCount={wordCount}
        />
      </Container>
    );
  }
}
