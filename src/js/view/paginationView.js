class paginationView {
  #parentElement = document.querySelector(".pagination");
  #data;
  render(data) {
    this.#data = data;
    this.#generateHTML();
  }

  addHundlerEvents(hundle) {
    this.#parentElement.addEventListener("click", function (evt) {
      if (evt.target.closest(".btn--inline")) {
        const g = +evt.target.closest(".btn--inline").getAttribute("id");
        hundle(g);
      }
    });
  }

  #generateHTML() {
    this.#parentElement.innerHTML = "";
    let current = this.#data.page;

    let arrlength = this.#data.films.length;
    const next = ` <button class="btn--inline pagination__btn--next" id="${
      current + 1
    }">
   <span>Page ${current + 1} -></span>
 </button>`;
    const prev = ` <button class="btn--inline pagination__btn--prev" id=" ${
      current - 1
    }">
   <span> <- Page ${current - 1}</span>
 </button>`;
    if (arrlength == 10) {
      this.#parentElement.insertAdjacentHTML("afterbegin", next);
    }
    if (current > 1) {
      this.#parentElement.insertAdjacentHTML("afterbegin", prev);
    }
  }
}
export default new paginationView();
