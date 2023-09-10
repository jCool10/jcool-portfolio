import * as yup from 'yup'

export const contactSchema = yup.object({
  email: yup.string().required('Email is required').email('Email invalidate'),
  name: yup.string().required('Name is require'),
  message: yup.string().required('Message is required')
})

export type ContactSchema = yup.InferType<typeof contactSchema>
