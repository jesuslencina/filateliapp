import Img from "react-cool-img";

const Stamp = ({ id, src, name }) => (
  <Img
    src={src}
    alt={name}
    className="stamp"
    style={{ animationDelay: `${id * 0.1}s` }}
    lazy
  />
);

export default Stamp;
