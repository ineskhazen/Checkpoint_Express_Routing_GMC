
const isAuth = (req, res, next) => {
    const date=new Date();
    const hour=date.getHours();
    const day=date.getDay();
    
    if(hour>=9 && hour<=17 && day>=1 && day<=5){
      return next();
    }
  return res.status(400).send("<h1> come back tomorow at 9h <h1>")
    
  };
  module.exports = isAuth;