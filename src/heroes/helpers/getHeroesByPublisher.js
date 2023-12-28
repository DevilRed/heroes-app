import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (validPublishers.includes(publisher)) {
    return heroes.filter((pub) => pub.publisher === publisher);
  }
  throw new Error(`${publisher} is not a valid publisher`);
};
