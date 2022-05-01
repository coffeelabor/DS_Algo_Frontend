import React from "react";

export const BannerRow = ({data}, fetchStatus) => {

    // console.log("Banner props", data)
    return(
    <>
        {/* {fetchStatus && <h1>...Loading Block</h1>} */}
        {/* {!fetchStatus && ( */}
            <ul style={{display: "flex"}}>
            {/* {props.Data?.map((block, i) => { */}
            {data?.map((block, i) => {
                return(
                <li key={i} style={{width: "200px"}}>              
                    <p>Name: {block.blockName}</p>
                    <p>MerklePath: {block.merklePath}</p>
                    <p>Num Of Users: {block.numOfUsers}</p>
                    <p>BlockHeight: {block.blockHeight}</p>
                </li>
            )
            })}
            </ul>
        {/* )} */}
      </>
    )
}

export default BannerRow