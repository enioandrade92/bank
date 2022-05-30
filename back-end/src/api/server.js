const api = require('./api');

const PORT = 3001;

api.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
