import mongoose, { Schema, Document} from 'mongoose';
import { Eq } from 'fp-ts/lib/Eq';

export interface IUser extends Document {
  alias: String,
  email: String,
  password: String
}

const UserSchema : Schema = new Schema({
  email: {
    type: String,
    required: true
  },
  alias: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

export default mongoose.model<IUser>('User', UserSchema);
