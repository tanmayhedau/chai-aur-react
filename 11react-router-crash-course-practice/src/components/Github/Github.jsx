import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log({ data });
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div style={{ display: "inline-block" }}>
        <img className="" src={data.avatar_url} alt="Git picture" width={300} />
      </div>
      <div style={{ display: "inline-block", paddingTop:"80px",paddingLeft:"80px", alignItems:"center",justifyContent:"center",verticalAlign:"top" }}>
        <div>
          <span style={{ display: "block" }}>Username: {data.login}</span>
        </div>
        <div>
          <span style={{ display: "block" }}>
            Github followers: {data.followers}
          </span>
        </div>
        <div>
          <span style={{ display: "block" }}>Github link: {data.html_url}</span>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  let response = await fetch(`https://api.github.com/users/tanmayhedau`);
  return response.json();
};
