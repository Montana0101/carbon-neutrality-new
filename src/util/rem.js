function font() {
   document.documentElement.style.fontSize = document.documentElement.clientWidth / 12.8 + 'px'
}

//  iframe比例
export function screen_scale() {
   let w = (document.documentElement.clientWidth / 1380).toFixed(2)
   let w_reverse = (1380 / document.documentElement.clientWidth).toFixed(2)
   return [w, w_reverse]
}

font()

window.onresize = font