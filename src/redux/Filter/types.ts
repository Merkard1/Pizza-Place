export type Sort = {
  name: string;
  sortProperty: string;
};

export interface FilterSliceState {
  categoryId: number;
  sort: Sort;
}
