type Props = {
  id: number;
  types: string[];
  sizes: number[];
  setActiveType: any;
  setActiveSize: any;
  activeSize: any;
  activeType: any;
};

export const Selectors = ({
  types,
  sizes,
  setActiveType,
  setActiveSize,
  activeSize,
  activeType,
}: Props) => {
  return (
    <div className="pizza-block__selector">
      <ul>
        {types.map((size: string | number, index: number) => (
          <li
            key={index}
            className={activeType === index ? "active" : ""}
            onClick={() => setActiveType(index)}
          >
            {size}
          </li>
        ))}
      </ul>
      <ul>
        {sizes.map((size: string | number, index: number) => (
          <li
            key={index}
            className={activeSize === index ? "active" : ""}
            onClick={() => setActiveSize(index)}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
};
