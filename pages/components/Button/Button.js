const Button = ({ children, className, ...props }) => (
  <>
    <button className={`${className} button`} {...props}>
      {children}
    </button>

    <style jsx>{`
      .button {
        background: #409fff;
        border-radius: 1.25em;
        border: 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system, \.SFNSText-Regular, San Francisco, Roboto,
          Segoe UI, Helvetica Neue, Lucida Grande, sans-serif;
        font-size: 1em;
        font-weight: 500;
        height: 2.5em;
        margin-top: 40px;
        outline: 0;
        transition: background-color 0.2s cubic-bezier(0.77, 0, 0.175, 1),
          color 0.2s cubic-bezier(0.77, 0, 0.175, 1);
        width: 240px;
      }

      .selected {
        background: #f9d37a;
        color: #161616;
      }
    `}</style>
  </>
);

export default Button;
