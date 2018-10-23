import * as React from "react";
import UrlBarInput from "./components/UrlBarInput";
import PageContent from "./components/PageContent";
// import { IReadabilityProps } from "./types/IReadabilityProps";
import { IAppState } from "./types/IAppState";
import { AppContainer } from "./components/AppContainer";
// const mercury = require("mercury-parser")(
//   "KEY_HERE"
// );
import { read } from "node-readability";

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

    // mercury
    //   .parse(this.state.inputValue)
    //   .then((response: IReadabilityProps) => {
    //     console.log(response);
    //     this.setState({
    //       title: response.title,
    //       url: response.url,
    //       author: response.author,
    //       content: response.content,
    //       datePublished: response.date_published,
    //       wordCount: response.word_count
    //     });
    //   })
    //   .catch((err: any) => {
    //     console.log("Error", err);
    //   });

    // WIP

    read(this.state.inputValue, (err: any, article: any, meta: any) => {
      // Content
      console.log(article.content);
      // Title
      console.log(article.title);

      // HTML Source Code
      console.log(article.html);
      // DOM
      console.log(article.document);

      // Response Object from Request Lib
      console.log(meta);

      // err
      console.log(err);

      this.setState({
        title: article.title,
        content: article.content
      });

      // Close article to clean up jsdom and prevent leaks
      article.close();
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
