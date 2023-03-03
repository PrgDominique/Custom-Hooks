import { Fetch } from './components/hooks/Fetch'

function App() {
  const { showData, error, loading } = Fetch(
    'https://jsonplaceholder.typicode.com/comments/1'
  )
  // const newArray = Object.entries()
  // console.log(newArray)
  // console.log(showData);
  if (loading) return <h1> Loading ... </h1>

  if (error) console.log(error)
  return (
    <div className='flex justify-center items-center text-3xl h-screen'>
      {showData?.map((data, index) => (
        <div key={index}>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
        </div>
      ))}
    </div>
  )
}

export default App
