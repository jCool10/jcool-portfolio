import bcrypt from 'bcrypt'

const hashPassword = async (password: string) => await bcrypt.hash(password, 10)

export { hashPassword }
