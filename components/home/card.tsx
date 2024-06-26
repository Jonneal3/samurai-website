import React from "react";
import ReactMarkdown from "react-markdown";

export default function Card({
  title,
  description,
  demo,
  large,
}: {
  title: string;
  description: string;
  demo: React.ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`bg-transparent relative col-span-1 h-96 overflow-hidden rounded-xl border border-white/20  hover:bg-white/5 shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="mx-auto max-w-md text-center" style={{ paddingTop: "2rem" }}>
        <h2 className="bg-gradient-to-br from-white to-stone-400 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
          {title}
        </h2>
        <div className="prose-sm mt-4 text-white [text-wrap:balance] md:prose"> {/* Adjusted marginTop here */}
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className="font-medium text-white underline transition-colors"
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                  inline="true"
                  className="rounded-sm bg-gray-100 px-1 py-0.5 font-mono font-medium text-white"
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
      <div className="flex h-60 items-center justify-center">{demo}</div>
    </div>
  );
}
