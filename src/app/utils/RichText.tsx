import { Typography } from "../MaterialComponents";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const RichText = ({ content }: { content: any }) => {
  return (
    <>
      {content?.map((block: any, index: number) => {
        if (block.type === "heading") {
          return (
            <Typography
              className="mb-3 font-semibold text-blue-gray-900 text-2xl"
              key={index}
              variant="h2"
            >
              {block.text}
            </Typography>
          );
        }
        if (block.type === "paragraph") {
          return (
            <>
              <Typography key={index} className="text-blue-gray-800 mb-3">
                {block.content.map((part: any, index: number) => {
                  if (part.bolder) {
                    return <b key={index}>{part.text}</b>;
                  } else {
                    return <span key={index}>{part.text}</span>;
                  }
                })}
              </Typography>
            </>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc pl-4 mb-3">
              {block.content.map((part: any, index: number) => {
                return <li className="text-blue-gray-800 mb-1" key={index}>{part.textBold && <b className="text-blue-gray-900">{part.textBold}</b>} {part.text}</li>;
              })}
            </ul>
          );
        }
      })}
    </>
  );
};
