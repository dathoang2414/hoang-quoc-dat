export default interface SearchParamsDto {
  search?: string;
  limit?: number;
  page?: number;
  orderDir?: 'asc' | 'desc';
  orderBy?: 'name' | 'createdAt';
}
