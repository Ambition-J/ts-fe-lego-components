<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="handleClick"
  >
    {{ text || 123 }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useComponentComon from '../../hooks/useComponentComon'
import {
  TextDefaultProps,
  textStylePropNames,
  transformToComponentProps,
} from '../../const/defaultProps'
const defaultProps = transformToComponentProps(TextDefaultProps)

export default defineComponent({
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
    const { styleProps, handleClick } = useComponentComon(
      props,
      textStylePropNames
    )
    console.log(props)

    return {
      styleProps,
      handleClick,
    }
  },
})
</script>
<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>
