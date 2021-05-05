const users = require('../users/users-model');
const Users = require('../users/users-model');

function logger(req, res, next) {
  console.log(`
    ${req.method} request to ${req.baseUrl}${req.url} endpoint
  `);
  next();
}

const validateUserId = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      next({
        status: 404,
        message: "user not found"
      });
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validateuser(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId };