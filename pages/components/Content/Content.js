const Content = ({ children }) => (
  <>
    <div className="content">{children}</div>

    <style jsx>{`
      .content {
        margin: 0 20px;
        width: 315px;
      }
    `}</style>
  </>
);

export default Content;
