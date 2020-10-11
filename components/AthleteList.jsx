import { useFetch } from 'use-http'

const AthleteList = ({ eventId }) => {
    const {loading, error, data} = useFetch("http://localhost:5000/event", {
        body: {
            "eventId": eventId
        } 
    })
    return (
        <>
        {loading && <p>Loading... </p>}
        {error && <p>Error, reload page or contact admin</p>}
        {data && 
            <Container>

            </Container>
        }
        </>
    )
}
export default AthleteList