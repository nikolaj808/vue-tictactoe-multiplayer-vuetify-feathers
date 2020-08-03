const { Service } = require('feathers-mongoose');

exports.Users = class Users extends Service {
    create(data, params) {
        const { username, password, displayName, imageUrl } = data;

        const userData = {
            username,
            password,
            displayName,
            imageUrl
        };

        return super.create(userData, params);
    }
};
