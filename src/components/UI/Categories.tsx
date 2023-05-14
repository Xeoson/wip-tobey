import { GoSettings } from "react-icons/go";
import Button from "./Buttons/Button";
import CategoriesCarousel from "./Carousels/CategoriesCarousel";
import s from "./Categories.module.scss";
import Hr from "./Other/Hr";

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
  return (
    <div className={s.main}>
      <Button icon={<GoSettings />} />
      <CategoriesCarousel />
    </div>
  );
};

export default Categories;
