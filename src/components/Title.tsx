import react from 'react';

interface TitleProps {
  className: string;
  titleText: string;
  size?: number;
}

function Title({ className, titleText, size }: TitleProps) {
  return (
    <div
      className={className}
      style={{ textAlign: 'center', fontSize: size ? size : 18 }}
    >
      {titleText}
    </div>
  );
}

export default Title;
