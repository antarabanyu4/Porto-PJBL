const form = document.querySelector("form");
const output = document.getElementById("output");

let jumlahData = 0;

if (output) output.innerHTML = "";

if (!form) {
    console.warn("Form tidak ditemukan di DOM.");
} else {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        try {
            jumlahData++;

            const textInputs = document.querySelectorAll('input[type="text"]');
            const nama = (textInputs[0] && textInputs[0].value) || "";
            const tempatLahir = (textInputs[1] && textInputs[1].value) || "";
            const alamat = document.querySelector("textarea")?.value || "";
            const tanggal = document.querySelector('input[type="date"]')?.value || "";

            const numberInputs = document.querySelectorAll('input[type="number"]');
            const nomor = (numberInputs[0] && numberInputs[0].value) || "";
            const umur = (numberInputs[1] && numberInputs[1].value) || "";

            const email = document.querySelector('input[type="email"]')?.value || "";

            const jenisInput = document.querySelector('input[type="radio"]:checked');
            let jenisKelamin = "Tidak diisi";
            if (jenisInput) {
                if (jenisInput.nextSibling && jenisInput.nextSibling.textContent) {
                    jenisKelamin = jenisInput.nextSibling.textContent.trim();
                } else if (jenisInput.value) {
                    jenisKelamin = jenisInput.value;
                }
            }

            const hobiElements = document.querySelectorAll('input[type="checkbox"]:checked');
            const hobi = Array.from(hobiElements).map(el => {
                return (el.nextSibling && el.nextSibling.textContent) ? el.nextSibling.textContent.trim() : (el.value || "");
            }).join(", ");

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
                    Data ${jumlahData} — ${waktu}
                </p>
                <p><strong>Nama:</strong> ${nama}</p>
                <p><strong>Alamat:</strong> ${alamat}</p>
                <p><strong>Tempat Lahir:</strong> ${tempatLahir}</p>
                <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
                <p><strong>Nomor HP:</strong> ${nomor}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
                <p><strong>Hobi:</strong> ${hobi}</p>
                <p><strong>Umur:</strong> ${umur}</p>
            `;

            if (output) output.prepend(entryBaru);

            alert("Data berhasil dikirim!");
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan: " + err.message);
        }
    });
}