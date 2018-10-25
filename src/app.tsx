import * as React from "react";
import UrlBarInput from "./components/UrlBarInput";
import PageContent from "./components/PageContent";
import { IAppState } from "./types/IAppState";
import { AppContainer } from "./components/AppContainer";
import { read } from "node-readability";

export class App extends React.Component<{}, IAppState> {
  state = {
    title: "",
    author: "",
    content: "",
    datePublished: "",
    wordCount: null,
    inputValue: ""
  };

  private fetchLink = (url: string) => {
    read(url, (err: any, article: any, meta: any) => {
      this.setState({
        title: article.title,
        content: article.content,
        inputValue: url
      });

      article.close();
    });
  };

  private fetchUrl = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    read(this.state.inputValue, (err: any, article: any, meta: any) => {
      this.setState({
        title: article.title,
        content: article.content
      });

      article.close();
    });
  };

  private onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      inputValue: e.currentTarget.value
    });
  };

  render() {
    const { title, author, content, datePublished, wordCount } = this.state;

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
          wordCount={wordCount}
          fetchLink={this.fetchLink}
        />
      </AppContainer>
    );
  }
}
