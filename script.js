document.getElementById('tahun').textContent = new Date().getFullYear();
const nomorWA = '6283833031158';

document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const produk = btn.dataset.produk;
    const pesan = `Halo kak Melani, saya mau pesan ${produk} ya`;
    const url = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
  });
});