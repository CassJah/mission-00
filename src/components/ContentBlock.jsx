import React from "react";
import "./ContentBlock.css";

const ContentBlock = ({ title, children }) => (
  <section className="content-block">
    <h2 className="content-title lato-bold">{title}</h2>
    <div className="content-body">{children}</div>
  </section>
);

export default ContentBlock;
