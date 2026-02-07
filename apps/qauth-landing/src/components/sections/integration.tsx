import { IconCheck } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'framer-motion'
import { INTEGRATION_CHECKLIST, INTEGRATION_CODE } from '../../lib/constants'
import { getFadeInUpVariants } from '../../lib/motion-variants'
import { CodeBlock } from '../shared/code-block'

export function Integration() {
  const reduceMotion = useReducedMotion()
  const variants = getFadeInUpVariants(!!reduceMotion)

  return (
    <section className="scroll-mt-24 py-24 md:py-32" id="integration">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div animate="animate" className="flex items-center" initial="initial" variants={variants}>
            <CodeBlock className="w-full" code={INTEGRATION_CODE} filename="AuthMiddleware.js" />
          </motion.div>

          <motion.div
            animate="animate"
            className="flex flex-col justify-center gap-8"
            initial="initial"
            variants={variants}
          >
            <div>
              <h2 className="font-bold text-3xl text-foreground md:text-4xl">
                Simple <span className="text-highlight">Integration</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Don&apos;t rewrite your entire stack. QAuth plugs into your existing frameworks with minimal
                configuration. Whether it&apos;s Next.js, Go, or Python, we provide typed SDKs that respect your
                workflow.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {INTEGRATION_CHECKLIST.map((item) => (
                <li className="flex items-center gap-3" key={item}>
                  <span
                    aria-hidden
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                  >
                    <IconCheck className="size-4" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
