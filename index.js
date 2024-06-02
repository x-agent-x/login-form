"use strict";

import bodyParser from "body-parser";
import express from "express";
import fs from "fs";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log("server listen ");
});

let message = (msg) => {
  return msg;
};

/* */
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
/* */

/*  */
app.get("/", (req, resp) => {
  resp.render("form.ejs", {
    msg: message,
  });
});

const userInfo = {};
app.post("/submit", (req, resp) => {
  userInfo.username = req.body.username;
  userInfo.password = req.body.password;

  resp.sendStatus(201);
  console.log(userInfo);

  fs.writeFile(
    "user Info.txt",
    "user name is: " +
      userInfo.username +
      "\t \t \t pass word is: " +
      userInfo.password,
    (error) => {
      if (error) throw error;
      console.log("file created");
    }
  );
});
