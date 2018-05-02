var express = require("express");
var router = express.Router();
var users = require("../models/users");

/* GET users listing. */
router.get("/", function(req, res, next) {
  users
    .getAll()
    .then(result => {
      const users = result.map(item => ({
        First: item.FirstName,
        Last: item.LastName,
        Active: item.IsActive
      }));
      res.send({ Users: users });
    })
    .catch(err => {
      res.sendStatus(500);
      res.render("error", { message: "Cannot get users", error: err });
    });
});

/* INSERT mocked user data */
router.get("/setup-mock-data", function(req, res, next) {
  users
    .insertMockData()
    .then(result => {
      res.render("status", { status: `${result.message}\nUsers in database: ${result.count}` });
    })
    .catch(err => {
      res.render("error", { message: "Cannot insert mock data", error: err });
    });
});

router.post('/createUser', async function(req, res, next) {
  req.checkBody("LastName", "LastName is required").notEmpty();
  req.checkBody("IsActive", "IsActive is required").notEmpty();
  var errors = req.validationErrors();

  if (errors) {
    res.send({ status: false,  message: errors[0].msg });
  } else {


 try {
    let  data = await users.createUser(req.body);
    } catch(err)
	{throw err; }


    let dataObj = JSON.parse(JSON.stringify(data));
    delete dataObj._id;  delete dataObj.__v;

    res.send({
        status: true,
        inserted: dataObj
    }) 
  }
});

module.exports = router;

