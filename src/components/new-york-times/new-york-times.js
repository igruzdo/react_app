import { Box, Button, List } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from '../../context/theme';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from "react";
import NYTListItem from "../nyt-list-item/nyt-list-item";
import './new-york-times.css'
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../_redux/reducers/nytReducer";


const NewYorkTimes = () => {
    const theme = useContext(ThemeContext)
    const newsData = useSelector(state => state.nytNews)
    const loading = useSelector(state => state.nytNews.loading)
    const error = useSelector(state => state.nytNews.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
    }, [])


    const newsTemplate = () => {
        console.log(error)
        console.log(loading)
        console.log(newsData)
        if(error) {
            return (
                <>
                    <p>Error in fetchig data</p>
                </>
            )
        } else if(loading) {
            return (
                <>
                    <p>Loading...</p>
                </>
            )
        } else {
            return newsData.nytNews.map((item, index) => {
                return (
                    <NYTListItem url={item.url} title={item.title} key={index}/>
                )
            })
        }
    } 

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ 
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                height: '95vh'
            }}>
                <Box sx={{ 
                    bgcolor: 'rgb(125, 202, 238)', 
                    borderRight: "1px solid #5d63fc", 
                    width: 550,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflowY: 'scroll'
                }}>
                    <div className="nyt-header">
                        <NavLink to='/' className="home-icon-link">
                            <Button variant="outlined" startIcon={<HomeIcon/>}>Home</Button>
                        </NavLink>
                        <h2 className="chat-list__header">New York Times</h2>
                    </div>
                    <List sx={{marginTop: '65px'}}>
                        {newsTemplate()}
                    </List>
                </Box>
            </Box>
        </ThemeProvider>
        
    )
}

export default NewYorkTimes