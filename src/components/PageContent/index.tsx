import * as React from "react";
import { Content, Wrapper } from "./styles";
import { IPageContentProps } from "./types";

/**
 * keeping as a class because
 * might need to do some manipulation
 * when rendering
 */
class PageContent extends React.Component<IPageContentProps, {}> {
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
        {wordCount && (
          <h3>
            {wordCount} {wordCount > 1 ? "words" : "word"}
          </h3>
        )}
        {content && <Content dangerouslySetInnerHTML={{ __html: content }} />}
      </Wrapper>
    );
  }
}

export default PageContent;
