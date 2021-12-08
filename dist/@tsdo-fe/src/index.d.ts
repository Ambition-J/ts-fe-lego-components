import { App } from 'vue';
export { TextComponentProps, TextDefaultProps, textStylePropNames, ImageComponentProps, ImageDefaultProps, imageStylePropNames, ShapeComponentProps, shapeStylePropNames, ShapeDefaultProps, AllComponentProps, } from './const/defaultProps';
import LText from './components/LText';
declare const install: (app: App) => void;
export { LText, install };
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
