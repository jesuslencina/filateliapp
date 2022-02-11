import Img from "react-cool-img";

const Stamp = ({ src, name, extraStyle }) => (
  <Img src={src} alt={name} className="stamp" style={extraStyle} />
);

export default Stamp;
