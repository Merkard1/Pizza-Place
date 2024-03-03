import { useEffect } from "react";
import { setCategoryId, setSortId } from "@/redux/Filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { PizzaSkeleton } from "./PizzaSkeleton";
import { PizzaBlock } from "./PizzaBlock";
import { fetchPizzas } from "@/redux/Pizza/pizzaSlice";

type Props = {};

export const AllPizzas = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = new URLSearchParams(location.search);
  const sortParams: string = params.get("sortProperty") || "rating";
  const categoryParams: number = Number(params.get("categoryId")) || 0;

  const sortProperty = useSelector((state: any) => state.filterReducer.sort);
  const categoryId = useSelector(
    (state: any) => state.filterReducer.categoryId
  );

  const { items, isLoading } = useSelector((state: any) => state.pizzaReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (sortProperty === "rating" && categoryId === 0) {
      navigate("/");
    } else {
      navigate(`?sortProperty=${sortProperty}&categoryId=${categoryId}`);
    }
  }, [sortProperty, categoryId]);

  useEffect(() => {
    dispatch(setSortId(sortParams));
    dispatch(setCategoryId(categoryParams));
    // @ts-ignore
    dispatch(fetchPizzas({ categoryParams, sortParams }));
  }, [dispatch, sortParams, categoryParams]);

  return (
    <div className="content__items">
      {isLoading &&
        [...Array(10)].map((_, index) => <PizzaSkeleton key={index} />)}
      {items.map((pizza: any, index: number) => (
        <PizzaBlock key={index} pizza={pizza} />
      ))}
    </div>
  );
};
