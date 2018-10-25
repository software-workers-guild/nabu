import * as React from "react";
import { Content, Wrapper } from "./styles";
import { IPageContentProps } from "./types";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";

const options = (fetchLink: any) => ({
  decodeEntities: true,
  transform: function transform(node: any, index: any) {
    if (node.type === "tag" && node.name === "a") {
      node.name = "span";

      return (
        <span
          key={index}
          className="nabu-link"
          onClick={() => fetchLink(node.attribs.href)}
        >
          {convertNodeToElement(node, index, transform)}
        </span>
      );
    }
    return;
  }
});

const PageContent = ({
  title,
  author,
  datePublished,
  wordCount,
  content,
  fetchLink
}: IPageContentProps) => (
  <Wrapper>
    <h1>{title}</h1>
    <h2>{author}</h2>
    <h3>{datePublished}</h3>

    {wordCount && (
      <h3>
        {wordCount} {wordCount > 1 ? "words" : "word"}
      </h3>
    )}
    {content && (
      <Content>{ReactHtmlParser(content, options(fetchLink))}</Content>
    )}
  </Wrapper>
);

export default PageContent;
