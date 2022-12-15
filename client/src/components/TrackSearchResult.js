import React from 'react';
import { Container } from 'react-bootstrap';

export default function TrackSearchResult({track, chooseTrack}){

    function handlePlay(){
        chooseTrack(track)
    }

    return(
        <Container className='d-flex m-2 align-items-center' style={{cursor: 'pointer'}}
        onClick={handlePlay}>
            <img src={track.albumUrl} style={{height: '64px', width: '64px'}}/>
            <div className='ms-3'>
                <div>{track.title}</div>
                <div className='text-muted'>
                    {track.artist}
                </div>
            </div>
        </Container>
    )
}