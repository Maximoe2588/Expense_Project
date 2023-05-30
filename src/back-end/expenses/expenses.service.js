
const express = require('express');
const app = express();
const expenseRouter = require('./expenseRouter');


app.use('/api', expenseRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});