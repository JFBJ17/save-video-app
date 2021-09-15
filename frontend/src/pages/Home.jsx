import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container-home">
            <div className="content-title">
                <h1 className="fw-bold" style={{fontSize: "5.5rem"}}>Favorite Links</h1>
                <span className="fs-2">Store your favorite Website's Links</span>
                <Link to="/signup" className="btn btn-primary mt-5 py-2 fw-bold">Let's get started</Link>
            </div>
        </div>
    );
}

export default Home;