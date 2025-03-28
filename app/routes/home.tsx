import { LowCodeEditor } from '~/editor'

export function meta() {
  return [
    { title: '首页' },
    { content: 'Welcome to React Router!', name: 'description' },
  ]
}

export default function Home() {
  return <LowCodeEditor />
}
