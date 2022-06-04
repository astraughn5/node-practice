const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json())

const date = new Date
let info = [
	{
		id: 1,
		content: "testing node and API creation",
		date: date,
		important: true
	},
	{
		id: 2,
		content: "2nd time testing node and API creation",
		date: date,
		important: false
	},
	{
		id: 3,
		content: "3rd time testing node and API creation",
		date: date,
		important: true
	}
]

app.get('/', (req, res)=>{
	res.send('<h1> Hello </h1>')
})

app.get('/api/info/:id', (req, res)=>{
	const id = Number(req.params.id)
	const data = info.find(data => data.id === id)
	if(data){
		res.json(data)
	}
	else{
		res.status(404).end()
	}
})

const generateId = () => {
	const maxId = notes.length > 0
	  ? Math.max(...notes.map(n => n.id))
	  : 0
	return maxId + 1
  }

app.post('/api/info',(req, res)=>{
	const data = req.body
	
	if (!body.content) {
		return response.status(400).json({ 
		  error: 'content missing' 
		})
	  }
	
	const info = {
		content: body.content,
		important: body.important || false,
		date: date,
		id: generateId(),
	}
	data = data.concat(info)
	//console.log(data)
	res.json(data)
})

app.delete('/api/info/:id', (req, res)=>{
	const id = Number(req.params.id)
	info = info.filter(data => data.id !== id)
	
	res.status(204).end()

})

app.listen(PORT, ()=>{
	console.log(`Server is running at Port:${PORT}`)
})