import { createServerFn } from '@tanstack/react-start'
import { Resend } from 'resend'
import { z } from 'zod'

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

const ALREADY_SUBSCRIBED_MESSAGE = 'already exists'

export const joinWaitlist = createServerFn({ method: 'POST' })
  .inputValidator(waitlistSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY
    const segmentId = process.env.RESEND_SEGMENT_ID

    if (!(apiKey && segmentId)) {
      throw new Error('Waitlist signup is not configured yet. Please try again later.')
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.contacts.create({
      email: data.email,
      segments: [{ id: segmentId }],
    })

    if (error && !error.message.toLowerCase().includes(ALREADY_SUBSCRIBED_MESSAGE)) {
      throw new Error('Something went wrong. Please try again.')
    }

    return { success: true as const }
  })
