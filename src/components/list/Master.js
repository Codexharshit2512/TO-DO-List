import React from 'react'
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleList from './VisibleList'


const Master = ()=> (

    <div>
        <AddTodo/>
        <VisibleList/>
        <Footer/>
    </div>
)

export default Master;