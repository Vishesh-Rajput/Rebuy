const express = require('express');



const app = express();
app.use(express.json());






app.listen(port, () => {
  console.log(`Server is now  running on port ${port}`);
});

