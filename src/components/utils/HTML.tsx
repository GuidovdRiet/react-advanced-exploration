import React from "react";

interface HTMLprops {
  children: string;
  component?: React.ReactType;
  stripHTML?: boolean;
  truncate: number;
  className?: string;
}

const HTML: React.FC<HTMLprops> = ({
  children,
  component: Comp = "span",
  stripHTML,
  truncate,
  className,
}) => {
  const stripHTMLEntities = (html: string) =>
    html.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");

  const truncateText = (html: string, truncate: number) =>
    html.length > truncate
      ? html
          .replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "")
          .substring(0, truncate)
          .concat("...")
          .trim()
      : html;

  const html = truncate ? truncateText(children, truncate) : children;

  return (
    <Comp
      className={className}
      dangerouslySetInnerHTML={{
        __html: stripHTML ? stripHTMLEntities(html) : html,
      }}
    />
  );
};

export default HTML;
