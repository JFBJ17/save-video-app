import Navbar from '../partials/Navbar';
import { ToastContainer } from 'react-toastify'

const Layout = (props) => {
    return(
        <>
            <Navbar />
            <ToastContainer />
            {props.children}
        </>
    );
}

export default Layout;