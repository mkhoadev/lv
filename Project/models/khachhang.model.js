const mysql = require("./db");

const User = function (user) {
  this.email_kh = user.email;
  this.mat_khau_kh = user.password;
  this.ngay_tao_tk = user.ngaytaotk;
};

User.createUser = (newUser, result) => {
  mysql.query("INSERT INTO khach_hang SET ? ", newUser, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(err, null);
      return;
    }
    console.log("Create new user");
    result(null, {id: res.insertId, ...newUser});
  });
};

User.getUser = (email, password, result) => {
  mysql.query("SELECT * FROM khach_hang WHERE (email_kh=? && mat_khau_kh=?)", [email, password], (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(null, err);
      return;
    }
    console.log("get user success");
    result(null, res);
  });
};

User.getCheckuser = (email, result) => {
  mysql.query(`SELECT email_kh FROM khach_hang WHERE email_kh='${email}'`, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(null, err);
      return;
    } else {
      console.log("check eamil user success");
      result(null, res);
    }
  });
};

User.getOneUser = (id_kh, result) => {
  mysql.query(`SELECT * FROM khach_hang WHERE id_kh='${id_kh}'`, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(null, err);
      return;
    } else {
      console.log("check eamil user success");
      result(null, res);
    }
  });
};

User.getListClient = (result) => {
  mysql.query(`SELECT * FROM khach_hang`, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(null, err);
      return;
    } else {
      console.log("check eamil user success");
      result(null, res);
    }
  });
};

User.changePassword = (email, password, result) => {
  mysql.query(`UPDATE khach_hang SET mat_khau_kh='${password}' WHERE email_kh='${email}'`, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(null, err);
      return;
    } else {
      console.log("change password user success");
      result(null, res);
    }
  });
};

User.updateStatusUser = (idkh, status, result) => {
  mysql.query(`UPDATE khach_hang SET trang_thai_kh='${status}' WHERE id_kh='${idkh}'`, (err, res) => {
    if (err) {
      console.log("ERROR: ", err);
      result(null, err);
      return;
    } else {
      console.log("Success");
      result(null, res);
    }
  });
};

module.exports = User;
