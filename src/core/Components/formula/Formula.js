import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '../../dom'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }
  init() {
    super.init()
    this.$formula = this.$root.find('#formula')
    this.$on('table:select', $cell => {
      this.$formula.text($cell.text())
    })
    this.$on('table:input', $cell => {
      this.$formula.text($cell.text())
    })
  }
  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" id="formula" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text())
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab']
    const {key} = event
    if (key.includes(keys)) {
      event.preventDefault()
      this.$emit('formula:done')
    }
  }
}
