let santri = {
    namaDepan: 'Jaka',
    namaBelakang: 'Tarub',
    namaLengkap: function () {
        return this.namaDepan + " " + this.namaBelakang;
    }
} 
document.write(santri.namaLengkap())