const AuthUsersModel = require('./AuthUsers.model')
const CustomersModel = require('./Customer.model')
const AdminModel = require('./Admin.model')
const MoviesModel = require('./Movies.model')
const GenresModel = require('./Genres.model')

module.exports = {
  authUsersModel: AuthUsersModel,
  customersModel: CustomersModel,
  adminModel: AdminModel,
  moviesModel: MoviesModel,
  genresModel: GenresModel
}
