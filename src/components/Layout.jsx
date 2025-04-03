import { useState } from 'react'
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from '../context/AuthContext'

export default function Layout(props) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)

    const { globalUser, logout } = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            {globalUser ? (
                <button onClick={logout}>
                    <p>Logout</p>
                </button>
            ) : (
                <button onClick={() => { setShowModal(true) }}>
                    <p>Sign Up or Login</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
            )}
        </header>
    )

    

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by <a target="_blank" href="https://dobaolongicueltd.netlify.app">LD⭐️⭐️⭐️⭐️ </a><br />Check out the project on <a target="_black" href="https://www.github.com/JLTC3111">GitHub</a>!</p>
        </footer>
    )

    function handleCloseModal() {
        setShowModal(false)
    }
    
    return (
        <>
        
        <div className="image-slider">
            <div className="image-track">
             <img src="/images/coffee1.png" alt="Coffee 1" />
             <img src="/images/coffee2.png" alt="Coffee 2" />
             <img src="/images/coffee3.png" alt="Coffee 3" />
             <img src="/images/coffee4.png" alt="Coffee 4" />
             <img src="/images/coffee5.png" alt="Coffee 5" />
             <img src="/images/coffee6.png" alt="Coffee 6" />
             <img src="/images/coffee7.png" alt="Coffee 7" />
             <img src="/images/coffee8.png" alt="Coffee 8" />
             <img src="/images/coffee9.png" alt="Coffee 9" />
             <img src="/images/coffee10.png" alt="Coffee 10" />
             <img src="/images/coffee11.png" alt="Coffee 11" />  
             <img src="/images/coffee1.png" alt="Coffee 1" />
             <img src="/images/coffee2.png" alt="Coffee 2" />
             <img src="/images/coffee3.png" alt="Coffee 3" />
             <img src="/images/coffee4.png" alt="Coffee 4" />
             <img src="/images/coffee5.png" alt="Coffee 5" />
             <img src="/images/coffee6.png" alt="Coffee 6" />
             <img src="/images/coffee7.png" alt="Coffee 7" />
             <img src="/images/coffee8.png" alt="Coffee 8" />
             <img src="/images/coffee9.png" alt="Coffee 9" />
             <img src="/images/coffee10.png" alt="Coffee 10" />
             <img src="/images/coffee11.png" alt="Coffee 11" />            
            </div>
        </div>
            {showModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal} />
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
        
    )
}