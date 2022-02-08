import { useRouter } from 'next/router'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
  const router = useRouter()

  async function handleMeetupAdd(enteredMeetupData) {
    // Send req to api folder and trigger handler func
    const response = await fetch('/api/new-meetup-path', {
      method: 'POST',
      // Convert enteredMeetupData to json with build in method
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    console.log(data)

    // Redirect programaticaly, replace url so back btn is disabled
    router.replace('/')
  }

  return <NewMeetupForm onAddMeetup={handleMeetupAdd} />
}

export default NewMeetupPage
