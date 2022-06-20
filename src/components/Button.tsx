function Button(props: any) {
    if (props.type === "primary")
      return (
        <div
          className="btn btn-primary"
          onClick={props.click ? props.click : null}
          data-testid="button"
        >
          {props.text}
        </div>
      );
    else
      return (
        <div
          className="btn btn-secondary me-3 ms-2"
          onClick={props.click ? props.click : null}
          data-testid="button"
        >
          {props.text}
        </div>
      );
  }
  
  export default Button;