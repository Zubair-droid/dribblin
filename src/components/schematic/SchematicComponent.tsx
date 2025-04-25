import React from 'react'
import SchematicEmbed from './SchematicEmbed'
import { getTemporaryAccessToken } from '../../../actions/getTemporaryAccessToken';


async function SchematicComponent({
     componentId,
}: { componentId: string; 
  
}) 

{ 
  // Get temporatyAccessToken

  const accessToken = await getTemporaryAccessToken();
  if(!accessToken){
      throw new Error("Failed to get access token");
  }
    
    if(!componentId){
        return null;
    }


  return <SchematicEmbed accessToken={accessToken} componentId={componentId} />;
}

export default SchematicComponent;