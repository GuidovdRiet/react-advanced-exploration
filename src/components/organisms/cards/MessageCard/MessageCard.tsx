import React, { FC } from "react";
import { Link } from "react-router-dom";

// Components
import HTML from "../../../utils/HTML";
import LikeButton from "../../../atoms/buttons/LikeButton/LikeButton";

// Style
import { MessageCardWrapper } from "./messageCard.style";

// interfaces
import messageInterface from "../../../../interfaces/global/messageInterface";

interface MessageCardProps {
  message: messageInterface;
}

const MessageCard: FC<MessageCardProps> = ({
  message: { id, title, content, attachments, interest_count },
}) => {
  const image: string | null =
    attachments.length > 0 ? attachments[0].url : null;

  return (
    <MessageCardWrapper>
      {image && <img className="img" src={image} alt="timeline" />}
      <div className="contentWrapper">
        <h1 className="title">{title}</h1>
        <HTML truncate={160}>{content}</HTML>
        <Link to={`/timeline/message/${id}`}>View</Link>
      </div>
      <div className="buttonWrapper">
        <LikeButton count={interest_count} messageId={id} />
      </div>
    </MessageCardWrapper>
  );
};

export default MessageCard;
