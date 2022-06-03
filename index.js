const express = require('express')
const app = express()
const PORT = 8000



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

app.listen(PORT, ()=>{
	console.log(`Server is running at Port:${PORT}`)
})