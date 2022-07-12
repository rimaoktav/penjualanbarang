const form = document.querySelector('.form')
let ErrorMassage = []

function cekDiskon(subtotal) {
    let diskon

    if (subtotal >= 250000) {
        diskon = 25
    } else if (subtotal >= 200000) {
        diskon = 20
    } else if (subtotal >= 150000) {
        diskon = 15
    } else if (subtotal >= 100000) {
        diskon = 10
    } else if (subtotal >= 50000) {
        diskon = 5
    } else {
        diskon = 0
    }
    return diskon
}

function validation(kodebarang, harga, jumlah, nama) {
    if (kodebarang == '') {
        ErrorMassage.push('Kode Barang Harus Diisi !')
    }
    if (nama == '') {
        ErrorMassage.push('Nama Barang Harus Diisi !')
    }
    if (harga == '') {
        ErrorMassage.push('Harga Tidak Boleh Nol !')
    }
    if (jumlah == '') {
        ErrorMassage.push('Jumlah Tidak Boleh Nol !')
    }
}

function subTotal(harga, barang) {
    const total = harga * barang
    return total
}

function nilaiDiskon(harga, diskon) {
    return harga * (diskon / 100)
}

function jumlahPembayaran(total, nilaiDis) {
    return total - nilaiDis
}

form.addEventListener('submit', (event) => {
    let kodeBarang = document.getElementById('kodebarang').value;
    let harga = document.getElementById('harga').value;
    let jumlahJual = document.getElementById('jumlahbarang').value;
    let namaBarang = document.getElementById('namabarang').value;

    validation(kodeBarang, harga, jumlahJual, namaBarang)


    if (ErrorMassage.length < 1) {
        const total = subTotal(harga, jumlahJual)
        const diskon = cekDiskon(total)
        const nilaiDis = nilaiDiskon(total, diskon)
        const totalBayar = jumlahPembayaran(total, nilaiDis)

        document.getElementById('subtotal').value = `Rp ${total},-`;
        document.getElementById('diskon').value = `${diskon}%`;
        document.getElementById('nilaidiskon').value = `Rp ${nilaiDis},-`;
        document.getElementById('totalbayar').value = `Rp ${totalBayar},-`;
    } else {
        alert(ErrorMassage.join('\n'))
        ErrorMassage = []
    }
})