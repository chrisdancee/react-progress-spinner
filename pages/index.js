import { useEffect, useState } from "react";

import Spinner from "src";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        const newProgress = currentProgress === 100 ? 0 : currentProgress + 1;
        setCurrentProgress(newProgress);
      }, 100);
    }
  }, [isLoading, currentProgress]);

  return (
    <>
      <Spinner percentage={currentProgress} />
      <button onClick={() => setIsLoading(!isLoading)}>Start/Stop</button>
    </>
  );
};

export default Home;
