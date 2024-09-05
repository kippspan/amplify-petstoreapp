import { useState } from 'react';
import './App.css';
import {  Pets, PetNavBar, PetFooter, PetAdd, PetDetails } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { uploadData } from 'aws-amplify/storage';


function App({ user, signOut} ) {
  async function saveFile() {
    try {
       const result = await uploadData({
          key: "text.txt", // Your file name
          data: "Hello"    // Your file content
       }).result;
       console.log('Succeeded: ', result);
    } catch (error) {
       console.log('Error: ', error);
    }
 }

  const [showForm, setShowForm] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [pet, setPet] = useState()
  const [updatePet, setUpdatePet] = useState()

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [breed, setBreed] = useState("")
  const [about, setAbout] = useState("")
  const [color, setColor] = useState("")
  const [image, setImage] = useState("")

  const defaultImage = "https://www.thesprucepets.com/thmb/pzFW0P_MKZadZOW52BK_lSr_5FI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1138203895-aca4409a766c4eaf8ebd01a9229f8a4a.jpg"


  const PetDetailsOverride = {
    CloseIcon: {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowDetails(false)
      },
    }
  }
  const formOverride = {
    TextField29766922: {
      placeholder: name
    },
    TextField29766923: {
      placeholder: age
    },   
    TextField29766924: {
      placeholder: breed
    }, 
    TextField38624677: {
      placeholder: about
    },     
    TextField38624684: {
      placeholder: color
    },  
    TextField38624691: {
      placeholder: image
    },        
    image: {
      src: updatePet == null 
        ? defaultImage
        : updatePet.image
    },
    Button29766926: {
      isDisabled: updatePet ? true : false, 
    },
    Button38624708: {
      isDisabled: !updatePet ? true : false,
    },
    MyIcon: {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        setShowForm(false)
      },
    }
  }
  const PetNavBarOverrides = { 
    "Add Pet": {
      style: {
        cursor: "pointer"
      },
      onClick: () => {
        saveFile();
        setShowForm(!showForm);
        setUpdatePet(false);
        setPet(true)
        },
    },
    Button: {
      onClick: signOut,
    }
  };

  return (
    <div className="App">
      <PetNavBar width={"100%"} overrides={PetNavBarOverrides}/>
      <header className="App-header">
        {showDetails && <PetDetails 
          pet={pet} 
          overrides={PetDetailsOverride}
          style={{textAlign: "left",
          margin: "1rem"}}/>}        
        {showForm && <PetAdd
          pet={updatePet}
          overrides={formOverride} 
          style={{textAlign: "left",
            margin: "1rem"
          }}/>
        }
        <Pets 
          overrideItems={({ item, index }) => ({
            overrides: {
              Breed: {color: "orange"},
              Button29766907: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                }
              },
              Button38504274: {
                onClick: () => {
                  if (!showForm) setShowForm(true)
                  setUpdatePet(item);
                  setName(item.name)
                  setColor(item.color)
                  setAge(item.age)
                  setBreed(item.breed)
                  setAbout(item.about)
                  setImage(item.image)
                }
              }
            },
          })}
        />
        <PetFooter  width={"100%"}/>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
