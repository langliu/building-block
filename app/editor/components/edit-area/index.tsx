import { useEffect } from 'react'
import { useComponentsStore } from '~/editor/stores/components'

export function EditArea() {
  const { components, addComponent, deleteComponent } = useComponentsStore()

  useEffect(() => {
    addComponent(
      {
        children: [],
        id: 222,
        name: 'Container',
        props: {},
      },
      1,
    )
    addComponent(
      {
        children: [],
        id: 333,
        name: 'Video',
        props: {},
      },
      222,
    )
    setTimeout(() => {
      deleteComponent(333)
    }, 3000)
  }, [addComponent, deleteComponent])

  return (
    <div>
      <pre>{JSON.stringify(components, null, 2)}</pre>
    </div>
  )
}
