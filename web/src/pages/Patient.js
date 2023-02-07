import { Alert, Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Shake } from 'reshake'
import mrBarnes from '../assets/Barners.png'
import bag from '../assets/briefcase.png'
import clip1 from '../assets/medical-record.png'
import clip2 from '../assets/medical-checkup.png'
import clip3 from '../assets/list.png'
import clip4 from '../assets/health-checkup.png'
import ClipboardDetails from "../components/ClipboardDetails";
import ClipBoardImg from "../components/ClipBoardImg";

function Patient() {

    const [showAlert, setShowAlert] = useState(false);
    const [showBag, setShowBag] = useState(true);
    const [showItems, setShowItems] = useState(false);
    const [showRecords, setShowRecords] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [recordType, setRecordType] = useState('');
    const [mainBorder, setMainBorder] = useState('#f4ac4c')

    async function timeCloseErrorMsg(){              
        setTimeout(() => { closeErrorMsg() }, 4000);
    }

    async function closeErrorMsg(){
        setShowAlert(false);
        setMainBorder('#f4ac4c')
    }


    return (
        <Box >
            <Box style={{ marginTop: '100px', backgroundColor: '#C2EBFF' }} height={'120vh'}>
                <Alert variant="outlined" severity="error" hidden={!showAlert}
                    action={
                        <Button color="inherit" size="small" onClick={() => {setShowAlert(false); closeErrorMsg()} }>
                            UNDO
                        </Button>
                    }>
                    Before to get started, check if there are something in your bag that can help!
                </Alert>
                <Grid container justifyContent="space-around" alignItems="center" padding={3} spacing={3} >
                    <Grid item id="patient"
                        xs={10} sm={8} md={6} lg={5} xl={5}>
                        <img
                            src={mrBarnes} style={{ width: '100%', borderRadius: 20, borderColor: mainBorder, borderStyle: 'solid' }} />
                        <Button variant="contained" disableElevation style={{ height: '2.8rem', marginTop: '-8rem', backgroundColor: '#005681' }} onClick={() => {setShowAlert(true); setMainBorder('red'); timeCloseErrorMsg()}} >
                            Start appointment
                        </Button>
                    </Grid>
                    {showBag ?
                        <Grid item id="medicalKit"
                            xs={8} sm={6} md={4} lg={4} xl={4}>
                            <Shake active={showAlert}
                                h={0} v={45} r={2} dur={620} int={0.9} max={6} fixed={true} fixedStop={false} freez={false}>
                                <img src={bag} style={{ width: '100%', cursor: "pointer" }} onClick={() => { setShowBag(false); setShowItems(true); closeErrorMsg() }} />
                            </Shake>
                        </Grid> : <></>}
                    {showItems ?
                        <Grid item id="medicalKit"
                            xs={11} sm={10} md={7} lg={5} xl={5} sx={{ margin: 1 }}>
                            {showRecords ?
                                < Box backgroundColor={'#943c0c'} borderRadius={5} style={{ width: '100%', borderColor: '#f4ac4c', borderStyle: 'solid' }}>
                                    <Grid container spacing={3} justifyContent="center" alignItems="center" pt={3} pb={3}>
                                        <ClipBoardImg clipWidth={'90%'} activeReshake={showAlert} clipImg={clip1} actionClip={() => { setShowDetails(true); setShowRecords(false); setRecordType('personal') }} />
                                        <ClipBoardImg clipWidth={'100%'} activeReshake={showAlert} clipImg={clip2} actionClip={() => { setShowDetails(true); setShowRecords(false); setRecordType('diagnosis') }} />
                                        <ClipBoardImg clipWidth={'100%'} activeReshake={showAlert} clipImg={clip3} actionClip={() => { setShowDetails(true); setShowRecords(false); setRecordType('prescription') }} />
                                        <ClipBoardImg clipWidth={'96%'} activeReshake={showAlert} clipImg={clip4} actionClip={() => { setShowDetails(true); setShowRecords(false); setRecordType('summary') }} />
                                    </Grid>
                                </Box>
                                : []}
                            {showDetails ?
                                <ClipboardDetails action={() => { setShowDetails(false); setShowRecords(true) }} recordType={recordType} />
                                : []}
                        </Grid> : []}
                </Grid>
            </Box>
            <Paper id="navBar"
                elevation={3} sx={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#005681', height: '100px' }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    style={{ width: '100vw' }}
                >
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#C2EBFF'} >
                            Patient
                        </Typography>
                    </Grid>
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} color={'#C2EBFF'} >
                            Mr. Barners Jhonson
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box >
    )
}

export default Patient;