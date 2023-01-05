
import { ModuleOptions, ModuleHooks } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['tailwindcss']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['tailwindcss']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
}


export { default } from './module'
