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
      <Route path="/hot-tip/{id:Int}" page={HotTipPage} name="hotTip" />
      <Route path="/admin/tips" page={TipsPage} name="tips" />
      <Route path="/admin/tips/{id:Int}" page={TipPage} name="tip" />
      <Route path="/admin/tips/new" page={NewTipPage} name="newTip" />
      <Route
        path="/admin/tips/{id:Int}/edit"
        page={EditTipPage}
        name="editTip"
      />
      <Route path="/uses" page={UsesPage} name="uses" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
