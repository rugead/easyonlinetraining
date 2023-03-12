import React, { useState } from "react";
import { Parse } from "parse"
import { useParseQuery } from "@parse/react";
import { jsonCourseTemplate } from '../../data/jsonCourseTemplate'
import { CourseForm } from './Form';
import { Menu } from './Menu'
import { H1 } from "../../utilities/Headline";
export function CourseAdmin() {
  const parseQuery = new Parse.Object("Course");
  const {
    isLive, // Indicates that Parse Live Query is connected
    isLoading, // Indicates that the initial load is being processed
    isSyncing, // Indicates that the library is getting the latest data from Parse Server
    results, // Stores the current results in an array of Parse Objects
    count, // Stores the current results count
    error, // Stores any error
    // reload // Function that can be used to reload the data
  } = useParseQuery(
    parseQuery, // The Parse Query to be used
    {
      enabled: true, // Enables the parse query (default: true)
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true // Enables live query for real-time update (default: true)
    }
  );

  const [objectAttributes, setObjectAttributes] = useState(jsonCourseTemplate);
  const [object, setObject] = useState({});
  // const [bc, setBc] = useState(object.attributes.instructions.color)
  console.log('bc: ', object?.attributes?.instructions?.[0]?.color);
  console.log('object: ', object);

    const colors = [ "error", "warning", "success", "info", "accent", "neutral", "base-100", "secondary", "primary", "neutral" ]


  return (
    <div>
      <div>
        <span className="bg-error"> </span>
        <span className="bg-error-content"> </span>
        <span className="bg-warning"> </span>
        <span className="bg-warning-content"> </span>
        <span className="bg-succes"> </span>
        <span className="bg-succes-content"> </span>
        <span className="bg-info"> </span>
        <span className="bg-info-content"> </span>
        <span className="bg-accent"> </span>
        <span className="bg-secondary"> </span>
        <span className="bg-primary"> </span>
        <span className="bg-neutral"> </span>
        <span className="bg-base"> </span>


      </div>
      <div className={`flex ${object?.attributes?.instructions?.[0]?.color} justify-between p-4`}>
          <H1>{object?.attributes?.courseTitle}</H1>
          <p>{count}</p>
          {error && (<p>{error.message}</p>)}
          {isLoading && ( <p>Loading...</p>  )}
          {isLive && ( <p>Live!</p>   )}
          {isSyncing && ( <p>Syncing...</p> )}
        </div>
      <div className="flex bg-slate-400">
        <div className="flex-initial">
          <Menu results={results} object={object}  setObject={setObject} />
        </div>
        <div className="flex-1 w-full">
          <CourseForm course={object.attributes || objectAttributes} objectId={object.id} />
        </div>
      </div>
    </div>
  );
}
