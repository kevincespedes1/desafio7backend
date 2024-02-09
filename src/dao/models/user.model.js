import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.pluralize(null)

const collection = 'users'

const schema = new mongoose.Schema({
    first_name: { type: String  },
    last_name: { type: String },
    email: { type: String },
    age: { type: Number },
    gender: { type: String},
    password: { type: String },
    rol: { type: String}
});

schema.plugin(mongoosePaginate)

export default mongoose.model(collection, schema)
