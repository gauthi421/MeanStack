const debug = require("debug")("app:users");
const fs = require("fs");
const db = require("../utils/db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Gender: String,
  IsActive: Boolean,
  LastLoginDate: Date
});

const User = mongoose.model("User", userSchema);

const UsersModel = {
  model: User,

  createUser(data) {
    const user = new User(data);

    debug(`Insert user into db: ${JSON.stringify(user)}`);
    return user.save();
  },

  removeAll() {
    return User.remove({});
  },

  insertMockData() {
    return User.count({}).then(count => {
      if (count === 0) {
        const data = JSON.parse(fs.readFileSync("./spec/fixtures/mockdata.json"));
        const promises = data.map(element => UsersModel.insert(element));
        return Promise.all(promises)
          .then(() => {
            debug("All mock data inserted.");
            return { message: "Mock data inserted", count: promises.length };
          })
          .catch(error => {
            debug(`Error adding mock data: ${error}`);
          });
      } else {
        return { message: "Mock data not inserted", count };
      }
    });
  },

  getAll() {
    return User.find({});
  },

  getActiveUsers() {
    return new Promise((resolve, reject) => {
      User.find({ IsActive: true }, 
		  function(err, userData) {
					if (err) {reject(err);	} 
					else {
					  let activeUsersObj = JSON.parse(JSON.stringify(userData));


							  for (let i = 0; i < activeUsersObj.length; i++) {
								if (activeUsersObj[i].FirstName === null) {
								  activeUsersObj[i].FullName = activeUsersObj[i].LastName;
								} else {
								  activeUsersObj[i].FullName = activeUsersObj[i].FirstName + " " + activeUsersObj[i].LastName;
								}
							  }

					  resolve(activeUsersObj);
					}
      });
    });
  }
};

module.exports = UsersModel;

