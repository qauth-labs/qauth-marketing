import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

export const joinWaitlist = createServerFn({ method: 'POST' })
  .inputValidator(waitlistSchema)
  .handler(({ data }) => {
    // In production, integrate with email service (e.g. Resend)
    // await resend.contacts.create({ email: data.email, audienceId: process.env.RESEND_AUDIENCE_ID })
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.info('Waitlist signup:', data.email)
    }
    return { success: true as const }
  })
