import React from 'react';
import Parse from 'parse';

import { useParseQuery } from '@parse/react';

export const Person = () => {
  
  
  const parseQuery = new Parse.Query('Person');

  const {
    isLive, // Indicates that Parse Live Query is connected
    isLoading, // Indicates that the initial load is being processed
    isSyncing, // Indicates that the library is getting the latest data from Parse Server
    results, // Stores the current results in an array of Parse Objects
    count, // Stores the current results count
    error, // Stores any error
    reload // Function that can be used to reload the data
  } = useParseQuery(
    parseQuery, // The Parse Query to be used
    {
      enabled: true, // Enables the parse query (default: true)
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true // Enables live query for real-time update (default: true)
    }
  );

  
  return (

    <div>
          {isLoading && (
            <p>Loading...</p>
            )}
          {isLive && (
            <p>Live!</p>
            )}
          {isSyncing && (
            <p>Syncing...</p>
            )}
          {results && (
            <ul>
              {results.map(result => (
                <li key={result.id}>
                  {result.get('name')}
                </li>
              ))}
            </ul>
          )}
          <p>{count}</p>
          {error && (
            <p>{error.message}</p>
            )}
          <button
            onClick={reload}
          >
            Reload
          </button>
    </div>

    );


}
 