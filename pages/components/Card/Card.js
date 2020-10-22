const Card = ({ children }) => (
  <>
    <div className="card">{children}</div>

    <style jsx>{`
      .card {
        align-items: center;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1),
          0 10px 30px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        width: fit-content;
        padding: 30px;
      }
    `}</style>
  </>
);

export default Card;
