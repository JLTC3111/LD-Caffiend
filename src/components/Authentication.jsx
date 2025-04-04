import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
export default function Authentication(props) {
    const { handleCloseModal } = props
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [error, setError] = useState(null)
    
    const { signup, login } = useAuth()
   
    // Firebase error codes mapping to custom messages
    const firebaseErrorMessages = {
        'auth/invalid-email': 'The email address is not valid.',
        'auth/user-not-found': 'No user found with this email address.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/email-already-in-use': 'The email address is already in use.',
        'auth/weak-password': 'Password should be at least 6 characters.',
    };

    async function handleAuthenticate() {
        if (!email || !email.includes('@') || !password || password.length < 8 || isAuthenticating) { return }
        try {
            setIsAuthenticating(true)
            setError(null)

            if (isRegistration) {
                // register a user
                await signup(email, password)
            } else {
                // login a user
                await login(email, password)
            }
            handleCloseModal()
        } catch (err) {
            const firebaseErrorMessage = firebaseErrorMessages[err.code] || 'An error occurred. Please try again.'; // Map Firebase error to a custom message
            setError(firebaseErrorMessage); // Display the custom error message
        } finally {
            setIsAuthenticating(false)
        }

    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleCloseModal(); // Close the modal when ESC is pressed
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener("keydown", handleKeyDown);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []); 
    
    return (
        <>
        
            <h2 className="sign-up-text">{isRegistration ? 'Sign Up' : 'Login'}</h2>
            <p>{isRegistration ? 'Create an account!' : 'Sign in to your account!'}</p>
            {error && (
                <p className="error-message">❌ {error}</p> // Display custom error messages
            )}
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="********" type="password" />
            <button onClick={handleAuthenticate}><p>{isAuthenticating ? 'Authenticating...' : 'Submit'}</p></button>
            <hr />
            <div className="register-content">
                <p>{isRegistration ? 'Already have an account?' : 'Don\'t have an account?'}</p>
                <button onClick={() => { setIsRegistration(!isRegistration) }}><p>{isRegistration ? 'Sign in' : 'Sign up'}</p></button>
            </div>
        </>
    )
}