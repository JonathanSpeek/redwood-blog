import { Link, routes } from '@redwoodjs/router'

const HotTip = ({ tip }) => {
  return (
    <>
      {tip.body ? (
        <h2>{tip.title}</h2>
      ) : (
        <li>
          <Link key={tip.id} to={routes.hotTip({ id: tip.id })}>
            {tip.title}
          </Link>
        </li>
      )}
      {tip.body && (
        <div className="row">
          <div className="space-2">
            <p>{tip.body}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default HotTip
