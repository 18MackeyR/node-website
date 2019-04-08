const express = require(`express`);
const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(`index.`,{
        title: `Homepage`,
    });
  });

const server = app.listen(7003, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});