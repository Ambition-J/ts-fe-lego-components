
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import json from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from '../package.json'

const file = type => `dist/${name}.${type}.js`


const overrides = {
  compilerOptions: {
    declaration: true
  }
}
export { name, file }
export default {
  input: 'src/index.ts',
  output: {
    file: file('esm'),
    name,
    format: 'es'
  },
  plugins: [
    json(),
    vue(),
    typescript({
      tsconfigOverride: overrides
    }),
    css({ output: 'bundle.css' }),
    // rollup只打包相对路径的代码。绝对路径的会被忽略，一般情况下就是安装的node_modules中的模块。
    nodeResolve()
  ],
  // 此处就是不把这些包打包到最终文件中去。
  external: [
    'lodash-es',
    'vue'
  ]
}