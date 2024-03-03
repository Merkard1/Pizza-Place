import ContentLoader from "react-content-loader";

export const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="145" cy="130" r="125" />
    <rect x="0" y="270" rx="5" ry="10" width="280" height="25" />
    <rect x="0" y="315" rx="5" ry="10" width="280" height="88" />
    <rect x="0" y="430" rx="5" ry="10" width="95" height="30" />
    <rect x="125" y="420" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);
