import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CreateBlog from '../components/Blog/CreateBlog';
import UpdateBlog from '../components/Blog/UpdateBlog';
import CreateCategory from '../components/Category/CreateCategory';
import FaqCreate from '../components/Faq/FaqCreate';
import FaqUpdate from '../components/Faq/FaqUpdate';
import CreateProduct from '../components/Product/CreateProduct';
import UpdateProduct from '../components/Product/UpdateProduct';
import BlogScreen from '../pages/BlogScreen';
import CategoryScreen from '../pages/CategoryScreen';
import Dashboard from '../pages/Dashboard';
import FaqScreen from '../pages/FaqScreen';
import Home from '../pages/Home';
import OrderScreen from '../pages/OrderScreen';
import ProductScreen from '../pages/ProductScreen';
import UpdateCategory from './../components/Category/UpdateCategory';
import CommentScreen from './../pages/CommentScreen';

const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/category' element={<CategoryScreen />}/>
        <Route path='/category/create' element={<CreateCategory />}/>
        <Route path='/category/update/:id' element={<UpdateCategory />}/>
        <Route path='/product' element={<ProductScreen />}/>
        <Route path='/product/create' element={<CreateProduct />}/>
        <Route path='/product/update/:id' element={<UpdateProduct />}/>
        <Route path='/blog' element={<BlogScreen />}/>
        <Route path='/blog/create' element={<CreateBlog />}/>
        <Route path='/blog/update/:id' element={<UpdateBlog/>}/>
        <Route path='/order' element={<OrderScreen />}/>
        <Route path='/comment' element={<CommentScreen />}/>
        <Route path='/faq' element={<FaqScreen />}/>
        <Route path='/faq/create' element={<FaqCreate />}/>
        <Route path='/faq/update/:id' element={<FaqUpdate/>}/>
    </Routes>
  )
}

export default MyRouter