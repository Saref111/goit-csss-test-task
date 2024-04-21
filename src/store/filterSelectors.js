export const selectFilter = (state) => state.filter;
export const selectPage = (state) => state.filter.page;
export const selectLimit = (state) => state.filter.limit;
export const selectOutOfLimit = (state) => state.filter.outOfLimit;
export const selectLocation = (state) => state.filter.location;
export const selectDetails = (state) => state.filter.details;
export const selectType = (state) => state.filter.type;
export const selectPagesCount = (state) => state.filter.pagesCount;
export const selectIsDetailChecked = (state, detail) => state.filter.details.includes(detail);
