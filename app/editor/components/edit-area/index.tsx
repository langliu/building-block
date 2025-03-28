import { createElement, useEffect } from 'react'
import { useComponentConfigStore } from '~/editor/stores/component-config'
import { type Component, useComponentsStore } from '~/editor/stores/components'

export function EditArea() {
  const { components, addComponent, deleteComponent } = useComponentsStore()
  const { registerComponent, componentConfig } = useComponentConfigStore()

  function renderComponents(components: Component[]): React.ReactNode {
    return components.map((component: Component) => {
      const config = componentConfig?.[component.name]

      if (!config?.component) {
        return null
      }

      return createElement(
        config.component,
        {
          key: component.id,
          ...config.defaultProps,
          ...component.props,
        },
        renderComponents(component.children || []),
      )
    })
  }

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
    <div className='h-full'>
      <pre>{JSON.stringify(components, null, 2)}</pre>
      {renderComponents(components)}
    </div>
  )
}
