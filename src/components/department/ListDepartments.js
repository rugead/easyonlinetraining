import React, {useMemo} from 'react';
import Parse from "parse";
import { useAuth } from '../../AuthProvider';
import { useParseQuery } from "@parse/react";
import { InlineEdit } from '../utilities/InlineEdit';
import { DeleteDepartment } from './DeleteDepartment'




export const ListDepartments = () => {
  const { lang } = useAuth()
  const parseQuery = new Parse.Query('Department');
  const { isLive, isLoading, isSyncing, results, count, error, reload } = useParseQuery(parseQuery, {
    enableLocalDatastore: true, // Enables cache in local datastore (default: true)
    enableLiveQuery: true, // Enables live query for real-time update (default: true)
  });

  return (
    <div className=" p-2 container">

        { results && results.map(object => {
          // console.log('item: ', item);
          return (
            <div className="pb-1 flex justify-between"  key={object.id}> 
              <InlineEdit 
                ariaLabel={lang.DEPARTMENT_NAME}
                objectId={object.id}
                objectValue={object.attributes?.departmentName}
                objectClass='Department'
                objectName='departmentName'
              />
              <DeleteDepartment departmentId={object.id} />
            </div>
          )
        })}
    </div>
  );
};