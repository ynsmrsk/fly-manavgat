import Lenis from 'https://cdn.jsdelivr.net/npm/lenis@1.3.4/+esm'

document.documentElement.classList.add('js-ready')

new Lenis({
  autoRaf: true,
  anchors: true
})
