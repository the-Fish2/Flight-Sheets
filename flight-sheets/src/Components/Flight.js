const Flight = ({ flight }) => {
    return (
        <li> {flight.id}, {flight.mass}, {flight.altitude} </li>
    )
}

export default Flight