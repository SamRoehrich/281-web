const { default: Text } = require("./styled/Text")
import Container from '../components/styled/Container'

const GeneralEventInfo = () => {
    
    return (
        <Container height="8%" row spaceBetween center>
            <Text>Event Name: </Text>
            <Text>Event Location: </Text>
            <Text>Event Date: </Text>
        </Container>
    )
}
export default GeneralEventInfo