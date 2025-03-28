import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import { EditArea } from '~/editor/components/edit-area'
import { Header } from '~/editor/components/header'
import { Material } from '~/editor/components/material'
import { Setting } from '~/editor/components/setting'

export function LowCodeEditor() {
  return (
    <div className='h-[100vh] flex flex-col'>
      <div className='h-[60px] flex items-center border-b-[1px] border-[#000]'>
        <Header />
      </div>
      <Allotment>
        <Allotment.Pane maxSize={300} minSize={200} preferredSize={240}>
          <Material />
        </Allotment.Pane>
        <Allotment.Pane>
          <EditArea />
        </Allotment.Pane>
        <Allotment.Pane maxSize={500} minSize={300} preferredSize={300}>
          <Setting />
        </Allotment.Pane>
      </Allotment>
    </div>
  )
}
