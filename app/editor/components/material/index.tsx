import { useMemo } from 'react'
import { MaterialItem } from '~/editor/components/material-item'
import { useComponentConfigStore } from '~/editor/stores/component-config'

export function Material() {
  const { componentConfig } = useComponentConfigStore()

  const components = useMemo(() => {
    return Object.values(componentConfig)
  }, [componentConfig])

  return (
    <div>
      {components.map((item, index) => {
        const key = item.name + index
        return <MaterialItem key={key} name={item.name} />
      })}
    </div>
  )
}
