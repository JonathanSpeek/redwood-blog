import { Link, routes } from '@redwoodjs/router'

const BlogLayout = (props) => {
  return (
    <>
      <header>
        <a href="#main" id="skip-link">
          Skip to main content
        </a>

        <nav className="row" role="navigation">
          <div className="space-1">
            <p className="bold">
              <Link to={routes.home()}>jonathan speek</Link>
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/JonathanSpeek"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://dev.to/jonathanspeek"
                  rel="noopener noreferrer"
                >
                  dev.to
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/JonSpeek"
                  rel="noopener noreferrer"
                >
                  twitter
                </a>
              </li>
              <li>
                <Link to={routes.uses()}>uses</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main id="main" role="main" tabIndex="-1">
        {props.children}
      </main>
    </>
  )
}

export default BlogLayout
