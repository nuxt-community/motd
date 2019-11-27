const messages = require('./src/messages')

export default {
  plugins: {
    replace: {
      delimiters: ['', ''],
      values: {
        [`import data from './messages'`]: `const data = JSON.parse(\`${JSON.stringify(messages)}\`)`
      }
    }
  }
}
