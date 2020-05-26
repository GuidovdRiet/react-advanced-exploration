import React, { useRef, useCallback, useState, useEffect } from "react";

// Hooks
import useFetchOnEvent from "../../../hooks/useFetchOnEvent";

// Style
import { Button } from "./likeButton.style";

interface LikeButtonProps {
  count: number;
  messageId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ count, messageId }) => {
  const [likesTotal, setLikesTotal] = useState(count);

  // TODO: add action prop to set total Likes
  const { sendRequest, isSending, data } = useFetchOnEvent({
    endpoint: `/messages/${messageId}/interested`,
    method: `PUT`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
    dependencies: [likesTotal, messageId],
  });

  return (
    <>
      <Button onClick={sendRequest} disabled={isSending}>
        <span role="img" aria-label="thumbs up">
          👍
        </span>
      </Button>
      {/* <span>{likesTotal}</span> */}
    </>
  );
};

export default LikeButton;
