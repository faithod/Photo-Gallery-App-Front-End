import { isFavouriteButtonShown } from "../utils/isFavouriteButtonShown";

test("function that checks the location, if the user is logged in and if the users mouse is hovering over the photo, returns a boolean", () => {
  const user = {
    id: 1,
    name: "Faith",
  };

  const homeLocation = {
    pathname: "/",
    search: "",
    hash: "",
    state: null,
    key: "607f3me6",
  };
  const profileLocation = {
    pathname: "/profile",
    search: "",
    hash: "",
    state: null,
    key: "s5zi7ucs",
  };
  expect(isFavouriteButtonShown(false, homeLocation, undefined)).toBeDefined();
  expect(isFavouriteButtonShown(false, homeLocation, undefined)).toStrictEqual(
    false
  ); // user is not hovering, the location is the homepage, not logged in
  expect(isFavouriteButtonShown(true, homeLocation, undefined)).toStrictEqual(
    false
  ); // user is hovering, the location is the homepage, not logged in
  expect(isFavouriteButtonShown(false, homeLocation, user)).toStrictEqual(
    false
  ); // user is not hovering, the location is the homepage, logged in
  expect(isFavouriteButtonShown(true, homeLocation, user)).toStrictEqual(true); // user is hovering, the location is the homepage, logged in
  expect(isFavouriteButtonShown(false, profileLocation, user)).toStrictEqual(
    false
  ); // user is not hovering, the location is their profile, logged in
  expect(isFavouriteButtonShown(true, profileLocation, user)).toStrictEqual(
    false
  ); //user is hovering, the location is their profile, logged in
});
