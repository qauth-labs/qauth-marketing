export type TokenType = 'comment' | 'string' | 'keyword' | 'number' | 'plain'

export interface Token {
  type: TokenType
  text: string
}

const KEYWORDS = new Set([
  'const',
  'let',
  'var',
  'new',
  'await',
  'import',
  'export',
  'default',
  'return',
  'from',
  'true',
  'false',
  'null',
  'undefined',
  'function',
  '=>',
  'async',
])

const RE_HASH_COMMENT = /^#.*/
const RE_SLASH_COMMENT = /^\/\/.*/
const RE_DOUBLE_STRING = /^"(?:[^"\\]|\\.)*"/
const RE_SINGLE_STRING = /^'(?:[^'\\]|\\.)*'/
const RE_TEMPLATE = /^`(?:[^`\\]|\\.)*`/
const RE_WORD = /^\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b/
const RE_NUMBER = /^\d+(?:\.\d+)?/

/**
 * Simple regex-based tokenizer for TypeScript/JavaScript and bash-style code.
 * Produces tokens for comments, strings, keywords, numbers, and plain text.
 */
export function tokenizeCode(code: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  const n = code.length

  while (i < n) {
    const rest = code.slice(i)

    const hashComment = rest.match(RE_HASH_COMMENT)
    if (hashComment) {
      tokens.push({ type: 'comment', text: hashComment[0] })
      i += hashComment[0].length
      continue
    }

    const slashComment = rest.match(RE_SLASH_COMMENT)
    if (slashComment) {
      tokens.push({ type: 'comment', text: slashComment[0] })
      i += slashComment[0].length
      continue
    }

    const str = rest.match(RE_DOUBLE_STRING) ?? rest.match(RE_SINGLE_STRING) ?? rest.match(RE_TEMPLATE)
    if (str) {
      tokens.push({ type: 'string', text: str[0] })
      i += str[0].length
      continue
    }

    const word = rest.match(RE_WORD)
    if (word) {
      const w = word[1]
      tokens.push({
        type: KEYWORDS.has(w) ? 'keyword' : 'plain',
        text: w,
      })
      i += w.length
      continue
    }

    if (rest.startsWith('=>')) {
      tokens.push({ type: 'keyword', text: '=>' })
      i += 2
      continue
    }

    const num = rest.match(RE_NUMBER)
    if (num) {
      tokens.push({ type: 'number', text: num[0] })
      i += num[0].length
      continue
    }

    tokens.push({ type: 'plain', text: rest[0] ?? '' })
    i += 1
  }

  return tokens
}
