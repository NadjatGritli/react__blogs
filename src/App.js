import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import Mainlayout from './layout/Mainlayout';
import Home from './Pages/Home';
import Listing from './Pages/blogs/Listing';

import {
  EditLoader,
  blogDetailsLoader,
  blogsLoader,
  deleteBlog,
  tagsLoader
} from './allLoaders/blogsLoader';
import Details from './Pages/blogs/Details';
import Edit from './Pages/blogs/Edit';
import Tags from './Pages/blogs/Tags';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Mainlayout />}>
      <Route index element={<Home />} />
      <Route path='blogs' action={deleteBlog} >
        <Route index element={<Listing />} loader={blogsLoader} />
        <Route path='tags' element={<Tags />} id='tagsList' loader={tagsLoader} />
        <Route path='edit/:id' element={<Edit />} action={EditLoader} loader={blogDetailsLoader} />
        <Route path=':id' element={<Details />} loader={blogDetailsLoader} />
      </Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
    // <div className="App">


    // </div>
  );
}

export default App;
