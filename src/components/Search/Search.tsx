

const Search = () => {
    return (
        <div className="vh-100">
            <div className="d-flex mt-5 justify-content-center mx-auto">
                <input className="form-control w-75" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
        </div>
    );
};

export default Search;