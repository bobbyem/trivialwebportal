import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LatestHero from "../components/LatestHero";
import Logo from "../components/Logo";
import Stats from "../components/Stats";
import { getLatest } from "../features/questions/questionSlice";
export function Wellcome() {
  const { latest, stats } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!latest) {
      dispatch(getLatest());
    }
  }, [latest]);

  return (
    <section className="fade-in wellcome">
      <Stats />}
      <section>
        <Logo />
        <h1>Wellcome!</h1>
        <h4>Thank you for contributing to this project!</h4>
        <p>Right now we have {stats ? stats.numQuestions : null} questions</p>
      </section>
      <LatestHero question={latest} />
    </section>
  );
}
