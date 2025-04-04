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
            <div className="image-slider">
            <div className="image-track">
             <img src="/images/coffee1.png" alt="Coffee 1" onClick={() => handleImageClick('/images/coffee1.png')} />
             <img src="/images/coffee2.png" alt="Coffee 2" onClick={() => handleImageClick('/images/coffee2.png')} />
             <img src="/images/coffee3.png" alt="Coffee 3" onClick={() => handleImageClick('/images/coffee3.png')}/>
             <img src="/images/coffee4.png" alt="Coffee 4" onClick={() => handleImageClick('/images/coffee4.png')}/>
             <img src="/images/coffee5.png" alt="Coffee 5" onClick={() => handleImageClick('/images/coffee5.png')}/>
             <img src="/images/coffee6.png" alt="Coffee 6" onClick={() => handleImageClick('/images/coffee6.png')}/>
             <img src="/images/coffee7.png" alt="Coffee 7" onClick={() => handleImageClick('/images/coffee7.png')}/>
             <img src="/images/coffee8.png" alt="Coffee 8" onClick={() => handleImageClick('/images/coffee8.png')}/>
             <img src="/images/coffee9.png" alt="Coffee 9" onClick={() => handleImageClick('/images/coffee9.png')}/>
             <img src="/images/coffee10.png" alt="Coffee 10" onClick={() => handleImageClick('/images/coffee10.png')}/>
             <img src="/images/coffee11.png" alt="Coffee 11" onClick={() => handleImageClick('/images/coffee11.png')}/> 
             <img src="/images/coffee1.png" alt="Coffee 1" onClick={() => handleImageClick('/images/coffee1.png')} />
             <img src="/images/coffee2.png" alt="Coffee 2" onClick={() => handleImageClick('/images/coffee2.png')} />
             <img src="/images/coffee3.png" alt="Coffee 3" onClick={() => handleImageClick('/images/coffee3.png')}/>
             <img src="/images/coffee4.png" alt="Coffee 4" onClick={() => handleImageClick('/images/coffee4.png')}/>
             <img src="/images/coffee5.png" alt="Coffee 5" onClick={() => handleImageClick('/images/coffee5.png')}/>
             <img src="/images/coffee6.png" alt="Coffee 6" onClick={() => handleImageClick('/images/coffee6.png')}/>
             <img src="/images/coffee7.png" alt="Coffee 7" onClick={() => handleImageClick('/images/coffee7.png')}/>
             <img src="/images/coffee8.png" alt="Coffee 8" onClick={() => handleImageClick('/images/coffee8.png')}/>
             <img src="/images/coffee9.png" alt="Coffee 9" onClick={() => handleImageClick('/images/coffee9.png')}/>
             <img src="/images/coffee10.png" alt="Coffee 10" onClick={() => handleImageClick('/images/coffee10.png')}/>
             <img src="/images/coffee11.png" alt="Coffee 11" onClick={() => handleImageClick('/images/coffee11.png')}/>              
            </div>
        </div>
            <p><span className="text-gradient">Caffiend</span> was made by <a target="_blank" href="https://dobaolongicueltd.netlify.app">LD⭐️⭐️⭐️⭐️ </a><br />Check out the project on <a target="_black" href="https://www.github.com/JLTC3111">GitHub</a>!</p>
        </footer>
    )

    const handleCloseImageModal = () => {
        setShowImageModal(false);
        setSelectedImage(null); // Reset the selected image
      };
    
    function handleCloseModal() {
        setShowAuthModal(false)
    }

    // Handle image click to open modal
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc)
        setShowImageModal(true) // Show the modal with the selected image
    }
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