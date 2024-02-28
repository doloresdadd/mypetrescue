import pets from "@/pets.json"
import PetCard from "@/components/PetCard"


const PetsPage = () => {

  return (
   
      <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        { pets.length === 0 ? (
          <p>No Pets Found</p>
        ): ( <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pets.map((pet, index) => (  
          <PetCard 
            pet={pet}
            key={index}
          />
        )) }

      </div>)}
       
    </div>
    </section>
    
  )
}

export default PetsPage