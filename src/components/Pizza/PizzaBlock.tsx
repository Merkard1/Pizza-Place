import { Selectors, Types } from "./BottomPart";

import { FC, useState } from "react";

type Props = {
  pizza: {
    id: number;
    imageUrl: string;
    title: string;
    types: string[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
  };
};

export const PizzaBlock: FC<Props> = ({ pizza }) => {
  const { id, title, imageUrl, types, sizes } = pizza;

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <Selectors
          types={types}
          sizes={sizes}
          id={id}
          activeType={activeType}
          activeSize={activeSize}
          setActiveType={setActiveType}
          setActiveSize={setActiveSize}
        />
        <Types pizza={pizza} activeType={activeType} activeSize={activeSize} />
      </div>
    </div>
  );
};
