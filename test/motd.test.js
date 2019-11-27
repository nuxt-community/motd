import motd from '../src'
import * as config from '../src/config'

jest.mock('nuxt', () => ({
  Nuxt: {
    version: 'wowsie'
  }
}))

describe('motd', () => {
  test('returns any motd', () => {
    expect(typeof motd()()).toBe('string')
  })

  test('returns any motd', () => {
    const nuxtConfig = {
      buildModules: [
        'buildModule1',
        ['buildModule2', {}],
        function () {}
      ],
      modules: [
        'module1',
        ['module2', {}],
        function () {}
      ]
    }

    expect(config.createConfig(nuxtConfig)).toMatchSnapshot()
  })
})
