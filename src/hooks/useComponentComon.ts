import { computed } from 'vue'
import { pick } from 'lodash-es'

import { CommonComponentProps } from '../const/defaultProps'

const useComponentCommon = (
  props: Readonly<Partial<CommonComponentProps & { isEditing: boolean }>>,
  picks: string[]
) => {
  const styleProps = computed(() => pick(props, picks))
  // 处理点击事件，如果是不是编辑状态，则可以跳转
  const handleClick = () => {
    if (props.actionType === 'url' && props.url && !props.isEditing) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick,
  }
}
export default useComponentCommon
