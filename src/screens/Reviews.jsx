// import {
//   Box,
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   Image,
//   Input,
//   Text,
// } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import Logo from "../assets/cust-logo.png";
// import Loading from "../components/Loading";
// import { useNavigate } from "react-router-dom";
// import UnderConstruction from "../components/UnderConstruction";

// function Reviews() {
//   const n = useNavigate()
//   const [Value, setValue] = useState("");
//   const [Fetch1, setFetch1] = useState(1);
//   const [Fetch2, setFetch2] = useState(0);
//   const [Data, setData1] = useState([
//     {
//       name: "Irtaza",
//     },
//     {
//       name: "Qasim",
//     },
//     {
//       name: "Raffay",
//     },
//     {
//       name: "Ehsan",
//     },
//     {
//       name: "Obaid",
//     },
//     {
//       name: "Abdullah",
//     },
//     {
//       name: "Ahmed",
//     },
//     {
//       name: "Hussnain",
//     },
//   ]);
//   const [Review, setReview] = useState([
//     {
//       reg: "BCS213045",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium sed facere corrupti qui ducimus et numquam consectetur ullam voluptates.",
//       date: "24/06/2023",
//     },
//     {
//       reg: "BCS213045",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium sed facere corrupti qui ducimus et numquam consectetur ullam voluptates.",
//       date: "24/06/2023",
//     },
//     {
//       reg: "BCS213045",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium sed facere corrupti qui ducimus et numquam consectetur ullam voluptates.",
//       date: "24/06/2023",
//     },
//     {
//       reg: "BCS213045",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium sed facere corrupti qui ducimus et numquam consectetur ullam voluptates.",
//       date: "24/06/2023",
//     },
//     {
//       reg: "BCS213045",
//       review:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium sed facere corrupti qui ducimus et numquam consectetur ullam voluptates.",
//       date: "24/06/2023",
//     },
//   ]);
//   const [Admin, setAdmin] = useState(1)

//   useEffect(() => {
//     setTimeout(() => {
//       setFetch1(0);
//     }, 3000);
//   }, []);

//   return (
//     <div>
//       {
//         Admin ? <UnderConstruction /> : <Box
//           className="Calculation"
//           bgColor="gray.300"
//           w="100%"
//           minHeight="100vh"
//           display="flex"
//           alignItems="center"
//           gap={5}
//           flexDirection="column"
//           px={10}
//           py={2}
//         >
//           <Box
//             display="flex"
//             alignItems="center"
//             gap={3}
//             flexDirection="column"
//             my={3}
//           >
//             <Image src={Logo} w={150} />
//             <Text fontSize="xs">CUST Islamabad</Text>
//           </Box>
//           {Fetch1 ? (
//             <Loading />
//           ) : (
//             <Box width="100%">
//               <Text paddingBottom={5} textAlign="center">
//                 We provide you the best and legal review section for the teachers
//                 of CUST Islamabad here. We hope so you'll find these reviews well!
//                 Type the name of the teacher below. You can also select it from
//                 the dropdown menu!
//               </Text>
//               <Input
//                 list="data"
//                 placeholder="Type here"
//                 width="100%"
//                 bgColor="white"
//                 onChange={(e) => setValue(e.target.value)}
//                 autoFocus
//               />
//               <datalist id="data">
//                 {Data.map((item) => {
//                   return <option>{item.name}</option>;
//                 })}
//               </datalist>
//               <Button marginY={3}>Search</Button>

//               {Fetch2 ? (
//                 <Loading />
//               ) : (
//                 <Box
//                   width="100%"
//                   display="flex"
//                   alignItems="center"
//                   flexWrap="wrap"
//                   gap={3}
//                   marginBottom={10}
//                 >
//                   <Text fontSize={25}>Here you go!</Text>
//                   {Review.map((item) => {
//                     return (
//                       <Card width="100%">
//                         <CardHeader>
//                           {item.reg[0] +
//                             item.reg[1] +
//                             item.reg[2] +
//                             "****" +
//                             item.reg[7] +
//                             item.reg[8]}
//                         </CardHeader>
//                         <CardBody>{item.review}</CardBody>
//                         <CardFooter>{item.date}</CardFooter>
//                       </Card>
//                     );
//                   })}
//                 </Box>
//               )}
//             </Box>
//           )}
//           <Text textAlign="center" fontSize={13}>
//             Note: Admin is not responsible for your Good or Bad review. Make sure
//             to provide an authentic Information here.
//           </Text>

//           <Button p={5} onClick={() => n(-1)} m={5}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               class="bi bi-arrow-left"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
//               />
//             </svg>
//           </Button>
//         </Box>
//       }
//     </div>
//   );
// }

// export default Reviews;
