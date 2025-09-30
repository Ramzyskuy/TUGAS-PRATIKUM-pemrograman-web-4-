let dataCuaca = [];

// Tambah data cuaca
function tambahCuaca() {
  const kota = document.getElementById("kota").value;
  const suhu = parseInt(document.getElementById("suhu").value);

  if (kota === "" || isNaN(suhu)) {
    alert("⚠️ Harap isi nama kota dan suhu dengan benar!");
    return;
  }

  const kondisi = suhu >= 30 ? "☀️ Panas" : suhu >= 20 ? "🌤️ Cerah" : "❄️ Dingin";

  dataCuaca.push({ kota, suhu, kondisi });

  console.log(`✅ Data ditambahkan: Kota ${kota}, Suhu: ${suhu}°C, Kondisi: ${kondisi}`);
  updateList();

  document.getElementById("kota").value = "";
  document.getElementById("suhu").value = "";
}

// Update list ke halaman
function updateList() {
  const list = document.getElementById("listCuaca");
  list.innerHTML = "";

  dataCuaca.forEach((c, i) => {
    const item = document.createElement("p");
    item.textContent = `${i+1}. ${c.kota} | ${c.suhu}°C | ${c.kondisi}`;
    list.appendChild(item);
  });
}

// Tampilkan ke console
function tampilkanData() {
  console.clear();
  console.log("📋 Daftar Data Cuaca:");
  dataCuaca.forEach((c, i) => {
    console.log(`${i+1}. Kota: ${c.kota} | Suhu: ${c.suhu}°C | Kondisi: ${c.kondisi}`);
  });
}
