import React,{useState,useEffect} from 'react'
import './Navbar.css'
function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className={`nav ${show&&"nav__black"}`}>
            <img className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" />
            <img className="nav__avatar" src="https://i.pinimg.com/236x/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.jpg" alt="Netflix Logo" />
            
        </div>
    )
}

export default Navbar
