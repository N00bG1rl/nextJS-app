import Head from 'next/head'
import { useRouter } from 'next/router'

import { Fragment } from 'react/cjs/react.production.min'

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

  return (
    <Fragment>
      <Head>
        <title>Add a new DnD game event</title>
        <meta name='description' content='Add your own DnD game event.' />
      </Head>
      <NewMeetupForm onAddMeetup={handleMeetupAdd} />
    </Fragment>
  )
}

export default NewMeetupPage
