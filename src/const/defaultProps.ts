import { mapValues, without } from 'lodash-es'

// 定义形状属性和一些公共事件
export interface CommonComponentProps {
  // actions
  actionType: string;
  url: string;
  // size
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border Type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: string;
  // position and x,y
  position: string;
  left: string;
  top: string;
  right: string;
}
export const CommonDefaultProps: CommonComponentProps = {
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
}

// 文字组件的专有属性
export interface TextComponentProps extends CommonComponentProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}

//  定义文字的默认属性
export const TextDefaultProps: TextComponentProps = {
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
}

// 图片组件的专有属性
export interface ImageComponentProps extends CommonComponentProps {
  src: string;
}

//  定义图片的默认属性
export const ImageDefaultProps: ImageComponentProps = {
  src: '',
  ...CommonDefaultProps,
}

// 图形组件的专有属性
export interface ShapeComponentProps extends CommonComponentProps {
  backgroundColor: string;
}

//  定义图片的默认属性
export const ShapeDefaultProps: ShapeComponentProps = {
  backgroundColor: '',
  ...CommonDefaultProps,
}

// 组件是否是编辑状态， 编辑状态时 某些action 是禁止直行的
export const isEditingProp = {
  isEditing: {
    type: Boolean,
    default: () => false,
  },
}

// 定义 text的style属性
export const textStylePropNames = without(
  Object.keys(TextDefaultProps),
  'actionType',
  'url',
  'text'
)

// 定义image的style属性
export const imageStylePropNames = without(
  Object.keys(ImageDefaultProps),
  'src',
  'actionType',
  'url'
)

// 定义shape的style属性
export const shapeStylePropNames = without(
  Object.keys(ShapeDefaultProps),
  'actionType',
  'url'
)

// 定义组件的所有属性
export type AllComponentProps = TextComponentProps &
  ImageComponentProps &
  ShapeComponentProps

export const transformToComponentProps = <T extends {}>(props: T) => {
  const mapProps = mapValues(props, (item) => {
    return {
      type: (item as any).constructor as StringConstructor,
      default: item,
    }
  })
  return {
    ...mapProps,
    ...isEditingProp,
  }
}
