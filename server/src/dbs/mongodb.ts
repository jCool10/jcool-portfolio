import mongoose from 'mongoose'

const mongoURL = 'mongodb+srv://jcool:jcool@jcool-portfolio.5jdzbxn.mongodb.net/?retryWrites=true&w=majority'

class Database {
  constructor() {
    this.connect()
  }

  connect() {
    mongoose
      .connect(mongoURL)
      .then((_) => console.log('Connected Mongo DB Success'))
      .catch((err) => console.log(err))
  }
}

export default new Database()
