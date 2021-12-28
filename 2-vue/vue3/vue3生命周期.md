# vue3的生命周期

## vue2	          vue3	            vue2和3的部分差异比较
  - beforeCreate	setup	            setup(): 开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method 
  - created	      setup
  - beforeMount	  onBeforeMount	    组件挂载到节点上之前执行的函数
  - mounted	      onMounted	        组件挂载完成后执行的函数。
  - beforeUpdate	onBeforeUpdate	  组件更新之前执行的函数。
  - updated	      onUpdated	        组件更新完成之后执行的函数。
  - beforeDestroy	onBeforeUnmount	  卸载之前执行的函数。相比改名了
  - destroyed	    onUnmounted	      卸载之后执行的函数。
  - activated	    onActivated	      被包含在中的组件，会多出两个生命周期钩子函数。被激活时执行
  - deactivated	  onDeactivated	    比如从 A 组件，切换到 B 组件，A 组件消失时执行。
  - errorCaptured	onErrorCaptured	  当捕获一个来自子孙组件的异常时激活钩子函数。
  -               onRenderTracked	  vue3新增的周期用于开发调试使用的
  -               onRenderTriggered	vue3新增的周期用于开发调试使用的