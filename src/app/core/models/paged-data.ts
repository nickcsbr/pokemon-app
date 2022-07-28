export class PagedData<T> {
    data: Array<T>;
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;

  constructor( data = new Array<T>(), page = 1, pageSize = 5, count = 0, totalCount = 0) {
    this.data = data;
    this.page = page;
    this.pageSize = pageSize;
    this.count = count;
    this.totalCount = totalCount;
  }
}