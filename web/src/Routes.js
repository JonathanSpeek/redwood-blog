// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin" page={AdminTipsPage} name="admin" />
      <Route path="/admin/new" page={AdminNewTipPage} name="adminNew" />
      <Route
        path="/admin/{id:Int}/edit"
        page={AdminEditTipPage}
        name="adminEdit"
      />

      <Route path="/hot-tip/{id:Int}" page={HotTipPage} name="hotTip" />
      <Route path="/uses" page={UsesPage} name="uses" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
