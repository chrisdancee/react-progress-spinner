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

      {/*
       * Global styles hooking into the Spinner component classNames
       * to allow custom styling
       */}
      <style jsx global>{`
        .react-progress-spinner-container {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Home;
