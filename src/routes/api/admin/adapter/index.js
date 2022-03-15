const AdminJS = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')

AdminJS.registerAdapter(AdminJSMongoose)

const User = mongoose.model('User', { name: String, email: String, surname: String })
const adminJsOptions = {
    resources: [User],
}
const AdminJS = new AdminJS(adminJsOptions)
const router = AdminJSExpress.buildRouter(adminJs)

module.exports = router