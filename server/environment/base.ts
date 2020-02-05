export const environment = {
  port: process.env.PORT || 3000,
  production: false,
  db: {
    uri: process.env.MONGODB_URI || 'mongodb+srv://rahul:sspv9hncxLi0tGA7@cluster0-cgi2o.mongodb.net/test?retryWrites=true&w=majority'
  },
  questionsApi: 'https://opentdb.com/api.php?amount=15&type=multiple'

};