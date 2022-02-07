import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
  function handleMeetupAdd(enteredMeetupData) {
    console.log(enteredMeetupData)
  }

  return <NewMeetupForm onAddMeetup={handleMeetupAdd} />
}

export default NewMeetupPage
