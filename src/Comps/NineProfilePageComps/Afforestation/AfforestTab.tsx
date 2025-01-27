import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AfforestationForm from './AfforestationForm';
import AfforestationDoneLands from './AfforestationDoneLands';
import Header from '../../../Header';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AfforestTab() {
    const [value, setValue] = React.useState(0);

    const isConnectedWallet: string | null = localStorage.getItem('Wallet') ?? '';

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
        <Header isConnectedWallet={isConnectedWallet} />
        <Box p={3}>
            <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab 
            label="Afforestation Filled Lands" 
            {...a11yProps(0)} 
            sx={{
            fontWeight: 'bold',
            color: 'green',
            }}
            />
            <Tab label="Update Afforestation" {...a11yProps(1)} sx={{
            fontWeight: 'bold',
            color: 'green',
            }}
            />
            </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            <AfforestationDoneLands  />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <AfforestationForm setValue={setValue} />
            </TabPanel>
        </Box>
        </Box>
    );
}