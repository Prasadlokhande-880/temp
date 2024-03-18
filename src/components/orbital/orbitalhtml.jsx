import React, { useEffect, useState } from "react";
import { compareAsc, format } from "date-fns";

const OrbitalComponent = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       const response = await client.fetch(`*[_type == "post"] {
  //         title,
  //         slug,
  //         body,
  //         publishedAt,
  //         mainImage {
  //           asset -> {
  //             _id, url
  //           }
  //           alt
  //         },
  //         "author": author -> name
  //       } | order(publishedAt desc)`);
  //       setData(response);
  //       console.log(response);

  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Orbital</h1>
      <div></div>
    </div>
  );
};

export default OrbitalComponent;
