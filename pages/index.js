import { useEffect, useState } from "react";

import Spinner from "src";
import { Button, Card, Container, Content } from "./components";

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
          <Button
            className={isLoading ? "selected" : ""}
            onClick={() => setIsLoading(!isLoading)}
          >
            {isLoading ? "Stop" : "Start"}
          </Button>
        </Card>
        <Content>
          <h1>React Progress Spinner</h1>
          <ul>
            <li>
              ⚡️ Quick and easy to install - Import the component, add your
              progress as a percentage prop and you're set
            </li>
            <li>
              ⚙️ Fully customisable - Hook into the styles in order to change
              any style value
            </li>
          </ul>
        </Content>
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

        h1 {
          font-family: "Times New Roman", Times, serif;
          font-weight: 900;
        }

        ul {
          font-family: "Roboto", sans-serif;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          padding-bottom: 15px;
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
