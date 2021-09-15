import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { getLink, updateLink } from '../services/LinkService'
import { useEffect, useState } from 'react';
import LinkForm from '../components/LinkForm';

const UpdateLink = (props) => {

    const initialState = {
        title: '',
        url: '',
        description: ''
    }

    const history = useHistory();
    const [link, setLink] = useState(initialState);

    const idLink = props.match.params.id;

    const loadLink = async (id) => {
        const res = await getLink(id);
        setLink(res.data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await updateLink(idLink, link);
        toast.info(res.data.message);
        history.push('/links');
    }

    const handleChange = (e) => {
        setLink({
            ...link,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        loadLink(idLink);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <LinkForm
                        idLink={idLink}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        values={link}
                    />
                </div>
            </div>
        </div>
    );
}

export default UpdateLink;