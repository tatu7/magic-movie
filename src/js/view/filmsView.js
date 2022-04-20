class FilmsView {
  #parentElement = document.querySelector(".movie-list");
  #data;
  render(data) {
    this.#data = data;
    this.#parentElement.innerHTML = "";
    this.#data.map((val) => {
      this.#generateHTML(val);
    });
  }
  loadingSnipper() {
    this.#parentElement.innerHTML = "";
    let loading = ` <div class="loading"><img src="../../../img/Ripple-1s-200px.svg" alt="" /></div>`;
    this.#parentElement.insertAdjacentHTML("afterbegin", loading);
  }
  #generateHTML(val) {
    const html = `
    <div class="movie-list-item">
          <img class="movie-list-item-img" src="${val.image}" alt="" />
          <span class="movie-list-item-title">${val.title}</span>
          <p class="movie-list-item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic
            fugit similique accusantium.
          </p>
 
        </div>
    `;
    this.#parentElement.insertAdjacentHTML("afterbegin", html);
  }
}
export default new FilmsView();
