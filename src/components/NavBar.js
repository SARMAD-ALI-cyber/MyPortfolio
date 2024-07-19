import { Link } from 'react-router-dom';



 function NavBar(){


    return(
        <div className='navbar'>
<div className='menu'>
    
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/models">Models</Link>
        <Link to="/contact">Contact</Link>
</div>
            

        </div>
  
    )
}
export {NavBar}

