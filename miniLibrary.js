class Tabel {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let buka = "<thead><tr>";
    let tutup = "</tr></thead>";
    data.forEach((d) => {
      buka += `<th>${d}</th>`;
    });

    return buka + tutup;
  }

  createBody(data) {
    let buka = "<tbody>";
    let tutup = "</tbody>";

    data.forEach((d) => {
      buka += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
        </tr>
      `;
    });

    return buka + tutup;
  }

  render(element) {
    let tabel =
      "<table class='table table-hover'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = tabel;
  }
}

const tabel = new Tabel({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["Abdul Nasir", "abdul_nasir@gmail.com", "(022) 2133179"],
    ["Angga Prakasa", "praAngga@gmail.id", "(021) 1123788"],
    ["Davit Aksara", "aksara_dav@gmail.com", "(022) 7788654"]
  ]
});
const tugas_data = document.getElementById("tugas_data");
tabel.render(tugas_data);
