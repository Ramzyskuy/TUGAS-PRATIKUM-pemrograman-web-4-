// Ambil elemen
const tombol = document.getElementById("btn");
const teks = document.getElementById("teks");

tombol.addEventListener("click", function () {
    teks.textContent = "Teks berhasil diubah dengan Javascript!";
    teks.style.color = "green"
});
