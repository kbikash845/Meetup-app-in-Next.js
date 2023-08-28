import MeetupList from "@/components/meetups/MeetupList";
import { Fragment } from "react";



const Dummy_Meetup=[
    {
        id:"m1",
        tittle:"A First Meetup",
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address:"Some address 5,12345 Some City",
        description:"This is a First meetup"

    },
    {
        id:"m2",
        tittle:"A Second Meetup",
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address:"Some address 5,12345 Some City",
        description:"This is a Second meetup"
        
    }
]
function HomePage(){
    return <Fragment>
        
       <MeetupList meetups={Dummy_Meetup}/>
    </Fragment>
   
}
export default HomePage;