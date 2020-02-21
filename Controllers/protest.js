const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllProtests = (req, res) => {
  pool.query("SELECT * FROM fs_be.Protest WHERE ContactID = 1234567890", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

module.exports = {
  getAllProtests
}