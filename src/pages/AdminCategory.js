import React from 'react';
import Cards from '../component/firstpage/Cards';

import TabAdmin from '../component/TabAdmin';
import { useAuth } from '../contexts/AuthContext';

function AdminCategory() {
  const { user } = useAuth();
  return (
    <div className="mt-[40px] mb-[40px]">
      <div className="w-9/12 mx-auto h-full flex justify-between gap-3">
        {user ? (
          user.role !== 'admin' ? (
            <div className="border-red-900 border-2 w-full rounded-md">
              <div className="w-full h-full flex justify-center">
                <Cards />
              </div>
            </div>
          ) : (
            <>
              <TabAdmin />
              <div className="border-red-900 border-2 w-3/4 p-10 flex justify-center border-opacity-60 rounded-md">
                <div className="w-full h-full ">
                  <Cards />
                </div>
              </div>
            </>
          )
        ) : (
          <>
            <div className="border-red-900 border-2 w-full p-10">
              <div className="w-full h-full ">
                <Cards />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminCategory;
