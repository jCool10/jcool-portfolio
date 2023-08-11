import { Schema, model } from 'mongoose'

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'Users'

export interface IUser {
  email: string
  password: string
  username: string
}

const userSchema: Schema<IUser> = new Schema(
  {
    email: { type: String, required: true, minlength: 5, maxlength: 160 },
    password: { type: String, required: true, minlength: 6, maxlength: 160 },
    username: { type: String, required: true }
  },
  { timestamps: true, collection: COLLECTION_NAME }
)

export const UserModel = model<IUser>(DOCUMENT_NAME, userSchema)
