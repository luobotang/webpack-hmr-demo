import { start } from './timer'
import { message } from './foo'

var current = 0
var root = document.getElementById('root')
start(onUpdate, current)

console.log(message)

function onUpdate(i) {
  current = i
  root.textContent = '#' + i
}

if (module.hot) {
  module.hot.accept('./timer', function() {
    stop()
    stop = start(onUpdate, current)
  })
  module.hot.decline('./foo')
}