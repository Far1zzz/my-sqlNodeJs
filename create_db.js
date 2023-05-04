var db = require("./db_config");

const sql = "CREATE DATABASE buku_tamu";
db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Dataabase created");
});
