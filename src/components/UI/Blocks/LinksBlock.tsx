import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IProfileSettingItem } from "../../../types";
import s from "./LinksBlock.module.scss";

interface LinksBlockProps {
  title: string;
  items: IProfileSettingItem[];
}

const LinksBlock = ({ items, title }: LinksBlockProps) => {
  return (
    <div className={s.main}>
      <h4 className={s.title}>{title}</h4>
      <ul className={s.list}>
        {items.map((el) => (
          <li className={s.item}>
            <Link to={el.url}>
              {el.icon}
              <span>{el.title}</span>
              <AiOutlineRight className={s.arrow} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksBlock;
