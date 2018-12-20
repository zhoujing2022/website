import React from "react";
import styled from "styled-components";
import Highlight from "react-highlight";
import colors from "../../config/colors";

const MarkdownContent = styled.div`
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  line-height: 1.5;
  color: ${colors.gray};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  line-height: 1.8;
  word-wrap: break-word;

  .pl-c {
    color: #6a737d;
  }

  .pl-c1,
  .pl-s .pl-v {
    color: #005cc5;
  }

  .pl-e,
  .pl-en {
    color: #6f42c1;
  }

  .pl-smi,
  .pl-s .pl-s1 {
    color: ${colors.gray};
  }

  .pl-ent {
    color: #22863a;
  }

  .pl-k {
    color: #d73a49;
  }

  .pl-s,
  .pl-pds,
  .pl-s .pl-pse .pl-s1,
  .pl-sr,
  .pl-sr .pl-cce,
  .pl-sr .pl-sre,
  .pl-sr .pl-sra {
    color: #032f62;
  }

  .pl-v,
  .pl-smw {
    color: #e36209;
  }

  .pl-bu {
    color: #b31d28;
  }

  .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .pl-c2::before {
    content: "^M";
  }

  .pl-sr .pl-cce {
    font-weight: bold;
    color: #22863a;
  }

  .pl-ml {
    color: #735c0f;
  }

  .pl-mh,
  .pl-mh .pl-en,
  .pl-ms {
    font-weight: bold;
    color: #005cc5;
  }

  .pl-mi {
    font-style: italic;
    color: ${colors.gray};
  }

  .pl-mb {
    font-weight: bold;
    color: ${colors.gray};
  }

  .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
  }

  .pl-mc {
    color: #e36209;
    background-color: #ffebda;
  }

  .pl-mi2 {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .pl-mdr {
    font-weight: bold;
    color: #6f42c1;
  }

  .pl-ba {
    color: #586069;
  }

  .pl-sg {
    color: #959da5;
  }

  .pl-corl {
    text-decoration: underline;
    color: #032f62;
  }

  .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
  }

  a {
    background-color: transparent;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  strong {
    font-weight: inherit;
  }

  strong {
    font-weight: bolder;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  img {
    border-style: none;
  }

  code,
  kbd,
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  input {
    font: inherit;
    margin: 0;
  }

  input {
    overflow: visible;
  }

  [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  a {
    color: ${colors.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    strong {
      font-weight: 600;
    }
  }

  hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
  }

  hr::before {
    display: table;
    content: "";
  }

  hr::after {
    display: table;
    clear: both;
    content: "";
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    color: ${colors.gray};
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
  }

  h6 {
    font-size: 12px;
    font-weight: 600;
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  blockquote {
    margin: 0;
  }

  ul {
    list-style-type: disc;
  }

  ul,
  ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    font-size: 12px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    font-size: 12px;
  }

  .octicon {
    vertical-align: text-bottom;
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .pl-1 {
    padding-left: 4px !important;
  }

  .pl-2 {
    padding-left: 8px !important;
  }

  .pl-3 {
    padding-left: 16px !important;
  }

  .pl-4 {
    padding-left: 24px !important;
  }

  .pl-5 {
    padding-left: 32px !important;
  }

  .pl-6 {
    padding-left: 40px !important;
  }

  :before {
    display: table;
    content: "";
  }

  :after {
    display: table;
    clear: both;
    content: "";
  }

  *:first-child {
    margin-top: 0 !important;
  }

  *:last-child {
    margin-bottom: 0 !important;
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .anchor:focus {
    outline: none;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre {
    margin-top: 0;
    margin-bottom: 16px;
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 .octicon-link,
  h2 .octicon-link,
  h3 .octicon-link,
  h4 .octicon-link,
  h5 .octicon-link,
  h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    text-decoration: none;
  }

  h1:hover .anchor .octicon-link,
  h2:hover .anchor .octicon-link,
  h3:hover .anchor .octicon-link,
  h4:hover .anchor .octicon-link,
  h5:hover .anchor .octicon-link,
  h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  h1 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
  }

  h2 {
    padding-bottom: 0.3em;
    font-size: 1.2em;
  }

  h3 {
    font-size: 1em;
  }

  h4 {
    font-size: 0.875em;
  }

  h5 {
    font-size: 0.85em;
  }

  h6 {
    font-size: 0.825em;
    color: #6a737d;
  }

  ul,
  ol {
    padding-left: 2em;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    word-wrap: break-all;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  table th {
    font-weight: 600;
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
  }

  img[align="right"] {
    padding-left: 20px;
  }

  img[align="left"] {
    padding-right: 20px;
  }

  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }

  pre {
    word-wrap: normal;
  }

  pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .highlight {
    margin-bottom: 16px;
  }

  .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .highlight pre,
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #fafafa;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
  }

  pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #d1d5da;
    border-bottom-color: #c6cbd1;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #c6cbd1;
  }

  :checked + .radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }

  hr {
    border-bottom-color: #eee;
  }

  /* Atom One Light by Daniel Gamage */

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #383a42;
    background: #fafafa;
  }

  .hljs-comment,
  .hljs-quote {
    color: #a0a1a7;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #a626a4;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e45649;
  }

  .hljs-literal {
    color: #0184bb;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #50a14f;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #c18401;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #986801;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #4078f2;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }
`;

const MDContent = ({ html }) => {
  return (
    <MarkdownContent>
      <Highlight innerHTML={true}>{html}</Highlight>
    </MarkdownContent>
  );
};

export default MDContent;
