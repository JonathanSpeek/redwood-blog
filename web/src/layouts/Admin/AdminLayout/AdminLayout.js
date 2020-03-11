import { useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { Link, routes } from '@redwoodjs/router'

const AdminLayout = (props) => {
  const [currentUser, setCurrentUser] = useState(netlifyIdentity.currentUser())
  const isAuthEnabled = true

  const signin = () => {
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => {
      setCurrentUser(user)
      netlifyIdentity.close()
    })
  }

  const signout = (event) => {
    event.preventDefault()

    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      setCurrentUser(null)
    })
  }

  return (
    <>
      <header>
        <Link to={routes.home()}>&laquo; Back to Site</Link>
        <h1>
          <Link to={routes.admin()}>Admin</Link>
        </h1>
        <nav>
          {currentUser ? (
            <a href="#" onClick={signout}>
              Sign Out
            </a>
          ) : (
            signin()
          )}
        </nav>
      </header>
      {!isAuthEnabled || currentUser ? (
        <main>
          <aside>
            <nav>
              <ul>
                <li>
                  <Link to={routes.admin()}>All Tips</Link>
                </li>
                <li className="mt-8">
                  <Link to={routes.adminNew()}>+ New 🔥Tip</Link>
                </li>
              </ul>
            </nav>
          </aside>
          <section>{props.children}</section>
        </main>
      ) : (
        <p>
          You must be{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              signin()
            }}
            className="underline"
          >
            signed in
          </a>{' '}
          to continue
        </p>
      )}
    </>
  )
}

export default AdminLayout
