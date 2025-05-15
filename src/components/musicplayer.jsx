import React from 'react';
import Slider from '@mui/material/Slider';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';




function MusicPlayerBar() {
    const theme = useTheme();
    return (
            <div className="player-bar flex flex-row items-center justify-between content-center  pl-2 pr-2 bg-black w-screen shadow-md ">
                <div>
                    <Card sx={{ display: 'flex',color:"black", bgcolor:"black" }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 80, height: 80 ,padding: 1, borderRadius: 2}}
                            image="https://imgs.search.brave.com/KUJGhSlAPweNNZZe2T7uxvzdlWv7hsE0E6gIgkQe0u4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92b25k/eS1pbWFnZXMuY29t/L2ltYWdlLXByb3h5/P3VybD1odHRwczov/L3Byb3RvaW5mcmFz/dGFjay1teWZpcnN0/YnVja2V0Yjg4ODQ1/MDEtZm5uenZ4dDJl/ZTV2LnMzLmFtYXpv/bmF3cy5jb20vMzhh/bzdEd09UR29EVXNa/RnZhNEJXTk91RWM1/aTJyZVR1RXNzLnBu/Zw"
                            alt="Live from space album cover"/>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' , color:"white"}}>
                        <Typography component="div" variant="h5" color="white">
                                Live From Space
                        </Typography>
                        <Typography
                                variant="subtitle1"
                                component="div"
                                sx={{ color: 'white' }}>
                                Mac Miller
                        </Typography>
                        </CardContent>
                        </Box>
                    </Card>
                </div>
                <div>
                    <div className="controls flex flex-row items-center gap-2">
                        <button className='round w-1 flex align-middle justify-center'><SkipPreviousOutlinedIcon/></button>
                        <button className='round w-1 flex align-middle justify-center'><PlayCircleOutlinedIcon/></button>
                        <button className='round w-1 flex align-middle justify-center'><SkipNextOutlinedIcon/></button>
                    </div>
                    <div className="play w-full m-0">
                        <Slider defaultValue={0}/>
                    </div>
                </div>
                <div className="volume-controls flex flex-row items-center gap-2 w-1/8">
                    <VolumeDownRounded sx={{ color: 'white' }}/>
                        <Slider
                            aria-label="Volume"
                            defaultValue={30}
                            sx={{
                            width: 'max',
                            color: 'white',
                            '& .MuiSlider-track': {
                                border: 'none',
                                color: 'white'
                            },
                            '& .MuiSlider-thumb': {
                                width: 12,
                                height: 12,
                                color: 'white',
                                '&:hover': {
                                    boxShadow: '0 0 0 8px rgba(255,255,255,0.16)',
                                },
                            },
                            }}
                        />
                    <VolumeUpRounded sx={{ color: 'white' }}/>
                </div>
            </div>
    );
}

export default MusicPlayerBar;