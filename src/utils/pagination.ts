export const Pagination = (
  totalCount: number, // totalCount is the total items in the array
  pageSize: number, // pageSize is the number item per page
  pageLength:number, // number of pages to render at once
  currentPage: number, // visible page that displays items to user
  initialPage: number = 1,
  pageDiff?: number | 0
): number[] => {
    let totalPage = Math.ceil(totalCount / pageSize)
    const half = Math.floor(pageLength/2)
    let start = Math.max(currentPage-half, 1)
    let end = Math.min(start + pageLength, totalPage)

    if(end - start < pageLength-1){
      start = Math.max(end -pageLength+1, 1)
    }

    return range(start,end)
};

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
