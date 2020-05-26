import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

// Components
import PageTemplate from "../templates/pageTemplate/PageTemplate";
import HTML from "../utils/HTML";

// Interfaces
import messageInterface from "../../interfaces/global/messageInterface";

interface RouteParams {
  id: string;
}

const Message = () => {
  const match = useParams<RouteParams>();
  const [data, setData] = useState<messageInterface>();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://demo.chainels.com/api/v2/messages/${match.id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const json = await response.json();

      setData(json);
    };

    fetchData();
  }, []);

  return (
    <PageTemplate>
      <button onClick={() => history.goBack()}>◀️ Back</button>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <HTML truncate={150} component="p">
            {data.content}
          </HTML>
        </div>
      )}
    </PageTemplate>
  );
};

export default Message;
