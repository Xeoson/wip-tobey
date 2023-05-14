import { ICategory } from "../types/model";
import phoneImg from "./phone.webp";

const categories = [
  "Camera",
  "Audio",
  "Computers",
  "Phone",
  "Camera",
  "Audio",
  "Computers",
  "Phone",
  "Camera",
  "Audio",
  "Computers",
  "Phone",
].map((el) => ({ title: el, preview: phoneImg } as ICategory));

export default categories;
