# Button


## 示例

::: 颜色
===
除默认`default`、主要`primary`、成功`success`、警告`warning`、错误`error`这5种基本类型以外，还可以设置`16进制`颜色
> 除`default`外，字体颜色都为白色

===
```html
<template>
	<div>
		<c-button>Default</c-button>
		<c-button color="primary">Primary</c-button>
		<c-button color="success">Success</c-button>
		<c-button color="warning">Warning</c-button>
		<c-button color="error">Error</c-button>
		<c-button color="#808">#808</c-button>
	</div>
</template>
```
:::

::: 幽灵模式
===
背景色为透明，字体颜色为`color`各自对应的颜色属性
===
```html
<template>
	<div>
		<c-button ghost>Default</c-button>
		<c-button ghost color="primary">Primary</c-button>
		<c-button ghost color="success">Success</c-button>
		<c-button ghost color="warning">Warning</c-button>
		<c-button ghost color="error">Error</c-button>
		<c-button ghost color="#808">#808</c-button>
	</div>
</template>
```
:::

::: 涟漪
===
默认情况下，按钮自带涟漪效果
===
```html
<template>
	<div>
		<c-button>Ripple</c-button>
		<c-button :ripple-visible="false">Without Ripple</c-button>
		<c-button color="primary" :ripple-visible="false">Without Ripple</c-button>
	</div>
</template>
```
:::


::: 图标
===
当设置`icon`属性时左边将出现对应的图标，参考[**Icon**](#/icon)
===
```html
<template>
	<div>
		<c-button icon="email"></c-button>
		<c-button icon="email">ICON</c-button>
		<c-button icon="email" color="primary">ICON</c-button>
		<c-button color="primary">
			<span>ICON</span>
			<c-icon icon="email"></c-icon>
		</c-button>
	</div>
</template>
```
:::


::: 不可用
===
当设置`disabled`属性为`true`时，按钮即为不可用状态
===
```html
<template>
	<div>
		<c-button color="primary" disabled>Disabled</c-button>
		<c-button disabled>Disabled</c-button>
	</div>
</template>
```
:::


::: 加载中
===
当设置`loading`属性为`true`时，则显示加载动画，且不再响应重复点击
===
```html
<template>
	<div>
		<c-button :loading="loading" @click="onClick">Loading</c-button>
	</div>
</template>
<script>
export default {
	data: () => ({
		loading: false
	}),
	methods: {
		onClick() {
			this.loading = true
			setTimeout(() => {
				this.loading = false
			}, 2000)
		}
	}
}
</script>
```
:::


::: 形状
===
通过`shape`设置按钮形状
===
```html
<template>
	<div>
		<c-button shape="circle">Circle</c-button>
		<c-button shape="circle" icon="email"></c-button>
		<c-button shape="circle" icon="email" color="primary"></c-button>
		<c-button shape="circle" icon="email" color="#808"></c-button>
	</div>
</template>
```
:::



## API


| 属性             | 说明                                       | 类型       | 默认值   |
| -------------- | ---------------------------------------- | -------- | ----- |
| color          | 设置按钮类型，可选值为 `primary` `success` `warning` `error` `ghost` `16进制` 或者不设 | string   | -     |
| type           | 设置 **button** 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string   | -     |
| icon           | 设置按钮的图标类型                                | string   | -     |
| shape          | 设置按钮形状，可选值为 `circle` 或者不设                | string   | -     |
| loading        | 设置按钮载入状态                                 | boolean  | false |
| ripple-visible | 设置按钮的涟漪显示                                | boolean  | true  |
| @click         | `click` 事件的 handler                      | function | -     |
