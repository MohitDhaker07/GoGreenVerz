import { Box, Button, Grid, TextField, Stack, Autocomplete } from "@mui/material";
import Header from '../../Header';


export default function CRICarbonForm() {

    const isConnectedWallet: string | null = localStorage.getItem('Wallet') ?? '';
    return (
        <Box>
            <Header isConnectedWallet={isConnectedWallet} />
            <Box display="flex" alignItems="center" fontSize={15}>

                <Box sx={{ px: 3, my: 2, mx: 3 }}>

                    <Grid container display="flex" justifyContent='center' sx={{ textAlign: 'center' }} spacing={3} >
                        <Grid item lg={12} xl={12} >

                            <Box sx={{ border: "1px solid black", px: 2, pb: 2, pt: 2, borderColor: '#d2cbcb;', backgroundColor: '#EDF4F4', borderRadius: '10px', ':hover': { boxShadow: 4 }, mt: 7 }}>
                                <Box sx={{ pb: 2, textAlign: 'left' }}>
                                    <h5>UPDATE CRI CARBON DETAILS</h5>
                                </Box>

                                <Grid container justifyContent='space-evenly' spacing={2}>
                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Name"
                                            label="Name"
                                            variant="outlined"
                                            size="small"
                                            color="primary"
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Ph No"
                                            label="Ph No"
                                            type="tel"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Email"
                                            label="Email"
                                            type="email"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>


                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Address_1"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>


                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Address_2"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="City"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="State"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Accreditation Information "
                                            label="Accreditation Information "
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Accreditation Information "
                                            label="Accreditation Information "
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Project Verification Reports "
                                            label="Project Verification Reports "
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Project Verification Reports "
                                            label="Project Verification Reports "
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="On-site Inspection Findings "
                                            label="On-site Inspection Findings "
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="On-site Inspection Findings "
                                            label="On-site Inspection Findings "
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Carbon Credit Calculation Methodology"
                                            label="Carbon Credit Calculation Methodology"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                        />
                                    </Grid>
                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Creation Date"
                                            label="Creation Date"
                                            variant="outlined"
                                            type='date'
                                            size='small'
                                            color='secondary'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Project Commence Date"
                                            label="Project Commence Date"
                                            variant="outlined"
                                            type='date'
                                            size='small'
                                            color='secondary'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            options={['Active', 'Inactive', 'Expired']}
                                            renderInput={(params) => <TextField {...params} label="Status" />}
                                        />
                                    </Grid>

                                </Grid>
                            </Box>


                        </Grid >
                    </Grid>

                    {/* {buttons}  */}

                    <Grid container justifyContent='center' sx={{ textAlign: 'center' }}>
                        <Grid item lg={6} xl={6} xs={12} >
                            <Grid container justifyContent='space-evenly' alignItems='center'>
                                <Grid item lg={3} sm={3} xl={3} xs={3} md={3} sx={{ py: 2 }} >
                                    <Stack spacing={2} direction="row" >
                                        <Button fullWidth variant="outlined"
                                            sx={{
                                                color: 'white', backgroundColor: '#7bc54c', borderColor: '#7bc54c',
                                                ':hover': { borderColor: '#7bc54c', color: '#000000' }
                                            }}
                                        >Submit</Button>
                                    </Stack>

                                </Grid>

                                <Grid item lg={3} sm={3} xl={3} xs={3} md={3} sx={{ py: 2 }}>
                                    <Stack spacing={2} direction="row">

                                        <Button fullWidth variant="outlined"
                                            sx={{
                                                color: 'white', backgroundColor: '#c62828', borderColor: '#c62828',
                                                ':hover': { borderColor: '#c62828', color: '#000000' }
                                            }}
                                        >Cancel</Button>
                                    </Stack>

                                </Grid>

                            </Grid>


                        </Grid>

                    </Grid>

                </Box>


            </Box>
        </Box>
    )
}