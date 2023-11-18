import {
  CategoryItemContainer,
  CategoryItemBody,
  BackgroundImage,
} from "./category-item.styles";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryItemBody>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
