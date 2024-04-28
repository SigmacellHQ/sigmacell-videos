import mysql from "mysql";
import * as fs from "node:fs";

const con = mysql.createConnection(JSON.parse(await fs.readFileSync("./config/database.json")));
con.connect(err => {
    if(err) throw new Error("Database connection failed: " + err);
    console.log("Database connection success! Hello World!", "please wait for the new updates, this isnt finished");
});