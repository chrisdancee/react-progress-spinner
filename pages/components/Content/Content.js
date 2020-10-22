const Content = ({ children }) => (
  <>
    <div className="content">{children}</div>

    <style jsx>{`
      .content {
        margin-left: 50px;
        width: 315px;
      }
    `}</style>
  </>
);

export default Content;
