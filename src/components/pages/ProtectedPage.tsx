import React, { useState, useEffect } from "react";

// Hooks
import useFetch from "../hooks/useFetch";

// Components
import PageTemplate from "../templates/pageTemplate/PageTemplate";
import MessageCard from "../organisms/cards/MessageCard/MessageCard";

// Interfaces
import messageInterface from "../../interfaces/global/messageInterface";

const ProtectedPage = () => {
  const { isLoading, data } = useFetch({
    endpoint: `/companies/111582115204735825/timeline`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  return (
    <PageTemplate>
      <>
        {isLoading && <span>Loading...</span>}
        {data.length > 0 &&
          data.map((message: messageInterface) => (
            <MessageCard key={message.id} message={message} />
          ))}
      </>
    </PageTemplate>
  );
};

export default ProtectedPage;
