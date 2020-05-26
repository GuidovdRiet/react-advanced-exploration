import React from "react";
import { MemoryRouter } from "react-router";
import MessageCard from "./MessageCard";

export default {
  title: "organisms/cards/MessageCard",
  component: MessageCard,
};

export const Default = () => (
  <MemoryRouter>
    <MessageCard
      message={{
        id: "141581942585301181",
        title: "Survey opening hours",
        content:
          "<p>We would like to ask your opinion on the permitted opening hours of our shops. Are the current opening hours sufficient to keep customers satisfied? Is there a need for more flexibility or more uniformity? Are the opening hours of shops and food &amp; beverages well in line with each other?</p><p>Please give us your opinion, so we can include it in our new opening hours policy</p>",
        interest_count: 2,
        attachments: [
          {
            id: "311582115385425575",
            name: "openingstijden.png",
            created_at: "2020-02-19T12:29:45+00:00",
            size: 272864,
            mime_type: "image/png",
            url: "https://demo.chainels.com/image/311582115385425575",
            resource_type: "File",
          },
        ],
      }}
    />
  </MemoryRouter>
);
