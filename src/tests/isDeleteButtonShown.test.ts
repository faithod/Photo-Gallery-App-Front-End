import { isDeleteButtonShown } from "../utils/isDeleteButtonShown";

test("function that checks the location and if the users mouse is hovering over the photo, returns a boolean", () => {
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
  expect(isDeleteButtonShown(false, homeLocation)).toBeDefined();
  expect(isDeleteButtonShown(false, homeLocation)).toStrictEqual(false); // when the location is the homepage, not hovering
  expect(isDeleteButtonShown(true, homeLocation)).toStrictEqual(false); // when the location is the homepage, hovering
  expect(isDeleteButtonShown(false, profileLocation)).toStrictEqual(false); // when the location is their profile, not hovering
  expect(isDeleteButtonShown(true, profileLocation)).toStrictEqual(true); //when the location is their profile, hovering
});
