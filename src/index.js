import './scss/index.scss'
import {Excel} from '@core/components/excel/Excel'
import {Header} from '@core/components/header/Header'
import {Toolbar} from '@core/components/toolbar/Toolbar'
import {Formula} from '@core/components/formula/Formula'
import {Table} from '@core/components/table/Table'

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()

