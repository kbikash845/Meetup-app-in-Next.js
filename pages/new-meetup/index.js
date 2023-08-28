import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeetupPage(){

    const addmeetupHandler=(entermeetupdata)=>{
     console.log(entermeetupdata)
    }
return<NewMeetupForm onAddMeetup={addmeetupHandler}/>
}

export default NewMeetupPage;