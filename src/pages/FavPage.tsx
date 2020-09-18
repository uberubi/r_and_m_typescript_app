import React, { useContext } from "react";
import { Store } from "../context/Store";
import { toggleFavAction } from "../context/actions/Actions";
import { IEpisodeProps } from "../interfaces";

const EpisodesList = React.lazy<any>(
  () => import("../components/EpisodesList")
);
const FavPage = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  );
};

export default FavPage;
