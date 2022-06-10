import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFiltered } from "../features/questions/questionSlice";

function SearchFilter() {
  const { questions } = useSelector((state) => state.questions);
  const [sorting, setSorting] = useState("oldest");
  const [filter, setFilter] = useState({ vetted: "", category: "" });
  const dispatch = useDispatch();

  //Filter the current questions - add to global state filtered
  useEffect(() => {
    let result = [];
    if (questions) {
      if (filter.category === "") {
        result = [...questions];
      }
      //Filter by category
      else {
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
      //Sort by vetted
      if (filter.vetted === "true") {
        result = result.filter((question) => question.vetted === true);
      } else if (filter.vetted === "false") {
        result = result.filter((question) => question.vetted === false);
      }
    }
    //Set result in global state
    dispatch(setFiltered(result));
  }, [questions, sorting, filter]);

  return (
    <section className="search-filter">
      <h1>Filter Questions</h1>
      <section className="form">
        <div className="form-group">
          <label htmlFor="vetted">Vetted</label>
          <select
            name="vetted"
            id="vetted"
            value={filter.vetted}
            onChange={(e) => {
              setFilter({ ...filter, vetted: e.target.value });
            }}
          >
            <option value={""}>All</option>
            <option value={true}>Vetted</option>
            <option value={false}>Not Vetted</option>
          </select>
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
