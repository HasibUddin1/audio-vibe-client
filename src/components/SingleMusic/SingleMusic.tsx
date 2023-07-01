import './SingleMusic.css'

const SingleMusic = ({ featuredMusic }) => {
    // console.log(featuredMusic)

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 hover-effect">
                    <img src={featuredMusic.image} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{featuredMusic.title}</h5>
                        <p className="card-text">Singer: {featuredMusic.artist}</p>
                        <p className="card-text"><small className="text-body-secondary">Released Year: {featuredMusic.year}</small></p>
                    </div>
                    <div className='text-end'>
                        <button className='btn btn-primary'>Add To Favorites</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMusic;