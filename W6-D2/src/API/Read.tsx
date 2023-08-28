import React from "react";
import axios from "axios";

type Iname = {
  name: string;
};

function Read() {
  const [name, setName]=React.useState<Iname>({
    name: "",  
  });
  const [names, setNames]=React.useState<Iname[]>([])

  
  //get
  React.useEffect(() => {
    axios.get("https://64df452371c3335b25825c13.mockapi.io/api/v1/name")
    .then((res) => {
      setNames(res.data)
      console.log(res.data);
      
    });
  },[]);

  function SendName(){
    //post
      axios.post("https://64df452371c3335b25825c13.mockapi.io/api/v1/name" ,{
        name: name
      })
      .then((res) => {  
        console.log(res);
        setNames([...names,name])
      });
  }


  return (
    <div>
      <h1>Enter your name: </h1>
      <input
        onChange={(e) => {
          setName({...name,name:e.target.value });
        }}
        type="text"
        placeholder="Player name"
      ></input>
      <br />
      <br />
      <button onClick={SendName}>Send</button>

      {names.map((item)=>{
        return(
        <>
        <h4>{item.name}</h4>
        </>
        ) 
      })}
    </div>
  );
}

export default Read;
