import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Header, Section, Container, Text } from 'components';
import { Gallery, Todos } from 'tabs';

export const App = () => {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <Tabs>
            <TabList>
              <Tab>
                <Text>Task 1. Gallery</Text>
              </Tab>
              <Tab>
                <Text>Task 2. Todos</Text>
              </Tab>
            </TabList>

            <TabPanel>
              <Gallery />
            </TabPanel>

            <TabPanel>
              <Todos />
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
    </>
  );
};
