const barang = {
	nama: "kulkas",
	jenis: "elektronik",
	merek: "samsung",
	harga: 3329000,
	kapasitasLiter: 220,
	kwh: 110,
	ukuran: {
		PanjangCM: 58,  
		LebarCM: 66,
		TinggiCM: 128
	}
}
//object
const {nama, jenis, merek, harga, ukuran:{TinggiCM}} = barang;
console.log(nama, jenis, merek, harga, TinggiCM);