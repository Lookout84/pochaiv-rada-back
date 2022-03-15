const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')


const express = require('express')
const app = express()

const adminJs = new AdminJS({
    databases: [],
    rootPath: '/admin',
})

const router = AdminJSExpress.buildRouter(adminJs)

app.use(adminJs.options.rootPath, router)
app.listen(5000, () => console.log('AdminJS is under localhost:5000/admin'))

module.exports = router