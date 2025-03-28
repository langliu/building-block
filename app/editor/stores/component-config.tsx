import type { JSX } from 'react'
import { create } from 'zustand'
import { Button, Container, Page } from '~/editor/materials'

export interface ComponentConfig {
  name: string
  defaultProps: Record<string, unknown>
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  component: (props: any) => JSX.Element
}

interface State {
  componentConfig: { [key: string]: ComponentConfig }
}

interface Action {
  registerComponent: (name: string, componentConfig: ComponentConfig) => void
}

export const useComponentConfigStore = create<State & Action>((set) => ({
  componentConfig: {
    Button: {
      component: Button,
      defaultProps: {
        text: '按钮',
        type: 'primary',
      },
      name: 'Button',
    },
    Container: {
      component: Container,
      defaultProps: {},
      name: 'Container',
    },
    Page: {
      component: Page,
      defaultProps: {},
      name: 'Page',
    },
  },
  registerComponent: (name, componentConfig) =>
    set((state) => {
      return {
        ...state,
        componentConfig: {
          ...state.componentConfig,
          [name]: componentConfig,
        },
      }
    }),
}))
