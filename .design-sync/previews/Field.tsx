import { Checkbox, Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet, Input } from '@qauth/ui'

export function Default() {
  return (
    <FieldSet className="w-80">
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="preview-email">Email address</FieldLabel>
          <Input id="preview-email" placeholder="you@example.com" type="email" />
          <FieldDescription>No spam. Unsubscribe anytime.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export function WithError() {
  return (
    <FieldSet className="w-80">
      <FieldGroup>
        <Field data-invalid="true" orientation="vertical">
          <FieldLabel htmlFor="preview-email-error">Email address</FieldLabel>
          <Input aria-invalid="true" id="preview-email-error" placeholder="you@example.com" type="email" />
          <FieldError>Enter a valid email address.</FieldError>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export function Horizontal() {
  return (
    <FieldSet className="w-80">
      <FieldGroup>
        <Field orientation="horizontal">
          <Checkbox defaultChecked id="preview-terms" />
          <FieldLabel htmlFor="preview-terms">I agree to the Terms of Service</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
