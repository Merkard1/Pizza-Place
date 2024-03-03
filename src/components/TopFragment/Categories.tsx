import { setCategoryId } from "@/redux/Filter/filterSlice";
import { useSelector, useDispatch } from "react-redux";

type Props = {};

const categoriesTypes: Array<string> = [
  "All",
  "Meat",
  "Vegetarian",
  "Grill",
  "Spicy",
  "Calzone",
];

export const Categories = ({}: Props) => {
  const categoryId = useSelector(
    (state: any) => state.filterReducer.categoryId
  );
  const dispatch = useDispatch();

  const onChangeCategory = (index: number) => {
    dispatch(setCategoryId(index));
  };

  return (
    <div className="categories">
      <ul>
        {categoriesTypes.map((categorie, index) => (
          <li
            className={categoryId == index ? "active" : ""}
            key={index}
            onClick={() => onChangeCategory(index)}
          >
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
};
