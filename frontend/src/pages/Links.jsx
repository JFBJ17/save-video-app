import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import List from "../components/List";
import { getLinks } from '../services/LinkService'

const Links = () => {

    const [links, setLinks] = useState([]);

    const loadLinks = async () => {
        const res = await getLinks();
        setLinks(res.data);
    }

    useEffect(() => {
        loadLinks();
    }, []);

    return (
        <div className="container p-4">
            <div className="row">
                {
                    (links.length !== 0) ?
                        links.map(link => {
                            return (
                                <List
                                    key={link.id}
                                    link={link}
                                    load={loadLinks}
                                />
                            )
                        })
                        :
                        <div className="col-md-4 mx-auto">
                            <div className="card card-body text-center">
                                <p>There are not links saved yet.</p>
                                <Link to="/links/add">Create One!</Link>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Links;
