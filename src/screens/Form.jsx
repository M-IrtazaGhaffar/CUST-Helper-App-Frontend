// import {
//   Box,
//   Button,
//   FormControl,
//   FormHelperText,
//   Input,
//   Textarea,
// } from "@chakra-ui/react";
// import Loading from "../components/Loading";
// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import axios from "axios";
// import UnderConstruction from "../components/UnderConstruction";

// function Form() {
//   const [LoadingScreen, setLoadingScreen] = useState(1);
//   const [Data, setData] = useState([
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
//   const [Value, setValue] = useState("");
//   const [Review, setReview] = useState({
//     reg_no: "",
//     review: "",
//     value: "",
//   });
//   const [Admin, setAdmin] = useState(1)

//   const handleData = (e) => {
//     setReview({ ...Review, [e.target.name]: e.target.value });
//     console.log(Review);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(Review);
//     if (Review.reg_no !== "" && Review.review !== "" && Review.value !== "") {
//       const fetch = await axios.post(
//         "https://cust-helper-app-default-rtdb.firebaseio.com/CUSTHelperApp.json",
//         JSON.stringify({
//           reg_no: Review.reg_no,
//           review: Review.review,
//           value: Review.value
//         }))

//       if (fetch.status === 200) {
//         alert("Review Submitted")
//       }
//       else {
//         alert("Some Error Occured")
//       }
//     } else {
//       alert("Fill all the inputs!");
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setTimeout(() => {
//         setLoadingScreen(false);
//       }, 3000);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {
//         Admin ? <UnderConstruction /> :
//           <Box
//             justifyContent="center"
//             alignContent="center"
//             bgColor="gray.300"
//             minH="100vh"
//           >
//             <Header />
//             {LoadingScreen ? (
//               <Loading />
//             ) : (
//               <FormControl p={10} display="flex" flexDirection="column" gap={5}>
//                 <FormHelperText>
//                   Note: Your Data is totally secure and can be viewed by others. You
//                   cannot edit review once submitted. Please make sure that don't use
//                   any kind of abuse language for the Teachers / HoDs / Deans or
//                   someone else. Your Register Number will not be shown in the
//                   reviews. Hope you'll find this note helpful. Thankyou!
//                 </FormHelperText>
//                 <Input
//                   name="reg_no"
//                   placeholder="Enter your Register Number"
//                   bg="white"
//                   onChange={handleData}
//                   isRequired
//                 />
//                 <Box>
//                   <Input
//                     list="data"
//                     placeholder="Type and Select Teacher here"
//                     width="100%"
//                     bgColor="white"
//                     name="value"
//                     onChange={handleData}
//                     autoFocus
//                     isRequired
//                   />
//                   <datalist id="data">
//                     {Data.map((item) => {
//                       return <option>{item.name}</option>;
//                     })}
//                   </datalist>
//                 </Box>
//                 <Textarea
//                   name="review"
//                   placeholder="Start writing your Review..."
//                   bg="white"
//                   resize="none"
//                   rows={10}
//                   onChange={handleData}
//                   isRequired
//                 />
//                 <Button
//                   width="200px"
//                   alignSelf="flex-end"
//                   colorScheme="blue"
//                   onClick={handleSubmit}
//                 >
//                   Submit
//                 </Button>
//               </FormControl>
//             )}
//           </Box>
//       }
//     </div>
//   );
// }

// export default Form;
