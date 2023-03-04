import { useEffect, useState } from 'react'

export const Fetch = (url) => {
  const [showData, setShowData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    try {
      const result = await fetch(url)
      const response = await result.json()
      if (result.status === 200) {
        setShowData(response)
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
    console.log('fetch');
  }, [url])

 
  return { showData, error, loading, getData }
}
