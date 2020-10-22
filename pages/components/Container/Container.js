const Container = ({ children }) => (
  <>
    <div className="container">{children}</div>

    <style jsx>{`
      .container {
        align-items: center;
        background-color: #eddaea;
        color: #161616;
        display: flex;
        height: 100vh;
        justify-content: center;
        width: 100vw;
      }
    `}</style>
  </>
);

export default Container;
