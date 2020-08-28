export interface IApi<T extends { id: number }> {
  get(id: number): Promise<T>;

  query(): Promise<T[]>;

  delete(id: number): Promise<void>;
}
