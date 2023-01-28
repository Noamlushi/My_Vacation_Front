// import React, { useState, useEffect } from "react";
// import {auth} from "../../firebase";
// // import "firebase/auth";

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     auth
//       .auth()
//       .listUsers(1000)
//       .then(function (listUsersResult) {
//         setUsers(listUsersResult.users);
//       })
//       .catch(function (error) {
//         console.log("Error fetching users:", error);
//       });
//   }, []);

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.uid}>{user.email}</li>
//       ))}
//     </ul>
//   );
// };

// export default UserList;
