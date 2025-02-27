import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300">
      {title}
    </h2>
  );
};

export default Title;
