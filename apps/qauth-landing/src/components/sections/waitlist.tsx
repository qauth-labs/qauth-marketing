import { Button, Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet, Input } from '@qauth/ui'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { joinWaitlist } from '../../lib/actions'
import { getFadeInUpVariants } from '../../lib/motion-variants'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'loading') {
      return
    }
    setStatus('loading')
    setMessage('')
    try {
      await joinWaitlist({ data: { email } })
      setStatus('success')
      setMessage("Thanks! We'll be in touch when we launch.")
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="scroll-mt-24 py-24 md:py-32" id="waitlist">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
        <motion.div animate="animate" className="flex flex-col gap-8" initial="initial" variants={variants}>
          <div>
            <h2 className="font-bold text-3xl text-foreground md:text-4xl">
              Join the <span className="text-highlight">Revolution</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm">
              We are currently in private alpha. Be the first to know when we launch the public beta and secure your
              spot.
            </p>
          </div>

          <form noValidate onSubmit={handleSubmit}>
            <FieldSet>
              <FieldGroup className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3">
                <Field className="min-w-0 flex-1" data-invalid={status === 'error'} orientation="vertical">
                  <FieldLabel className="sr-only" htmlFor="waitlist-email">
                    Email address
                  </FieldLabel>
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                    <Input
                      aria-describedby={message ? 'waitlist-privacy waitlist-message' : 'waitlist-privacy'}
                      aria-invalid={status === 'error'}
                      className="min-w-0 flex-1 rounded-lg border-border bg-card text-foreground"
                      disabled={status === 'loading'}
                      id="waitlist-email"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      type="email"
                      value={email}
                    />
                    <Button className="rounded-lg sm:shrink-0" disabled={status === 'loading'} size="lg" type="submit">
                      {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
                    </Button>
                  </div>
                  <FieldDescription id="waitlist-privacy">No spam. Unsubscribe anytime.</FieldDescription>
                  {status === 'error' && message && (
                    <FieldError id="waitlist-message" role="alert">
                      {message}
                    </FieldError>
                  )}
                </Field>
              </FieldGroup>
            </FieldSet>

            {status === 'success' && message && (
              <output
                aria-live="polite"
                className="mt-2 block text-sm text-success"
                htmlFor="waitlist-email"
                id="waitlist-message"
              >
                {message}
              </output>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
