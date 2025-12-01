import React from 'react';
import { Ticker } from 'motion-plus/react';
import Image from 'next/image';

const items = [
  <Image src="./icons/figma.svg" alt="figma" width={50} height={50} key="figmaicon" />,
  <Image
    src="./icons/Illustrator.svg"
    alt="Illustrator"
    width={50}
    height={50}
    key="Illustratoricon"
  />,
  <Image src="./icons/React.svg" alt="React" width={50} height={50} key="Reacticon" />,
  <Image src="./icons/Photoshop.svg" alt="Photoshop" width={50} height={50} key="Photoshopicon" />,

  <Image src="./icons/next.svg" alt="next" width={50} height={50} key="nexticon" />,
];

const TickerTape = () => {
  return (
    <div>
      <Ticker items={items} axis="x" gap={100} />
    </div>
  );
};

export default TickerTape;
