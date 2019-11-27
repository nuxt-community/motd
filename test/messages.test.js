import fs from 'fs'
import path from 'path'
import { matchersWithOptions } from 'jest-json-schema'
import { schema } from 'motd-json'

expect.extend(matchersWithOptions({
  verbose: true
}))

describe('schema validation', () => {
  const msgDir = path.resolve(__dirname, '../src/messages')
  const files = fs.readdirSync(msgDir).filter(f => f.endsWith('.json'))

  for (const file of files) {
    test(`file '${file}' is valid`, async () => {
      const data = await import(path.join(msgDir, file)).then(m => m.default || m)

      expect(data).toMatchSchema(schema)
    })
  }
})
