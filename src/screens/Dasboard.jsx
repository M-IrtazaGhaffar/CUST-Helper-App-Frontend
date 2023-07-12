import React, { useContext, useEffect, useState } from "react";
import AdminLogin from "../states/Context";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Header from "../components/Header";
import AddReview from "../components/AddReview";
import RemoveReview from "../components/RemoveReview";
import UpdateReview from "../components/UpdateReview";
import AddTeacher from "../components/AddTeacher";
import UpdateTeacher from "../components/UpdateTeacher";
import RemoveTeacher from "../components/RemoveTeacher";
import UnderConstruction from "../components/UnderConstruction";

function Dasboard() {
  const value = useContext(AdminLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (value.LoginAttempt == false) {
      navigate("/admin/login");
    }
  }, []);

  const [Admin, setAdmin] = useState(1)

  return (
    <div>
      {
        Admin ? <UnderConstruction /> : <Box
        className="Calculation"
        bgColor="gray.300"
        w="100%"
        minHeight="100vh"
      >
        <Header />
        <Tabs px={5}>
          <TabList>
            <Tab>Teacher</Tab>
            <Tab>Review</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Tabs>
                <TabList>
                  <Tab>Add Teacher</Tab>
                  <Tab>Remove Teacher</Tab>
                  <Tab>Update Teacher</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <AddTeacher />
                  </TabPanel>
                  <TabPanel>
                    <RemoveTeacher />
                  </TabPanel>
                  <TabPanel>
                    <UpdateTeacher />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <Tabs>
                <TabList>
                  <Tab>Add Review</Tab>
                  <Tab>Remove Review</Tab>
                  <Tab>Update Review</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <AddReview />
                  </TabPanel>
                  <TabPanel>
                    <RemoveReview />
                  </TabPanel>
                  <TabPanel>
                    <UpdateReview />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      }
    </div>
  );
}

export default Dasboard;
