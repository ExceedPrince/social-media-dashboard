const data = {
  platforms: [
    { facebook: { name: "nathanf", text: "followers", number: 1987, difference: 12 } },
    { twitter: { name: "nathanf", text: "followers", number: 1044, difference: 99 } },
    { instagram: { name: "realnathanf", text: "followers", number: 11012, difference: 1099 } },
    { youtube: { name: "Nathan F.", text: "subscribers", number: 8239, difference: -144 } },
  ],
  events: [
    { platform: "facebook", type: "Page views", amount: 87, modifier: 3 },
    { platform: "facebook", type: "Likes", amount: 52, modifier: -2 },
    { platform: "instagram", type: "Likes", amount: 5462, modifier: 2257 },
    { platform: "instagram", type: "Profile Views", amount: 52150, modifier: 1375 },
    { platform: "twitter", type: "Retweets", amount: 117, modifier: 303 },
    { platform: "twitter", type: "Likes", amount: 507, modifier: 553 },
    { platform: "youtube", type: "Likes", amount: 107, modifier: -19 },
    { platform: "youtube", type: "Total Views", amount: 1407, modifier: -12 },
  ],
};
export default data;
