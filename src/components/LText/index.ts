import { App } from 'vue'
import LText from './LText.vue'

// Ltext 需要导出一个 install 方法，此方法在组件被use的时候执行，并传入 vue 的实例。

LText.install = (app: App) => {
  app.component(LText.name, LText)
}
export default LText
