const directoryReducer = (state, action) => {
  //   if (action.type === "SET_LOADING") {
  //     return {
  //       ...state,
  //       isLoading: "true",
  //     };
  //   }
  //   if (action.type === "API_ERROR") {
  //     return {
  //       ...state,
  //       isLoading: "false",
  //       isError: "true",
  //     };
  //   }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      return {
        ...state,
        directories: action.payload,
        isLoading: false,
      };
    case "API_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case "SET_API_BANNER_DATA":
      return {
        ...state,
        HomeBanner: action.payload,
        isLoading: false,
      };
    case "SET_API_COMPANIES_DATA":
      return {
        ...state,
        Companies: action.payload.companies,
        TotalResults: action.payload.companies_total_count,
        isLoading: false,
        isSpinner: false,
      };
    case "SET_API_COMPANIES_MORE_DATA":
      return {
        ...state,
        Companies: state.Companies.concat(action.payload.companies),
        page: state.page + 1,
        TotalResults: action.payload.companies_total_count,
        isLoading: false,
        isSpinner: false,
      };
    case "SET_SEARCH_KEYWORD":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "SET_API_SEARCH_DATA":
      return {
        ...state,
        Companies: action.payload.companies,
        TotalResults: action.payload.total,
        isSpinner: false,
      };
    case "SET_API_COMPANIES_DETAILS":
      return {
        ...state,
        CompanieDetails: action.payload.companies,
        CompaniesUsers: action.payload.companies.users,
        ProductGallery: action.payload.companies.product_gallery,
        CompanyGallery: action.payload.companies.comapany_photos,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default directoryReducer;
