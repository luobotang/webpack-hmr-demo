export function start(cb, start) {
  var timer
  var i = +start || 1

  function update() {
    cb(i++)
    timer = setTimeout(update, 1000) // 调整间隔时间
  }

  update()

  return function stop() {
    clearTimeout(timer)
  }
}