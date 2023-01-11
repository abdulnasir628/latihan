const umur = 23;
const ket = umur < 30 ? 'Masih Muda' : 'Sudah Dewasa';
const ketAnd = umur < 30 && "Mahasiswa";
const ketOr = umur > 30 || "Belum Berkeluarga";
const buku = [
	{
		judul: "HTML",
		harga: 88000
	},
	{
		judul: "C++",
		harga: 50000
	},
	{
		judul: "JAVA",
		harga: 110000
	},
];
const listBuku = buku.map((bukuMatkul)=>bukuMatkul.judul)
const pesan = `Dia ${ket} dia masih ${ketAnd} dan ${ketOr} dia juga memiliki buku ${listBuku}`;
console.log(pesan);
