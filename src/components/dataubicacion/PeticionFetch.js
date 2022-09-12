import { useEffect, useState } from 'react'
import DataUbicacion from './DataUbicacion'

function PeticionApi() {
  const [data, setData] = useState([])
  const API_URL = 'https://ipinfo.io?token=e5406dc608961e'

  function getCoursesApi() {
    return new Promise((resolve, reject) => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          resolve(data)
        })
    })
  }

  async function requestApi() {
    const datas = await getCoursesApi()
    setData(datas)
  }

  useEffect(() => {
    requestApi()
  }, [])

  return (

    <div className="peticion">
      <DataUbicacion
        city={data.city}
        region={data.region}
        country={data.country}
      />
    </div>
  )
}
export default PeticionApi;