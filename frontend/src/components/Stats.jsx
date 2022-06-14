import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../features/questions/questionSlice";

function Stats() {
  const { stats } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!stats) {
      dispatch(getStats());
    }
  }, [stats]);

  //Function to calculate percentage
  function calculate(a, b) {
    return Math.round((b / a) * 100);
  }
  if (stats) {
    return (
      <div className="stats">
        <ul>
          <li className="html">
            Html: {calculate(stats.numQuestions, stats.categories.html)}%
          </li>
          <li className="javascript">
            Javascript:{" "}
            {calculate(stats.numQuestions, stats.categories.javascript)}%
          </li>
          <li className="css">
            CSS: {calculate(stats.numQuestions, stats.categories.css)}%
          </li>
          <li className="framework">
            Framework:{" "}
            {calculate(stats.numQuestions, stats.categories.framework)}%
          </li>
          <li className="backend">
            Backend: {calculate(stats.numQuestions, stats.categories.backend)}%
          </li>
          <li className="history">
            History: {calculate(stats.numQuestions, stats.categories.history)}%
          </li>
        </ul>
        <hr />
      </div>
    );
  }
  return null;
}

export default Stats;
