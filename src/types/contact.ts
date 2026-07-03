export interface ContactFormData {
  name: string
  email: string
  company?: string
  service?: string
  phone?: string
  projectType?: string
  budget?: string
  message: string
}

export interface ContactSubmission extends ContactFormData {
  id: string
  created_at: string
  status: 'pending' | 'read' | 'replied'
}
