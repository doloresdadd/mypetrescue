import Image from "next/image"
import Link from "next/link"


const PetCard = ({ pet }) => {
  return (
    <div className="rounded-xl shadow-md relative">
            <Image
              src={`/images/pets/${pet.images[0]}`}
                           alt=""
              width={0}
              height={0}
              sizes="100vw"
              className='w-full h-auto rounded-t-xl'
              objectFit="cover"
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">{pet.type}</div>
                <h3 className="text-xl font-bold">{pet.name}</h3>
              </div>
              <h5
                className="bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                {pet.description}
              </h5>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  Age : {pet.attributes.age}
                </p>  
                <p>
                  Breed : {pet.attributes.breed}
                </p>
                <p>
                  Gender : {pet.attributes.gender}
                </p>
              </div>

            
              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i>
                  <span className="text-orange-700"> 
                  {pet.location}</span>
                </div>
                <Link
                  href="/pet/${pet._id}"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
  )
}

export default PetCard