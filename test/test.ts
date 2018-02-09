import { expect, tap } from 'tapbundle'
import * as antivirus from '../ts/index'

tap.test('first test', async () => {
  console.log(antivirus.standardExport)
})

tap.start()
