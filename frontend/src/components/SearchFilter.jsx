import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFiltered } from "../features/questions/questionSlice";

function SearchFilter() {
  const { questions } = useSelector((state) => state.questions);
  const [sorting, setSorting] = useState("oldest");
  const [filter, setFilter] = useState({ vetted: false, category: "" });
  const dispatch = useDispatch();

  //Filter the current questions - add to state
  useEffect(() => {
    let result = [];
    if (questions) {
      //Filter by category
      if (filter.category) {
        result = questions.filter(
          (question) => question.category === filter.category
        );
      }
      //Sort by created
      if (sorting === "oldest" && result.length > 0) {
        result = result.sort((a, b) => a.createdAt > b.createdAt);
      } else {
        result = result.sort((a, b) => a.createdAt < b.createdAt);
      }
    }
    if (result.length > 0) {
      dispatch(setFiltered(result));
    }
  }, [questions, sorting, filter]);
  return (
    <section className="search-filter">
      <h1>Filter Questions</h1>
      <section className="form">
        <div className="form-group">
          <label htmlFor="vetted">Vetted</label>
          <input
            type="checkbox"
            name="vetted"
            id="vetted"
            checked={filter.vetted}
            onChange={(e) => {
              setFilter({ ...filter, vetted: e.checked });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={filter.category}
            onChange={(e) => {
              setFilter({ ...filter, category: e.target.value });
            }}
          >
            <option value="">All</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">Javascript</option>
            <option value="framework">Framework</option>
            <option value="backend">Backend</option>
            <option value="history">History</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sorting">Sorting</label>
          <select
            name="sorting"
            id="sorting"
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
          >
            <option value="oldest">Oldest First</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </section>
    </section>
  );
}

export default SearchFilter;
