const mongoose = require('mongoose');


mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("MongoDB connected to the backend successfully");
    })
    .catch((err) => console.log(err));

export default mongoose;
