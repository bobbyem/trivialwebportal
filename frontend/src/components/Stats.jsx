import React from "react";

function Stats({ stats }) {
  const { categories, numQuestions } = stats;
  function calculate(a, b) {
    return Math.round((b / a) * 100);
  }
  if (stats) {
    return (
      <div className="stats">
        <ul>
          <li className="html">
            Html: {calculate(numQuestions, categories.html)}%
          </li>
          <li className="javascript">
            Javascript: {calculate(numQuestions, categories.javascript)}%
          </li>
          <li className="css">
            CSS: {calculate(numQuestions, categories.css)}%
          </li>
          <li className="framework">
            Framework: {calculate(numQuestions, categories.framework)}%
          </li>
          <li className="backend">
            Backend: {calculate(numQuestions, categories.backend)}%
          </li>
          <li className="history">
            History: {calculate(numQuestions, categories.history)}%
          </li>
        </ul>
        <hr />
      </div>
    );
  }
  return null;
}

export default Stats;
