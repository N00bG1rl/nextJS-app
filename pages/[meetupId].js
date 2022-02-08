import { MongoClient, ObjectId } from 'mongodb'

import MeetupDetail from '../components/meetups/MeetupDetail'

// Get meetup data from getStaticProps through props
function MeetupDetails(props) {
  // Send info throgh props to new component
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  )
}

// Describe all the segmatic values
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://dnd:yx2dV6xeh5fZAK4@cluster0.w1pwr.mongodb.net/dndMeetups?retryWrites=true&w=majority'
  )
  const db = client.db()
  const meetupsCollection = db.collection('dndMeetups')
  // Get all documents in db,
  // Use tweek-find, first arg is for search (empty object returns all)
  // Sec arg is for witch field we are want to extract for every doc
  const dndMeetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close()

  return {
    // If not in the paths, return 404 page
    fallback: false,
    // map into object
    paths: dndMeetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  }
}

// Fetch data for a single meetup
export async function getStaticProps(context) {
  // Get item id/url, for indentifying item to fetch
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(
    'mongodb+srv://dnd:yx2dV6xeh5fZAK4@cluster0.w1pwr.mongodb.net/dndMeetups?retryWrites=true&w=majority'
  )
  const db = client.db()
  const meetupsCollection = db.collection('dndMeetups')
  // Convert string into MongoDB id object
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  })

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  }
}

export default MeetupDetails
