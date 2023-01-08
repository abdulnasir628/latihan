const mahasiswa = {
	nama: "bagas",
	asal: "bandung",
	umur: 24,
	tanggalLahir: 18,
	Study:{
		Fakultas: "Ilmu Komputer",
		Jurusan: "Teknik Informatika"
	}
};
//alias dan default value
function printInfo({nama, asal, umur, tanggalLahir:TL, hobi = "Olahraga"}) {
	console.log(nama, asal, umur, TL, hobi)
}
printInfo(mahasiswa);