var express = require('express');
var app = express();
app.get('/links', function (req, res) {
res.send("Welocme to GeeksforGeeks!");
});

app.listen(process.env.PORT || 8000, () => {    console.log(`Server is running on PORT: `);
});
