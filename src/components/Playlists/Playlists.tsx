import { Slide } from "react-awesome-reveal";
import './Playlists.css'
import { FaPlus } from "react-icons/fa";
import { useState } from 'react'
import { Button } from "react-bootstrap";
import CreatePlaylistModal from "../CreatePlaylistModal/CreatePlaylistModal";

const Playlists = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            <Slide>
                <h3 className="text-center fw-bold mt-3">Create Your Own Playlist</h3>
                <div className="text-center">
                    <Button variant="warning" className="fw-bold rounded-pill" onClick={() => setModalShow(true)}>
                        Create Your Own Playlist <FaPlus></FaPlus>
                    </Button>

                    <CreatePlaylistModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </Slide>
            <div className="w-75 mx-auto button-container mt-3">
                <div className="text-center">
                    <button className="btn w-50 btn-success rounded-pill fw-bold col-4">Favorites</button>
                </div>
            </div>
        </div>
    );
};

export default Playlists;