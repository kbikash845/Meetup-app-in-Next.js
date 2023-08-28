import { Fragment } from "react";
import Meetupdetails from "@/components/meetups/Meetupdetails";

function MeetupDetails(props) {
    const { meetupData } = props;

    return (
        <Fragment>
            <Meetupdetails
                tittle={meetupData.title}
                image={meetupData.image}
                address={meetupData.address}
                description={meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: { meetupid: 'm1' } },
            { params: { meetupid: 'm2' } }
        ]
    };
}

export async function getStaticProps(context) {
    // Fetch data for a meetup
    const meetupId = context.params.meetupid;
    
    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                id: meetupId,
                title: 'A First Meetup',
                address: 'Some Street 5, Some City',
                description: 'The meetup description'
            }
        }
    };
}

export default MeetupDetails;
