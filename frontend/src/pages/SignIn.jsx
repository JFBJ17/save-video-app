import { login } from '../services/authService';
import { useState } from 'react';
import { toast } from 'react-toastify';


const SignIn = () => {

    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(data);
        if (res.data.success)
            return window.location.href = "/profile";
        return toast.error(res.data);
    }

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>SignIn</h3>
                        </div>
                        <div className="card-body">
                            <img
                                src="https://picsum.photos/200"
                                alt="logo"
                                className="card-img-top w-50 rounded-circle m-2"
                            />
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary">
                                        SignIn
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

export default SignIn;