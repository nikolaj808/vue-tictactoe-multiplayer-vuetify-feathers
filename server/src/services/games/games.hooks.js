const { authenticate } = require('@feathersjs/authentication').hooks;

const associateUserWithGame = async context => {
  context.data.owner = context.params.user._id;
  context.data.users = [context.params.user._id];
  return context;
};

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      associateUserWithGame,
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
