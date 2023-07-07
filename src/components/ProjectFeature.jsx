import React from 'react'
import { Link } from 'react-router-dom';
import './ProjectFeature.css'
function ProjectFeature() {
  return (
      <div className='container1'>
        <div className='container2'>


        <div className='image'>
        <Link to="/projects/todolist" >
        <img
        className='todolist__image'
        src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds" alt="ToDoList" />
        </Link>
        </div >
        <div className='image'>
        <Link to="/projects/cart" >
        <img
        className='cart__image'
        src="https://thumbs.dreamstime.com/b/shopping-cart-filled-groceries-16797625.jpg" alt="shoppingCart" />
        </Link>
        </div>
        <div className='image'>
        <Link to="/projects/api" >
        <img
        className='api__image'
        src="https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?s=612x612&w=0&k=20&c=V4hdG0NiqKhbk4VFwFktNs6bhq8yXo_Tqd__8vKZqdk=" alt="apiProjects" />
        </Link>
        </div>



        </div>
    </div>
  )
}

export default ProjectFeature