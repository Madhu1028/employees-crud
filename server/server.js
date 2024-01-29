const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const app = express();
//path.resolve()
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5001;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "employees",
});


app.post("api/add-employee", (req, res) => {
  console.log('data',req.body)

  const sql ="INSERT INTO employee_details (`name`,`email`,`salary`,`phone`,`ecode`) VALUES (?, ?, ?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.salary, req.body.phone, req.body.ecode];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Employee added successfully" });
  });
});


app.get("api/employees", (req, res) => {
  const sql = "SELECT e.id, e.name,e.email,e.salary,e.phone,e.ecode,c.cname FROM employee_details e, company c WHERE (c.ecode_id = e.ecode);";
  db.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.get("api/get_employee/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM student_details WHERE `id`= ?";
  db.query(sql, [id], (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});

app.post("api/edit_user/:id", (req, res) => {
  const id = req.params.id;
  console.log(id,'id')
  console.log(req.body,'req.body')
  const sql =
    "UPDATE employee_details SET `name`=?, `email`=?, `salary`=?, `phone`=?, `ecode`=? WHERE id=?";
  const values = [
    req.body.name,
    req.body.email,
    req.body.salary,
    req.body.phone,
    req.body.ecode,
    id,
  ];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student updated successfully" });
  });
});

app.delete("api/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(id,'id')
  const sql = "DELETE FROM employee_details WHERE id=?";
  const values = id;
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student updated successfully" });
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
