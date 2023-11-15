import { CategoriesContext } from "../contexts/categories.context";
import { useContext } from "react";
import CategoryPreview from "../components/category-preview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const porducts = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={porducts} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
