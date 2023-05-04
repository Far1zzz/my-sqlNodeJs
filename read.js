const db = require("./db_config");

const sql = "SELECT * FROM tamu";

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});
