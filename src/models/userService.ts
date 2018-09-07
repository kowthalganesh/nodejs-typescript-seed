const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/test.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the test database.");
  });
export let getUsers = function() {
    return new Promise<string>((resolve, reject) => {
        db.serialize(() => {
            db.all(`SELECT * FROM customers`, (err, data) => {
              if (err) {
                console.error(err.message);
              }
              resolve(data);
            });
        });
    });
};