import './header_messager.css'

const HeaderMessager = ({authors, chatName}) => {

  const authorsHandler = () => {
    let strAuthors = ''
    const humanAuthors = authors.filter(item => item !== "Robot")
    if(humanAuthors){
      if(humanAuthors?.length <= 3) {
        humanAuthors?.forEach((item, idx) => {
          if(idx !== humanAuthors?.length - 1) {
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
      <h4 className='chat-name'>{chatName}</h4>
      {authorsHandler()}
    </div>
  )
}

export default HeaderMessager;