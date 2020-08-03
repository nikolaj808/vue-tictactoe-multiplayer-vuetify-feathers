// games-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'games';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({

    name: { type: String, required: true },
    password: { type: String, required: false },
    board: { type: Array, default: ['', '', '', '', '', '', '', '', ''] },
    winner: { type: String, default: '' },
    owner: { type: Schema.Types.ObjectId, ref: 'users' },
    users: [{ type: Schema.Types.ObjectId, ref: 'users' }],

  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
