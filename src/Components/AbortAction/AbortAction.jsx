// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AbortApiAction } from './abortAction.js';

// const AbortAction = () => {

//     const dispatch = useDispatch();
//     const [controller, setController] = useState(null);

//     const handleApiCall = () => {
//         const abortController = new AbortController();
//         setController(abortController);
//         dispatch(AbortApiAction({ signal: abortController.signal }))
//     }

//     const handleCancel = () => {
//         if (controller) {
//             console.log(loading, data, error);
//           controller.abort(); // Abort the request
//           setController(null); // Reset the controller after aborting
//         }
//       };

//       const loading = useSelector((state) => state?.AbortActionReducer?.AbortApiActionLoading);
//       const data = useSelector((state) => state?.AbortActionReducer?.AbortApiActionData);
//       const error = useSelector((state) => state?.AbortActionReducer?.AbortApiActionError);

//       useEffect(() => {
//         console.log(loading, data, error);
//       }, [loading, data, error])

//   return (
//     <div>
//         <button onClick={() => {handleApiCall()}}>call api</button>
//         <button onClick={() => {handleCancel()}}>cancel</button>

//       {/* Display loading, data, or error */}
//       {loading && <p>Loading...</p>}
//       {data && <p>Data Loaded: {JSON.stringify(data)}</p>}
//       {error && <p>Error: {error}</p>}
//     </div>
//   )
// }

// export default AbortAction