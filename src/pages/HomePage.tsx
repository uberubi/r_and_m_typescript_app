import React, { useContext, useEffect } from "react";
import { IEpisodeProps } from "../interfaces";
import { Store } from "../context/Store";
import { toggleFavAction, fetchDataAction } from "../context/actions/Actions";

const EpisodesList = React.lazy<any>(
  () => import("../components/EpisodesList")
);

const HomePage = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </>
  );
};

export default HomePage;
