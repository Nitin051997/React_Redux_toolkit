import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AbortApiAction, cancelRequest, resetCancelFlag } from "./abortAction";

const AbortAction = () => {
  const dispatch = useDispatch();

  const handleApiCall = () => {
    dispatch(resetCancelFlag()); // Reset the cancellation flag when calling a new request
    dispatch(AbortApiAction());
  };

  const handleCancel = () => {
    dispatch(cancelRequest()); // Dispatch action to cancel the request
  };

  const { loading, data, error } = useSelector((state) => ({
    loading: state?.AbortActionReducer?.loading,
    data: state?.AbortActionReducer?.data,
    error: state?.AbortActionReducer?.error,
  }));

  console.log(loading);
  

  return (
    <div>
      <button onClick={handleApiCall}>Call API</button>
      <button onClick={handleCancel}>Cancel</button>

      {loading && <p>Loading...</p>}
      {data && <p>Data Loaded: {JSON.stringify(data)}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default AbortAction;
