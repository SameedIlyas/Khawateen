const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

let gfs;

const initGridFS = (conn) => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
};

module.exports = { gfs, initGridFS };
