/* eslint-disable */
import Badges from './Badges';

export default {
  title: "Badges",
};

export const Blue = () => <Badges variant='blue'>Blue</Badges>;
export const Gray = () => <Badges variant="gray">Gray</Badges>;
export const LightGray = () => <Badges variant="lightGray">Badges</Badges>;
export const Red = () => <Badges variant="red">Red</Badges>;
export const Teal = () => <Badges variant="teal">Teal</Badges>;
export const White = () => <Badges variant="white">White</Badges>;
export const Yellow = () => <Badges variant="yellow">Yellow</Badges>;

Blue.story = {
  name: "blue",
};
