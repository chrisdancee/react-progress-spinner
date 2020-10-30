const Main = ({ children }) => (
  <>
    <main className="container">{children}</main>

    <style jsx>{`
      .container {
        align-items: center;
        background-color: #eddaea;
        color: #161616;
        display: flex;
        flex-flow: row wrap;
        height: 100vh;
        justify-content: center;
        width: 100vw;
      }
    `}</style>
  </>
);

export default Main;
