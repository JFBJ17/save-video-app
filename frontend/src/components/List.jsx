import { timeAgo } from '../helpers/Timeago';
import { deleteLink } from '../services/LinkService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const List = (props) => {

    const handleDeleteLink = async (id) => {
        const res = await deleteLink(id);
        await props.load();
        toast.error(res.data.message);
    }

    return (
        <div className="col-md-3">
            <div className="card text-center">
                <div className="card-body">
                    <a href={props.link.url} target="_blank" rel="noreferrer">
                        <h3 className="card-title text-uppercase">{props.link.title}</h3>
                    </a>
                    <p className="m-2">{props.link.description}</p>
                    <p className="text-muted">{timeAgo(props.link.created_at)}</p>
                    <div className="d-grid gap-2 d-md-block">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteLink(props.link.id)}
                        >
                            Delete Link
                        </button>
                        <Link
                            to={`/links/edit/${props.link.id}`}
                            className="btn btn-secondary ms-lg-2"
                        >
                            Edit Link
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
