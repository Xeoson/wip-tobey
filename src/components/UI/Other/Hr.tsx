import s from "./Hr.module.scss";

interface HrProps {
  type?: "dashed";
  size?: "full";
  margin?: "md";
}

const Hr = ({ type, size, margin }: HrProps) => {
  return (
    <hr
      className={`${s.main} ${s[type ?? ""]} ${s[size ?? ""]} ${
        s['margin-' + margin]
      }`}
    ></hr>
  );
};

export default Hr;
