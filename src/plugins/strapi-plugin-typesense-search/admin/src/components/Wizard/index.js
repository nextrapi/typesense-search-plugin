import React from 'react';
import { Box } from '@strapi/design-system/Box'
import { TabPanel, TabPanels, Tabs, Tab, TabGroup } from '@strapi/design-system/Tabs'
import { useSelector } from 'react-redux'
export default function Wizard() {
    var store = useSelector(state => state)
    console.log(store)
    return <TabGroup label="Some stuff for the label" id="tabs" onTabChange={selected => console.log(selected)}>
        <Tabs>
            <Tab>First</Tab>
            <Tab>Second</Tab>
            <Tab>Third</Tab>
        </Tabs>
        <TabPanels>
            <TabPanel>
                <Box padding={4} background="neutral0">
                    First panel
                </Box>
            </TabPanel>
            <TabPanel>
                <Box padding={4} background="neutral0">
                    Second panel
                </Box>
            </TabPanel>
            <TabPanel>
                <Box padding={4} background="neutral0">
                    Third panel
                </Box>
            </TabPanel>
        </TabPanels>
    </TabGroup>
}
