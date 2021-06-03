const admin = require("../firebase/firebase.js");
const Users = require("../models/users");

exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    console.log("FIREBASE USER IN AUTHCHECK", firebaseUser);
    req.user = firebaseUser;

    next();
  } catch (err) {
    res.status(401).json({ err: "Invalid or expired token" });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;

  const adminUser = await Users.findOne({ email });
  if (adminUser.role !== "seller") {
    // code 403 is unauthorized response code.
    res.status(403).json({
      err: "Admin resource. Access denied.",
    });
  } else {
    next();
  }
};