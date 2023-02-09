import React from 'react';
import Pro from './Profil/ProfilCmpnt'

function App() {
  const styleObject={TextAlign:'center'}
  const haha={height:'15vb',  display: 'flex', justifyContent: 'center' }
  const handleName=fullName=>{
    alert(`hello,${fullName}`);
  };
  return (

<div >
<Pro fullName="Chedli Toumi"
       bio="Full-stack developer "
       profession="Software Engineer"
       handleName={handleName} >
          
    <img  src='https://scontent.ftun5-1.fna.fbcdn.net/v/t1.6435-9/196978160_908612049698750_3094604010128074965_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tJIzMQyr7GEAX_NpxF0&_nc_ht=scontent.ftun5-1.fna&oh=00_AfDwnYth7UH3wSdHHnaLWdHH_BNVXS-dWHVol2QXDdcumg&oe=640B3B74'></img>
    </Pro>
    </div>
);
}
export default App


