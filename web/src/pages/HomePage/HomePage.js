import BlogLayout from 'src/layouts/BlogLayout'
import HotTipsCell from 'src/components/HotTipsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <div className="row" id="about">
        <div className="space-75">
          <h1>
            {`I'm a Developer & Musician from Colorado, USA. Currently building
        the future of the web at `}
            <a
              target="_blank"
              href="https://www.netlify.com"
              rel="noopener noreferrer"
            >
              netlify
            </a>
            .
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="space-1">
          <h2 className="bold">{`latest hot tips:`}</h2>
        </div>
      </div>

      <div className="row">
        <div className="space-1">
          <ul className="link-list">
            <li>
              <HotTipsCell />
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="space-1">
          <h2 className="bold">{`stuff i've made recently:`}</h2>
        </div>
      </div>

      <div className="row">
        <div className="space-1">
          <ul className="link-list">
            <li>
              <a
                target="_blank"
                href="https://confessions.tech"
                rel="noopener noreferrer"
              >
                tech confessions
              </a>{' '}
              - confess your tech sins
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/jonathanspeek/spacegrid"
                rel="noopener noreferrer"
              >
                spacegrid css
              </a>{' '}
              - minimalist grid
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/JonathanSpeek/palenight-iterm2"
                rel="noopener noreferrer"
              >
                palenight
              </a>{' '}
              - theme for iterm 2
            </li>
            <li>
              <a
                target="_blank"
                href="https://get-shit-done.netlify.com/"
                rel="noopener noreferrer"
              >
                get shit done
              </a>{' '}
              - minimalist todo app
            </li>
            <li>
              <a
                target="_blank"
                href="http://devcloud1.herokuapp.com/"
                rel="noopener noreferrer"
              >
                devcloud
              </a>{' '}
              - storage with markdown notes
            </li>
            <li>
              <a
                target="_blank"
                href="https://speek.design/contrast"
                rel="noopener noreferrer"
              >
                contrast
              </a>{' '}
              - curated high contrast colors
            </li>
            <li>
              <a
                target="_blank"
                href="https://chrome.google.com/webstore/detail/mantra-tab/jcmkheefbgnhehdiodhgclienpmjomng?hl=en-US"
                rel="noopener noreferrer"
              >
                mantratab
              </a>{' '}
              - chrome extension
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/JonathanSpeek/1989-syntax"
                rel="noopener noreferrer"
              >
                1989-syntax
              </a>{' '}
              - syntax theme for atom
            </li>
          </ul>
        </div>
      </div>
      <div data-netlify-identity-button>Login with Netlify Identity</div>
    </BlogLayout>
  )
}

export default HomePage
