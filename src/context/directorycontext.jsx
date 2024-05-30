import { createContext, useContext, useEffect, useReducer } from "react";
import { BASE_URL_S } from "../components/ApiConfig/apiConfig";
import axios from "axios";
import reducer from "../reducer/directoryReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: true,
    isError: false,
    directories: [],
    HomeBanner: [],
    Companies: [],
    TotalResults: 0,
    isSpinner: true,
    page: 1,
    searchQuery: "",
    CompanieDetails: [],
    CompaniesUsers: [],
    ProductGallery: [],
    CompanyGallery: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // 1th api calling directory
  const getDirectory = () => {
    dispatch({ type: "SET_LOADING" });
    try {
      axios
        .get(BASE_URL_S + "directories")
        .then((res) => res.data)
        .then((finalres) => {
          if (finalres.ack === 1) {
            dispatch({ type: "SET_API_DATA", payload: finalres.directories });
          } else {
            console.log(finalres);
          }
        });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // 2th api calling directory
  const getSubDirectory = (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      axios
        .get(url)
        .then((res) => res.data)
        .then((finalres) => {
          if (finalres.ack === 1) {
            dispatch({
              type: "SET_API_COMPANIES_DATA",
              payload: finalres,
            });
          } else {
            console.log(finalres);
          }
        });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // 3th api calling more directory
  const getfetchMoreData = async (url) => {
    try {
      axios
        .get(url + (state.page + 1))
        .then((res) => res.data)
        .then((finalres) => {
          if (finalres.ack === 1) {
            dispatch({
              type: "SET_API_COMPANIES_MORE_DATA",
              payload: finalres,
            });
          } else {
            console.log(finalres);
          }
        });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // 4th api calling directory search
  const handleSearch = (searchword, url) => {
    dispatch({ type: "SET_SEARCH_KEYWORD", payload: searchword });
    try {
      axios
        .get(url)
        .then((res) => res.data)
        .then((finalres) => {
          if (finalres.ack === 1) {
            const filteredData = finalres.companies.filter((company) =>
              company.name.toLowerCase().includes(searchword.toLowerCase())
            );
            dispatch({
              type: "SET_API_SEARCH_DATA",
              payload: {
                companies: finalres.companies,
                total: filteredData.length,
              },
            });
          } else {
            console.log(finalres);
          }
        });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // 5th api calling directory
  const getCompaniesDetails = (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      axios
        .get(url)
        .then((res) => res.data)
        .then((finalres) => {
          if (finalres.ack === 1) {
            dispatch({
              type: "SET_API_COMPANIES_DETAILS",
              payload: finalres,
            });
          } else {
            console.log(finalres);
          }
        });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // 3th api calling banner
  const getBanner = () => {
    try {
      axios
        .get(BASE_URL_S + "banner")
        .then((res) => res.data)
        .then((finalres) => {
          if (finalres.ack === 1) {
            dispatch({ type: "SET_API_BANNER_DATA", payload: finalres.banner });
          } else {
            console.log(finalres);
          }
        });
    } catch (error) {
      dispatch({ type: "API_BANNER_ERROR" });
    }
  };

  useEffect(() => {
    getDirectory();
    getBanner();
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          ...state,
          getSubDirectory,
          getfetchMoreData,
          handleSearch,
          getCompaniesDetails,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

// custom hooks
const useDirectoryContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useDirectoryContext };
