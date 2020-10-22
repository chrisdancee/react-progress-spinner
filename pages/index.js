import { useEffect, useState } from "react";

import Spinner from "src";
import { Button, Card, Container } from "./components";

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
      <Container>
        <Card>
          <Spinner percentage={currentProgress} radius={120} thickness={15} />
          <Button onClick={() => setIsLoading(!isLoading)}>Start/Stop</Button>
        </Card>
      </Container>

      {/*
       * Global styles hooking into the Spinner component classNames
       * to allow custom styling
       */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }

        .react-progress-spinner-container {
          font-family: "Roboto", sans-serif;
        }

        .react-progress-spinner-progress {
          stroke: #409fff; // Overwrites default color
        }
      `}</style>
    </>
  );
};

export default Home;
