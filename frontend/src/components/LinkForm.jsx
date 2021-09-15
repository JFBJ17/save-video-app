

const LinkForm = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={props.onSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Title"
                            onChange={props.onChange}
                            value={props.values.title}
                            autoFocus
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="url"
                            name="url"
                            className="form-control"
                            placeholder="URL"
                            onChange={props.onChange}
                            value={props.values.url}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            name="description"
                            rows="2"
                            className="form-control"
                            placeholder="Description"
                            onChange={props.onChange}
                            value={props.values.description}
                        ></textarea>
                    </div>
                    <div className="d-grid">
                        {
                            (props.idLink) ?
                                <button className="btn btn-primary">Update</button>
                                :
                                <button className="btn btn-success">Save</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LinkForm;