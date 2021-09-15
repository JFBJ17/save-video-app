import { Link } from 'react-router-dom';
import { useUsuario } from '../context/usuario-context';

const Profile = () => {

    const { usuario } = useUsuario();

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card text-center">
                        <div className="card-body">
                            {
                                usuario &&
                                <>
                                    <h3>{`Welcome ${usuario.fullname}`}</h3>
                                    <h4>{usuario.username}</h4>
                                </>
                            }
                            <Link
                                to="/links"
                                className="btn btn-primary m-4"
                            >
                                Save your Links
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;