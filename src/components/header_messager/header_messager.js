import './header_messager.css'
import { Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

const HeaderMessager = ({authors, chatName}) => {

  const authorsHandler = () => {
    let strAuthors = ''

    const humanAuthors = authors.filter(item => item !== "Robot")
    if(humanAuthors && humanAuthors.length > 0){
      if(humanAuthors.length <= 3) {
        humanAuthors?.forEach((item, idx) => {
          if(idx !== humanAuthors.length - 1) {
            strAuthors += `${item}, `
          } else {
            strAuthors +=`${item}.`
          }
        })
      } else {
        for(let i = 0; i <= 2; i++) {
          if(i !== 2) {
            strAuthors += `${humanAuthors[i]}, `
          } else {
            strAuthors += `${humanAuthors[i]} and ${humanAuthors.length - 3} more`
          }
        }
      }
    }
    return <p className='authors_list'>{strAuthors}</p>

  }

  return (
    <div className='header'>
      <NavLink to='/home'>
        <Button variant="outlined" startIcon={<HomeIcon/>} className="home-icon-link">Home</Button>
      </NavLink>
      <h4 className='chat-name'>{chatName}</h4>
      {authorsHandler()}
    </div>
  )
}

export default HeaderMessager;