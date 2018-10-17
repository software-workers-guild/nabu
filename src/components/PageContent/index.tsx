import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #000;
`;

interface IPageContent {
  title: string;
  author: string;
  content?: string;
  datePublished: string;
  url: string;
  wordCount?: number | null | undefined;
}

const PageContent = ({
  title,
  author,
  content,
  datePublished,
  url,
  wordCount
}: IPageContent) => (
  <Wrapper>
    <h1>{title}</h1>
    <h2>{author}</h2>
    <h3>{datePublished}</h3>
    <h3>{url}</h3>
    <h3>{wordCount}</h3>
    {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
  </Wrapper>
);

export default PageContent;
