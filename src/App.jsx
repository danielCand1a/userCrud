import { useEffect,useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const baseUrl = 'https://users-crud.academlo.tech'
  const [closeForm, setCloseForm] = useState(true)
  const[ users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl, setCloseForm)
  
  useEffect(()=>{
    getUsers('/users')
  },[])
  const handleOpenForm = () =>{
    setCloseForm(false)
  }
  return (
    <div className='everyone'>
      <div className='title'>
        <h1>Users</h1>
        <button onClick={handleOpenForm} className='formuser_main'><i className='bx bx-user-plus'></i>Create new user</button>
      </div>
      <br />
      
       <FormUser
       createUser={createUser}
       infoUpdate={infoUpdate}
       updateUser={updateUser}
       setInfoUpdate={setInfoUpdate}
       closeForm={closeForm}
       setCloseForm={setCloseForm}
       /> 
       <div className='plantilla'>
        {
          users?.map( user =>(
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setInfoUpdate={setInfoUpdate}
            handleOpenForm={handleOpenForm}
            />
          ))
        }
       </div>
    </div>

  )
}

export default App
