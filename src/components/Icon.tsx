

function Icon(props:any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
    style={{
        position:"fixed", 
        left:0, 
        bottom:0, 
        height: props.isLoading ? "90%": "50%", 
        zIndex: -1, 
        transition: "height 500ms ease"}}
    >
      <path
        fill="#f3f4f5"
        d="M0 96l24 32c24 32 72 96 120 96s96-64 144-106.7C336 75 384 53 432 48s96 5 144 5.3c48-.3 96-10.3 144 16C768 96 816 160 864 170.7c48 10.3 96-31.7 144-58.7 48-27 96-37 144-16s96 75 144 85.3c48 10.7 96-21.3 120-37.3l24-16v192H0z"
      ></path>
    </svg>
  );
}

export default Icon;