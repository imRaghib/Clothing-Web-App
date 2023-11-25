import {
  CategoryItemContainer,
  CategoryItemBody,
  BackgroundImage,
} from "./category-item.styles";

import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const handleNavigate = () => navigate(route);
  return (
    <CategoryItemContainer onClick={handleNavigate}>
      <BackgroundImage imageurl={imageUrl} />
      <CategoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBody>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
