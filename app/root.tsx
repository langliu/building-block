import type { ReactNode } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'
import type { Route } from './+types/root'
import './app.css'

export const links: Route.LinksFunction = () => [
  { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
  {
    crossOrigin: 'anonymous',
    href: 'https://fonts.gstatic.com',
    rel: 'preconnect',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
    rel: 'stylesheet',
  },
]

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='zh'>
      <head>
        <title>积木</title>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Outlet />
    </DndProvider>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className='pt-16 p-4 container mx-auto'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full p-4 overflow-x-auto'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
