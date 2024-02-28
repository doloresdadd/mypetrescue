import InfoBox from "./InfoBox"

const InfoBoxes = () => {
  return (
    <section>
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <InfoBox 
            heading="See available Pets"
            backgroundColor="bg-gray-100"
            buttonInfo={{
                text: "See Pets",
                link: '/pets',
                backgroundColor: "bg-black"
            }

            }>
            Find your new best friend today. See what animals are available for adoption.
            </InfoBox>
            <InfoBox 
            heading="See our 
            adoption polcies"
                   backgroundColor="bg-blue-100"
            buttonInfo={{
                text: "About My Pet Rescue",
                link: '/about',
                backgroundColor: "bg-blue-500"
            }

            }>
            See our adoption policies to see if you are a good fit for one of our pets.
            </InfoBox>
       
      </div>
    </div>
  </section>
  )
}

export default InfoBoxes