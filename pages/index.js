import { useEffect, useState } from "react";
import Head from "next/head";

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
      <Head>
        <title>
          React-progress-spinner | Does exactly what it says on the tin
        </title>
      </Head>

      <Container>
        <Card>
          <Spinner percentage={currentProgress} radius={120} thickness={15} />
          <Button
            className={isLoading ? "selected" : ""}
            onClick={() => setIsLoading(!isLoading)}
            aria-pressed={isLoading}
          >
            {isLoading ? "Stop" : "Start"}
          </Button>
        </Card>
        <Content>
          <h1>React Progress Spinner</h1>
          <ul>
            <li>
              <span>⚡️ Quick and easy to install</span>
              <p className="description">
                Import the component, add your progress as a percentage prop and
                you're set
              </p>
            </li>
            <li>
              <span>⚙️ Fully customisable</span>
              <p className="description">
                Hook into the styles in order to change any style value
              </p>
            </li>
            <li>
              <span>🏋️‍♀️ Dependency free and lightweight</span>
              <p className="description">Bundle size is just 8KB</p>
            </li>
          </ul>
        </Content>
      </Container>

      {/*
       * Global styles hooking into the Spinner component classNames
       * to allow custom styling
       */}
      <style jsx global>{`
        .react-progress-spinner-container {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
        }

        .react-progress-spinner-progress {
          stroke: #409fff; // Overwrites default color
        }

        body {
          margin: 0;
          padding: 0;
        }

        h1 {
          font-family: "Times New Roman", Times, serif;
        }

        span {
          font-weight: 500;
        }

        .description {
          margin-top: 5px;
        }

        ul {
          font-family: "Roboto", sans-serif;
          font-weight: 300;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          padding-bottom: 15px;
        }
      `}</style>
    </>
  );
};

export default Home;
