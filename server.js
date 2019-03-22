const express = require('express');
const bodyParser = require('body-parser');
// const routes = require("./routes");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
