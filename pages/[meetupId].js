import MeetupDetail from '../components/meetups/MeetupDetail'

function MeetupDetails() {
  // Send info throgh props to new component
  return (
    <MeetupDetail
      title='DungeonsDragons: The Frozen Tomb'
      image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fdd%2F49%2Fa1%2Fdd49a1d80e251795fd6e8c6fdaf57144.jpg&f=1&nofb=1'
      address='Online Event'
      description='This adventure takes place in a cold, snowy mountain pass. The reason the characters are making this trip is not specified; this adventure can take place while journeying from on location to another during or between adventures. While making the difficult journey, the characters are caught in a terrible storm and must take shelter in a cave in the mountainside, only to discover the cave hides even greater dangers than those posed by the weather.'
    />
  )
}

export default MeetupDetails
