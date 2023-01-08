const daerah = {
	provinsi: "jawa barat",
	kabupaten: "bandung",
	penduduk: 2500000,
	luas: 16730,
	posisi: {
		bujurtimur: 107,
		lintangselatan: 6
	}
};

//function parameter
function printInfoDaerah({provinsi, kabupaten, penduduk, luas, posisi}){
	console.log(provinsi, kabupaten, penduduk, luas, posisi)
}
printInfoDaerah(daerah);

