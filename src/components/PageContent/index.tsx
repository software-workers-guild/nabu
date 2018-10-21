import * as React from "react";
import { Content, Wrapper } from "./styles";

interface IPageContent {
  title: string;
  author: string;
  content?: string;
  datePublished: string;
  url: string;
  wordCount?: number | null | undefined;
}

class PageContent extends React.Component<IPageContent, {}> {
  render() {
    const {
      title,
      author,
      datePublished,
      url,
      wordCount,
      content
    } = this.props;
    return (
      <Wrapper>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h3>{datePublished}</h3>
        <h3>{url}</h3>
        <h3>{wordCount} {wordCount == 1 ? "word" : "words"}</h3>
        {content && <Content dangerouslySetInnerHTML={{ __html: content }} />}
      </Wrapper>
    );
  }
}

export default PageContent;
