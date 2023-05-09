import './App.css'

function App() {

  // insert data to database 
  const handleAddUser = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(name, email);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data => {console.log(data)
      if(data.insertedId){
        alert('user added successfully')
        form.reset();
      }
    })

  }

  return (
    <>
      <h1>simple crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' /> <br />
        <input type="text" name='email' /> <br />
        <input type="submit" name='add user' /> <br />
      </form>
    </>
  )
}

export default App
