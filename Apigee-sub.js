const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

(function setupBodyParser(){
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
})();


app.get('/subtract', (req, res) => {
    
    res.send(req.body.operation);
});

app.listen(port, () => console.log(`App listening on port ${port}`));