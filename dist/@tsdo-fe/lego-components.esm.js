import { without, mapValues, pick } from 'lodash-es';
import { computed, defineComponent, openBlock, createBlock, resolveDynamicComponent, normalizeStyle, withCtx, createTextVNode, toDisplayString } from 'vue';

const CommonDefaultProps = {
    // actions
    actionType: '',
    url: '',
    // size
    height: '',
    width: '373px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // shadow and opacity
    boxShadow: '0 0 0 #000000',
    opacity: '1',
    // position and x,y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0',
};
//  定义文字的默认属性
const TextDefaultProps = {
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    ...CommonDefaultProps,
};
//  定义图片的默认属性
const ImageDefaultProps = {
    src: '',
    ...CommonDefaultProps,
};
//  定义图片的默认属性
const ShapeDefaultProps = {
    backgroundColor: '',
    ...CommonDefaultProps,
};
// 组件是否是编辑状态， 编辑状态时 某些action 是禁止直行的
const isEditingProp = {
    isEditing: {
        type: Boolean,
        default: () => false,
    },
};
// 定义 text的style属性
const textStylePropNames = without(Object.keys(TextDefaultProps), 'actionType', 'url', 'text');
// 定义image的style属性
const imageStylePropNames = without(Object.keys(ImageDefaultProps), 'src', 'actionType', 'url');
// 定义shape的style属性
const shapeStylePropNames = without(Object.keys(ShapeDefaultProps), 'actionType', 'url');
const transformToComponentProps = (props) => {
    const mapProps = mapValues(props, (item) => {
        return {
            type: item.constructor,
            default: item,
        };
    });
    return {
        ...mapProps,
        ...isEditingProp,
    };
};

const useComponentCommon = (props, picks) => {
    const styleProps = computed(() => pick(props, picks));
    // 处理点击事件，如果是不是编辑状态，则可以跳转
    const handleClick = () => {
        if (props.actionType === 'url' && props.url && !props.isEditing) {
            window.location.href = props.url;
        }
    };
    return {
        styleProps,
        handleClick,
    };
};

const defaultProps = transformToComponentProps(TextDefaultProps);
var script = defineComponent({
    name: 'l-text',
    props: {
        tag: {
            type: String,
            default: () => 'div',
        },
        ...defaultProps,
    },
    setup(props) {
        // 重用并简化 抽离并获取 styleProps
        const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames);
        console.log(props);
        return {
            styleProps,
            handleClick,
        };
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    style: normalizeStyle(_ctx.styleProps),
    class: "l-text-component",
    onClick: _ctx.handleClick
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.text || 123), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["style", "onClick"]))
}

script.render = render;
script.__scopeId = "data-v-6bf95b7a";
script.__file = "src/components/LText/LText.vue";

// Ltext 需要导出一个 install 方法，此方法在组件被use的时候执行，并传入 vue 的实例。
script.install = (app) => {
    app.component(script.name, script);
};

const components = [script];
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
var index = {
    install,
};

export { ImageDefaultProps, script as LText, ShapeDefaultProps, TextDefaultProps, index as default, imageStylePropNames, install, shapeStylePropNames, textStylePropNames };
