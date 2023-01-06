import { NuxtOptions, Nuxt } from '@nuxt/schema';
import { LoadNuxtOptions } from '@nuxt/kit';

declare function createNuxt(options: NuxtOptions): Nuxt;
declare function loadNuxt(opts: LoadNuxtOptions): Promise<Nuxt>;

declare function build(nuxt: Nuxt): Promise<void>;

export { build, createNuxt, loadNuxt };
