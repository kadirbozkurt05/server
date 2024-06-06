const checkAdmin = (req, res, next) => {
    if (req.user && req.user.admin) {
      next();
    } else {
      res.status(403).send('Forbidden: Admins only');
    }
  };
  
  module.exports = checkAdmin;
  