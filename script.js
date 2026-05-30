const form = document.querySelector("form");
const output = document.getElementById("output");

let jumlahData = 0;

output.innerHTML = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    jumlahData++;

    const nama = document.querySelector('input[type="text"]').value;
    const alamat = document.querySelector("textarea").value;
    const tempatLahir = document.querySelectorAll('input[type="text"]')[1].value;
    const tanggal = document.querySelector('input[type="date"]').value;
    const nomor = document.querySelector('input[type="tel"]').value;
    const email = document.querySelector('input[type="email"]').value;

    const waktu = new Date().toLocaleString("id-ID");

    const entryBaru = document.createElement("div");
    entryBaru.style.cssText = `
        background: #f9fafb;
        border-left: 5px solid #2563eb;
        border-radius: 8px;
        padding: 16px 20px;
        margin-bottom: 16px;
    `;
    entryBaru.innerHTML = `
        <p style="font-weight: bold; color: #2563eb; margin: 0 0 10px 0;">
            Data #${jumlahData} — ${waktu}
        </p>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
        <p><strong>Tempat Lahir:</strong> ${tempatLahir}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
        <p><strong>Nomor HP:</strong> ${nomor}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    output.prepend(entryBaru); // Data terbaru muncul di atas

    alert("Data berhasil dikirim!");
});