import { async } from "regenerator-runtime";
import * as modal from "../model/module";
import filmsView from "../view/filmsView";
import searchView from "../view/searchView";
import paginationView from "../view/paginationView";
const showFilms = async function () {
  filmsView.loadingSnipper();
  await modal.loadFilm("hulk");
  let data = modal.state.film.results;
  filmsView.render(data);
};
const paginationController = async function (page) {
  let input = searchView.getInput();
  filmsView.loadingSnipper();
  await modal.paginationFilm(input, page);
  paginationView.render(modal.state.film.pageFilm);
  let d = await modal.paginationFilm(input, page);
  filmsView.render(d);
};

const searchControl = async function () {
  let input = searchView.getInput();
  filmsView.loadingSnipper();
  await modal.searchFilm(input);
  let data = modal.state.film.pageFilm.films;
  filmsView.render(data);
  paginationView.render(modal.state.film.pageFilm);
};

function init() {
  showFilms();
  searchView.addHundleEvent(searchControl);
  paginationView.addHundlerEvents(paginationController);
}
init();
