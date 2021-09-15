import { useState } from 'react';
import { addLink } from '../services/LinkService';
import { toast } from 'react-toastify'
import LinkForm from '../components/LinkForm';

const AddLink = () => {

    const initialState = {
        title: '',
        url: '',
        description: ''
    }

    const [link, setLink] = useState(initialState);

    const handleChange = (e) => {
        setLink({
            ...link,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await addLink(link);
        toast.success(res.data.message);
        setLink(initialState);
    }

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <LinkForm
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        values={link}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddLink;