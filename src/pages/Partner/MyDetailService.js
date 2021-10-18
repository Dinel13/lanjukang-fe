import React, { useEffect } from 'react'
import { useLocation } from 'react-router';

export default function MyDetailService({service}) {
   const location = useLocation();

   useEffect(() => {
      console.log(location.state.service); // result: 'some_value'
   }, [location]);
   return (
      <div>
         
      </div>
   )
}
