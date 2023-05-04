const db = require("./db_config");

const sql =
  "INSERT INTO tamu (nama, noHp, nip, statusPegawai, alamatAsalInstansi, bidang, jabatan, keperluan, tujuan) VALUES ?";
const values = [
  [
    "Fariz",
    "082176457165",
    "212525",
    "Anak Buah",
    "Diskominfo-SP",
    "Aptika",
    "uji kau apola?",
    "Apo Bae",
    "Serah AKu",
  ],
  [
    "Ahmad",
    "2125454",
    "14585444",
    "PNS",
    "Diskominfo-SP",
    "Persandian",
    "apola?",
    "Entah,Kau tau?",
    "Serah AKu",
  ],
];

db.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});
