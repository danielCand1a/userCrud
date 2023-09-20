
const UserCard = ({user, deleteUser,setInfoUpdate, handleOpenForm}) => {

    const handleDelete = ()=>{
        deleteUser('/users',user.id)
    }
    const handleEdit = () =>{
        setInfoUpdate(user)
        handleOpenForm()
    }
    
    return (
    <article className='card_user'>
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <hr />
      <ul>
        <li className="card_atribute">E-MAIL</li>
        <li><span><i className='bx bx-envelope' ></i></span><span> {user.email}</span></li>
        <li className="card_atribute">BIRTHDAY</li>
        <li><span><i className='bx bx-gift' ></i></span><span> {user.birthday}</span></li>
      </ul>
      <hr />
      <div className="botones">
        <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit}><i className='bx bx-pencil' ></i></button>
      </div>
    </article>
  )
}

export default UserCard