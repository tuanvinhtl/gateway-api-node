const jwt = require("jsonwebtoken");
var Request = require("request");
const path = require('path');


module.exports = {
    version: '1.0.0',
    policies: ['scopes'],
    init: function (pluginContext) {
        pluginContext.registerPolicy({
            name: 'scopes',
            policy: (params) => (req, res, next) => {
                if (!req.headers.authorization) {
                    res.sendFile(path.join(__dirname + '/render-page/login.html'));
                    return res;
                    //    return res.redirect('http://52.77.224.71:8080/api/user/login-page')
                }
                return next();
            },
            schema: {
                $id: 'http://express-gateway.io/policies/check-scopes.json',
            }
        })
    },
    schema: {
        $id: 'http://express-gateway.io/plugins/check-scopes.json',
    }
};