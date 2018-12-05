import { start } from './timer'
import { message } from './foo'

var current = 0
if (module.hot && module.hot.data) {
  current = module.hot.data.current
}
var root = document.getElementById('root')
start(onUpdate, current)

console.log(message)

function onUpdate(i) {
  current = i
  root.textContent = '#' + i // 修改数值渲染
}

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(data => {
    data.current = current
    stop()
  })

  module.hot.accept('./timer', function() {
    stop()
    stop = start(onUpdate, current)
  })
  module.hot.decline('./foo')
}