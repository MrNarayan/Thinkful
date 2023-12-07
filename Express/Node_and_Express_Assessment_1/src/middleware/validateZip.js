function isNumeric(str) {
    return /^\d+$/.test(str);
  }

function validateZip(req, res, next) {
    const zip = req.params.zip;
  if (zip === "all" || zip === "All") {
    if(req.query.admin === "true") {
      next();
    }
    else {
      next("You do not have access to that route.");
    }
  }
  else if((zip.length != 5) || (!isNumeric(zip))){
    next(`Zip (${zip}) is invalid!`);
  } 
  else {
    next();
  }
}

module.exports = validateZip;
