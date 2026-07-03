'use client'

import { useState } from 'react'
import { ContactFormData } from '@/types/contact'

interface UseContactFormReturn {
  formData: ContactFormData
  isLoading: boolean
  isSuccess: boolean
  error: string | null
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  reset: () => void
}

const initialState: ContactFormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // TODO: Conectar con Supabase cuando esté configurado
      // const { createClient } = await import('@/lib/supabase/client')
      // const supabase = createClient()
      // const { error } = await supabase.from('contact_submissions').insert([formData])
      // if (error) throw error

      // Simulación temporal
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setFormData(initialState)
    } catch (err) {
      setError('Error al enviar el mensaje. Por favor intenta nuevamente.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setFormData(initialState)
    setIsSuccess(false)
    setError(null)
  }

  return { formData, isLoading, isSuccess, error, handleChange, handleSubmit, reset }
}
