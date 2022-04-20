import { async } from "regenerator-runtime";

export const getAPI = async function (url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
};
