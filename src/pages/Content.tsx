import { TopContent, AllPizzas } from "@/components";

export const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <TopContent />
        </div>
        <h2 className="content__title">All pizza's</h2>
        <AllPizzas />
      </div>
    </div>
  );
};
