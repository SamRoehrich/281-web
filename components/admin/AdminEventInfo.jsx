// contains all event info besides athlete list
import Container from "../styled/Container"
import Row from "../styled/Row"
import Button from "../styled/Button"
import Text from "../styled/Text"
import Column from "../styled/Column"
import AthleteList from "../AthleteList"
import AdminEventControls from "./AdminEventControls"
import GeneralEventInfo from "../GeneralEventInfo"

const AdminEventInfo = () => {
    
    return (
        <Container width="75" height="75vh">
            <GeneralEventInfo />
            <Container row width="75" spaceBetween>
                <Column width="30">
                    <Text>Event ID: </Text>
                    <Text>Score Keeper Code: </Text>
                    <Text>Admin Code: </Text>
                    <Text>Stacks: </Text>
                </Column>
                <Column width="30">
                    <Text>Add athlete </Text>
                    <Text>Remove athlete </Text>
                    <Text>Edit Score</Text>
                    <Text>Delete Evetn</Text>
                </Column>
                <Column width="30">
                    <Text>Start Round</Text>
                    <Text>Pause Round</Text>
                    <Text>End Round</Text>
                    <Text>Print Results</Text>
                </Column>
            </Container>
            <AthleteList/>
        </Container>
    )
}
export default AdminEventInfo