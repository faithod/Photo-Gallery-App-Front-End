import { filterGallery } from "../utils/filterGallery";

test("Helper function filters the home page photos based on search term and the users favourites list, should return a filtered array of photos", () => {
  const photosExample = [
    {
      id: 1571460,
      alt: "Interior Design Of A House",
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1090638,
      alt: "Crates Mounted On Wall",
      url: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 279719,
      alt: "Flat Screen Monitor on Wall Near Sofa Set",
      url: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 276267,
      alt: "Color Shade Samples",
      url: "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1643383,
      alt: "Interior Design Of Home",
      url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1080696,
      alt: "Black Kettle Beside Condiment Shakers and Green Fruits and Plants on Tray on Brown Wooden Table",
      url: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1457842,
      alt: "Photo of Living Room",
      url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 276724,
      alt: "Turned-off Flat Screen Tv",
      url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];
  const favouritesExample = [
    {
      id: 9,
      user_id: 1,
      photo_id: 1571460,
      alt: "Interior Design Of A House",
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 10,
      user_id: 1,
      photo_id: 276724,
      alt: "Turned-off Flat Screen Tv",
      url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 11,
      user_id: 1,
      photo_id: 383568,
      alt: "Assorted Paintings",
      url: "https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];

  const filteredPhotosOne = [
    {
      id: 1571460,
      alt: "Interior Design Of A House",
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1090638,
      alt: "Crates Mounted On Wall",
      url: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 279719,
      alt: "Flat Screen Monitor on Wall Near Sofa Set",
      url: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 276267,
      alt: "Color Shade Samples",
      url: "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1643383,
      alt: "Interior Design Of Home",
      url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1080696,
      alt: "Black Kettle Beside Condiment Shakers and Green Fruits and Plants on Tray on Brown Wooden Table",
      url: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1457842,
      alt: "Photo of Living Room",
      url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 276724,
      alt: "Turned-off Flat Screen Tv",
      url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];
  const filteredPhotosTwo = [
    {
      id: 1571460,
      alt: "Interior Design Of A House",
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1643383,
      alt: "Interior Design Of Home",
      url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1457842,
      alt: "Photo of Living Room",
      url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];
  const filteredPhotosThree = [
    {
      id: 1090638,
      alt: "Crates Mounted On Wall",
      url: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 279719,
      alt: "Flat Screen Monitor on Wall Near Sofa Set",
      url: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 276267,
      alt: "Color Shade Samples",
      url: "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1643383,
      alt: "Interior Design Of Home",
      url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1080696,
      alt: "Black Kettle Beside Condiment Shakers and Green Fruits and Plants on Tray on Brown Wooden Table",
      url: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 1457842,
      alt: "Photo of Living Room",
      url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];
  const filteredPhotosFour = [
    {
      id: 1080696,
      alt: "Black Kettle Beside Condiment Shakers and Green Fruits and Plants on Tray on Brown Wooden Table",
      url: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];
  const user = {
    id: 1,
    name: "Faith",
  };

  expect(filterGallery(undefined, photosExample, "", undefined)).toBeDefined();
  expect(filterGallery(undefined, photosExample, "", undefined)).toStrictEqual(
    filteredPhotosOne
  ); //logged out, no search
  expect(
    filterGallery(undefined, photosExample, "ho", undefined)
  ).toStrictEqual(filteredPhotosTwo); //logged out, search
  expect(
    filterGallery(user, photosExample, "", favouritesExample)
  ).toStrictEqual(filteredPhotosThree); //logged in, no search
  expect(
    filterGallery(user, photosExample, "kettle", favouritesExample)
  ).toStrictEqual(filteredPhotosFour); //logged in, search
});
