import React from "react";

function LatestHero(props) {
  const { question } = props;
  const content = question ? (
    <h3>
      <span className="back-and-forth">👉</span>
      Latest question was about "{question.category.toUpperCase()}" and was
      written by {question.author.name} 😍👍
    </h3>
  ) : null;
  return <div className="latest-hero">{question ? content : null}</div>;
}

export default LatestHero;
