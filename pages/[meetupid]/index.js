const { Fragment } = require("react");
import Meetupdetails from "@/components/meetups/Meetupdetails";

function MeetupDetails(){
    return(
        <Fragment>
            <Meetupdetails 
            tittle="A First Meetup"
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
            address="Some address 5,12345 Some City"
            description="This is a First meetup"
            />
        </Fragment>
    )
}
export default MeetupDetails;