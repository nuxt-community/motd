import { filter, motd } from 'motd-json'
import { createConfig } from './config'
import data from './messages'

const createGenerator = (config) => {
  const messages = filter(data, createConfig(config))

  const motdGenerator = () => motd(messages)
  return motdGenerator
}

export default createGenerator
