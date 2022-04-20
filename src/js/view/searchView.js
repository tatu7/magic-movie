class searchView {
  #data;
  render(data) {
    this.#data = data;
  }
  getInput() {
    return document.querySelector(".form--input").value;
  }
  addHundleEvent(hande) {
    const btn = document.querySelector(".form--button");
    btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      hande();
    });
  }
}
export default new searchView();
