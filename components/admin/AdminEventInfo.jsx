// contains all event info besides athlete list

import Container from "../styled/Container"
import Row from "../styled/Row"
import Text from "../styled/Text"
import AthleteList from "../AthleteList"
import AdminEventControls from "./AdminEventControls"

const AdminEventInfo = () => {
    
    return (
        <Container>
            <Row>
                <Text>Event Name: </Text>
                <Text>Event Location: </Text>
                <Text>Event Date: </Text>
            </Row>
            <Row>
                <Text>Score Keeper Code: </Text>
                <Text>Admin Code: </Text>
            </Row>
            <AthleteList eventId={12} />
            <AdminEventControls event={12} />
        </Container>
    )
}
export default AdminEventInfo