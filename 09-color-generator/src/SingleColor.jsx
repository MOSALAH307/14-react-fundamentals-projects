import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const copyHandler = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color hex copied to clipboard");
      } catch (error) {
        toast.error("could not copy hex");
      }
    } else {
      toast.error("clipboard is not available here");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      onClick={copyHandler}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
