// index.js

export default function(req, res) {
  const data = {title: 'Hey', message: 'Hola mundo'}
  res.render('index', data)
}