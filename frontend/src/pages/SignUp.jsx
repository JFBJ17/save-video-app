import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { createUser } from '../services/authService';
import { toast } from 'react-toastify';

const SignUp = () => {

    const initialState = {
        fullname: '',
        username: '',
        password: ''
    }

    const history = useHistory();
    const [data, setData] = useState(initialState);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await createUser(data);
        setData(initialState);
        toast.success(res.data.message);
        return history.push("/signin");
    }

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>SignUp</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="fullname"
                                        placeholder="Full Name"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={data.fullname}
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={data.username}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={data.password}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-success">
                                        SignUp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
