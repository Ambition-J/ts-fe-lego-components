import { App } from 'vue'

export {
  TextComponentProps,
  TextDefaultProps,
  textStylePropNames,
  ImageComponentProps,
  ImageDefaultProps,
  imageStylePropNames,
  ShapeComponentProps,
  shapeStylePropNames,
  ShapeDefaultProps,
  AllComponentProps,
} from './const/defaultProps'

import LText from './components/LText'

const components = [LText]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { LText, install }

export default {
  install,
}
