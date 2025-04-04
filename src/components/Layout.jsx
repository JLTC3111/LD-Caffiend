import { useState } from 'react'
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from '../context/AuthContext'

export default function Layout(props) {
    const { children } = props

    const [showImageModal, setShowImageModal] = useState(false)
    const [showAuthModal, setShowAuthModal] = useState(false);

    const { globalUser, logout } = useAuth()

    const [selectedImage, setSelectedImage] = useState(null)

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
                <button onClick={() => { setShowAuthModal(true) }}>
                    <p>Sign Up or Login</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
            )}
        </header>
        
    )
    const footer = (
        <footer>
            <>
            <p><span className="text-gradient">Caffiend</span> was made by <a target="_blank" href="https://dobaolongicueltd.netlify.app">LD⭐️⭐️⭐️⭐️ </a><br />Check out the project on <a target="_black" href="https://www.github.com/JLTC3111">GitHub</a>!</p>
            </>
    )   </footer>)
    return ( 
       
        <>
    
            {showAuthModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal} />   
                </Modal>

            )}
            {showImageModal && selectedImage && (
                <Modal handleCloseModal={handleCloseImageModal}>
                    <div className="modal-content">
                      <img src={selectedImage} alt="Full-size" />
                    </div>
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