import * as React from "react";
import UrlBarInput from "./components/UrlBarInput";
import PageContent from "./components/PageContent";
import { IReadabilityProps } from "./types/IReadabilityProps";
import { IAppState } from "./types/IAppState";
import { AppContainer } from "./components/AppContainer";
// its okay
// we are going to swap this
// for node-readability,
// just chill
const mercury = require("mercury-parser")(
  "PB12LDArVRzLeMogouAolKnimhRDgQcCG1kHCPUy"
);

export class App extends React.Component<{}, IAppState> {
  state = {
    title: "",
    author: "",
    content: "",
    datePublished: "",
    url: "",
    wordCount: null,
    inputValue: ""
  };
  private fetchUrl = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mercury
      .parse(this.state.inputValue)
      .then((response: IReadabilityProps) => {
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

  private onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      inputValue: e.currentTarget.value
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
      <AppContainer>
        <UrlBarInput
          onInputChange={this.onInputChange}
          onVisit={this.fetchUrl}
          inputValue={this.state.inputValue}
        />
        <PageContent
          title={title}
          author={author}
          content={content}
          datePublished={datePublished}
          url={url}
          wordCount={wordCount}
        />
      </AppContainer>
    );
  }
}
