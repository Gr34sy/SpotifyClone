import React from 'react';
import { Container } from 'react-bootstrap'
import useAuth from '../useAuth';

const AUTH_URL = "https:/accounts.spotify.com/authorize?client_id=e3ba317d53ef47979e15c96a2369f2c7&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Dashboard({code}){
    const accessToken  = useAuth(code)
    return(
        <Container>
            {code}
        </Container>
    )
}                           