import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LatestHero from "../components/LatestHero";
import Logo from "../components/Logo";
import { getLatest } from "../features/questions/questionSlice";
export function Welcome() {
  const { latest, stats } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!latest) {
      dispatch(getLatest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latest]);

  return (
    <section className="fade-in welcome">
      <section>
        <Logo className="spin-periodical" />
        <h1>Welcome!</h1>
        <h4>Thank you for contributing to this project!</h4>
        <p>Right now we have {stats ? stats.numQuestions : null} questions</p>
      </section>
      <LatestHero question={latest} />
    </section>
  );
}
