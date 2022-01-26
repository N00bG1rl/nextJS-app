import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Dungeons & Dragons: Tomb of Annihilation',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcritforbrains.com%2Fwp-content%2Fuploads%2F2017%2F06%2Ftomb-of-annihilation.jpg&f=1&nofb=1',
    address: 'Online Event',
    description: `
    A shocking rumor buzzes through the Forgotten Realms; a mysterious affliction is targeting those who have been raised from the dead. This wasting disease, which marches its victims back toward the death they once defied, has been dubbed the “death curse.” When this wretched sorcery claims a life, divine magic no longer revives them. Any others who fall to their demise, through natural or unnatural causes, is similarly lost to the living realm.
    Adventurers who wish to stop this devastation must travel to the peninsula of Chult to find the source of this death curse and destroy it. Chult is a tropical wilderness composed mostly of jungles, plateaus, impassable mountains, and belching volcanoes.`,
  },
  {
    id: 'm2',
    title: 'Dungeons & Dragons: Treasure of the Broken Hoard',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F21%2F43%2F93%2F214393ca8a90190f0876ec2f36437371.jpg&f=1&nofb=1',
    address: 'Online Event',
    description: `
    A famous relic hunter seeks adventurers to help her find caches of treasure hidden by the now-defeated followers of the Cult of the Dragon. Her maps and notes may lead the way to great wealth
    — or a terrible death. And do other parties have designs on the treasure as well?`,
  },
  {
    id: 'm3',
    title: 'Dungeons & Dragons: The Frozen Tomb',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fdd%2F49%2Fa1%2Fdd49a1d80e251795fd6e8c6fdaf57144.jpg&f=1&nofb=1',
    address: 'Online Event',
    description: `This adventure takes place in a cold, snowy mountain pass. The reason the characters are making this trip is not specified; this adventure can take place while journeying from on location to another during or between adventures. While making the difficult journey, the characters are caught in a terrible storm and must take shelter in a cave in the mountainside, only to discover the cave hides even greater dangers than those posed by the weather.`,
  },
]

function Home() {
  return <MeetupList meetups={DUMMY_DATA} />
}

export default Home
