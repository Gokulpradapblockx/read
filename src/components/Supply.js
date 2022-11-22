import React from 'react'
import { useState } from "react";
import { useConnect } from "@stacks/connect-react";
import { StacksTestnet } from "@stacks/network";
import { userSession } from "./ConnectWallet";
// import { principalCV } from "@stacks/transactions/dist/clarity/types/principalCV";
import {
    AnchorMode,
    // PostConditionMode,
    // stringUtf8CV,
  } from "@stacks/transactions";
const Supply = () => {
    const { doContractCall } = useConnect();
    const [supply, setSupply] = useState(0)


    function getSupply() {
        doContractCall({
          network: new StacksTestnet(),
          anchorMode: AnchorMode.Any,
          contractAddress: "ST3921Q755Q8K3MAGBQX2P5BX8PA1JEA53AFJYSTS",
          contractName: "affordable",
          functionName: "get-last-token-id",
          readOnlyFunctionArgs: {
            arguments: [],
            sender: "ST3921Q755Q8K3MAGBQX2P5BX8PA1JEA53AFJYSTS",
          },         
        });
        
      }
      if (!userSession.isUserSignedIn()) {
        return null; 
      }
  
  return (
<div>
<button onClick={() => getSupply()}>Total Supply</button>
<p>{supply}</p>
</div>
  )
}

export default Supply