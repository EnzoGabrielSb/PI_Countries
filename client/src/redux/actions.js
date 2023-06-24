import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_SORT = "GET_SORT";
export const POPULATION = "POPULATION";
export const CONTINENTS = "CONTINENTS";
export const SEARCH = "SEARCH";
export const ERROR = "ERROR";
export const CLOSE = "CLOSE";
export const CHECKING = "CHECKING";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_SELECT_ACTIVITY = "GET_SELECT_ACTIVITY";
export const DELETE_FILTERS = "DELETE_FILTERS";

const endpointCountries = "http://localhost:3001/countries";
const endpointActivities = "http://localhost:3001/activities";

export const getCountries = () => async (dispatch) => {
  try {
    let json = await axios.get(`${endpointCountries}`);
    return dispatch({ type: GET_COUNTRIES, payload: json.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getActivities = () => async (dispatch) => {
  let json = await axios.get(`${endpointActivities}`);
  return dispatch({ type: GET_ACTIVITIES, payload: json.data });
};

export const getSelectActivity = (payload) => (dispatch) => {
  return dispatch({ type: GET_SELECT_ACTIVITY, payload });
};
export const getSort = (payload) => (dispatch) => {
  return dispatch({ type: GET_SORT, payload });
};

export const population = (payload) => (dispatch) => {
  return dispatch({ type: POPULATION, payload });
};

export const continent = (payload) => (dispatch) => {
  return dispatch({ type: CONTINENTS, payload });
};

/*
export const getByName = (value) => async (dispatch) => {
  try {
    let json = await axios.get(`${endpointCountries}/name?name=${value}`);
    return (
      dispatch({ type: SEARCH, payload: json.data }),
      console.log("name: ", value)
    );
  } catch (error) {
    return dispatch({ type: ERROR });
  }
};


export const getByName = (name) => async (dispatch) => {
  try {
    let json = await axios.get(`${endpointCountries}/name?name=${name}`);
    return (
      dispatch({ type: SEARCH, payload: json.data }),
      console.log("name: ", name)
    );
  } catch (error) {
    return dispatch({ type: ERROR });
  }
};
*/

export function getByName(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/countries/?name=${name}`
      );

      const filteredCountries = data.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );

      return dispatch({
        type: SEARCH,
        payload: filteredCountries,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const deleteFilters = () => (dispatch) => {
  return dispatch({ type: DELETE_FILTERS });
};

export const errorClose = () => (dispatch) => {
  return dispatch({ type: CLOSE });
};
export const checking = () => (dispatch) => {
  return dispatch({ type: CHECKING });
};
