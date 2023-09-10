'use client'

import TitlePage from '@/components/shared/TitlePage'
import { ContactSchema, contactSchema } from '@/utils/rule'
import { Button, FormControl, TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'

import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = ContactSchema

const Contact = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(contactSchema) })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <TitlePage title='Contact' />

      <form onSubmit={onSubmit} className='grid grid-cols-2 gap-4 '>
        <TextField
          // error
          helperText={errors.name?.message}
          className='col-span-1'
          label='Full name'
          variant='outlined'
        />
        <TextField
          // error
          helperText={errors.email?.message}
          type='email'
          color='primary'
          className='col-span-1'
          label='Email'
          variant='outlined'
        />
        <TextField
          // error
          helperText={errors.message?.message}
          multiline
          rows={4}
          className='col-span-2'
          label='Message'
          variant='outlined'
        />
      </form>
      <div className='m-3 text-end'>
        <Button>Send Message</Button>
      </div>
    </div>
  )
}

export default Contact
