import { async } from "regenerator-runtime";
import { API } from "../config";
import { getAPI } from "../helpers";
export const state = {
  film: {
    results: {},
    pageFilm: {
      page: 1,
      films: {},
    },
  },
};
export const loadFilm = async function (search) {
  try {
    data = await getAPI(API + `${search}`);
    state.film.results = data.Search.map((val) => {
      return {
        image: val.Poster,
        title: val.Title,
        year: val.Year,
        id: val.imdbID,
      };
    });
  } catch (err) {
    console.log(err);
  }
};
export const searchFilm = async function (value) {
  try {
    data = await getAPI(API + `${value}`);
    state.film.pageFilm.films = data.Search.map((val) => {
      return {
        image: val.Poster,
        title: val.Title,
        year: val.Year,
        id: val.imdbID,
      };
    });
  } catch (err) {
    console.log(err);
  }
};

export const paginationFilm = async function (
  value,
  page = state.film.pageFilm.page
) {
  try {
    state.film.pageFilm.page = page;
    const data = await getAPI(API + `${value}` + `&page=` + page);
    state.film.pageFilm.films = data.Search.map((val) => {
      return {
        image: val.Poster,
        title: val.Title,
        year: val.Year,
        id: val.imdbID,
      };
    });
    return state.film.pageFilm.films;
  } catch (err) {
    console.log(err);
  }
};
