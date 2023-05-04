const db = require("./db_config");

const sql = `CREATE TABLE tamu
        (
            id int NOT NULL AUTO_INCREMENT,
            nama VARCHAR(255),
            noHp VARCHAR(255),
            nip VARCHAR(255),
            statusPegawai VARCHAR(255),
            alamatAsalInstansi TEXT,
            bidang VARCHAR(255),
            jabatan VARCHAR(255),
            keperluan VARCHAR(255),
            tujuan VARCHAR(255),
            createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
            PRIMARY KEY (id)
        )`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});
