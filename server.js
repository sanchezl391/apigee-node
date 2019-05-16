const express = require('express');
const app = express();
const port = 3000;

app.get('/mult', (req, res) => {
  if( isValidParams(req.query) )
    res.send(mult(req.query));
  else
    res.send('Err: Invalid Params');
});

function isValidParams(params) {
  let x = params.x, y = params.y;
  if ( x && y && !isNaN(x) && !isNaN(y))
    return true;
  else 
    return false;
}

function toNum(a) {
  return parseInt(a);
}

function mult(params) {
  return `${(toNum(params.x) * toNum(params.y))}`;
}

app.listen(port, () => console.log(`App listening on port ${port}`));