// import React, { useEffect, useState } from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../Firebase/Firebase.init';

// const OrderList = () => {

//   const [user, loading, error] = useAuthState(auth);
//   const [orderList, setOrderList] = useState([])

//   useEffect(() => {
//     const url = `https://pure-ravine-17489.herokuapp.com/orderList`;
//     fetch(url, {
//       headers: {
//         'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
//       },
//     })
//     .then(res => res.json())
//     .then(data => setOrderList(data))
//   },[user.email])

//   return (
//     <div>
//       <h2>Total Orders : {orderList.length}</h2>
//       <ol>
//         {
//           orderList.map(order=><li key={order._id}>{order.name}</li>)
//         }
//       </ol>
//     </div>
//   )
// }

// export default OrderList