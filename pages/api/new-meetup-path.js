// Server side code
import { MongoClient } from 'mongodb'

// Handle POST method
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body

    // Object destructuring, const title = data.title
    //const { title, image, address, description } = data

    const client = await MongoClient.connect(
      'mongodb+srv://dnd:yx2dV6xeh5fZAK4@cluster0.w1pwr.mongodb.net/dndMeetups?retryWrites=true&w=majority'
    )
    const db = client.db()

    const meetupsCollection = db.collection('dndMeetups')

    const result = await meetupsCollection.insertOne(data)
    console.log(result)

    client.close()

    res.status(201).json({ message: 'Game added.' })
  }
}

export default handler
