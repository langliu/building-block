import { Welcome } from '~/welcome/welcome'

export function meta() {
  return [
    { title: '首页' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return <Welcome />
}
