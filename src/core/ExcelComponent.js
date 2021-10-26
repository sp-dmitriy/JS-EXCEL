import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubs = []
    this.prepare()
  }
  // Настройка компонета
  prepare() {}

  toHTML() {
    return ''
  }
  // Уведомляем слушателей о событии event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }
  // Подписка на событие
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubs.push(unsub)
  }
  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
    this.unsubs.forEach(unsub => unsub())
  }
}
