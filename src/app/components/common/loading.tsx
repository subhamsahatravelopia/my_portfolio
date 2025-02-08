import React from 'react';
import SectionHeading from './sectionheading';

type HeadingProps = {
  name: string;
  styledName: string;
};
const Loading = ({ name, styledName }: HeadingProps) => {
  return (
    <div className="flex justify-center mb-12">
      <SectionHeading name={name} styledName={styledName} />
    </div>
  );
};

export default Loading;
