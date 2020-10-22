const Button = ({ children, ...props }) => (
  <>
    <button className="button" {...props}>
      {children}
    </button>

    <style jsx>{`
      .button {
        background: #409fff;
        border: 0;
        border-radius: 1.25em;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 1em;
        height: 2.5em;
        margin-top: 40px;
        outline: 0;
        font-weight: 500;
        font-family: -apple-system, \.SFNSText-Regular, San Francisco, Roboto,
          Segoe UI, Helvetica Neue, Lucida Grande, sans-serif;
        transition: background-color 0.2s cubic-bezier(0.77, 0, 0.175, 1),
          color 0.2s cubic-bezier(0.77, 0, 0.175, 1);
        width: 240px;
      }
    `}</style>
  </>
);

export default Button;
