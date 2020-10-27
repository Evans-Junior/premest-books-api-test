// Require Mongoose
const mongoose = require('mongoose');

// Connect To Database
const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://premest-user-api:dr3WgycKTBVtF4k1@cluster0.moovs.mongodb.net/Mest-projects?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error.message);
  }
}

connectToDatabase();




//dr3WgycKTBVtF4k1

// mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority