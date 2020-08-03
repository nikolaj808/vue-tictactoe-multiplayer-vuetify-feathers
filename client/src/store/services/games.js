// src/store/services/users.js
import feathersClient, { makeServicePlugin, BaseModel } from '../../feathers-client'

class Game extends BaseModel {
  constructor(data, options) {
    super(data, options)
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = 'Game'
  // Define default properties here
  static instanceDefaults() {
    return {
        name: '',
        password: '',
        board: [],
        winner: '',
        owner: {},
        users: [],
    }
  }
}
const servicePath = 'games'
const servicePlugin = makeServicePlugin({
  Model: Game,
  service: feathersClient.service(servicePath),
  servicePath
})

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
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
})

export default servicePlugin