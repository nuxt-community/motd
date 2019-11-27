import { Nuxt } from 'nuxt'

export function getModuleNames (config = {}) {
  const moduleNames = []

  for (const moduleType of ['buildModules', 'modules']) {
    if (!Array.isArray(config[moduleType])) {
      continue
    }

    for (const module of config[moduleType]) {
      if (typeof module === 'string') {
        moduleNames.push(module)
        continue
      }

      if (Array.isArray(module)) {
        moduleNames.push(module[0])
      }
    }
  }

  return moduleNames
}

export function createConfig (config) {
  return {
    tags: {
      version: Nuxt.version,
      modules: getModuleNames(config)
    }
  }
}
