const BaseURL = process.env.NEXT_PUBLIC_BASE_URL  || "https://vmeals.pagekite.me/";
const BaseURLExternal = process.env.NEXT_PUBLIC_BASE_URL_EXTERNAL;
// //console.log("BASE", BaseURL)
export const vmealsHeader = `${BaseURL}api/vmeals-header`;
export const vmealsguide = `${BaseURL}api/vmeals-guide`;
export const vmealsCustomersChooseUs = `${BaseURL}api/vmeals-customers-choose-us`;
export const vmealsGetStarted = `${BaseURL}api/vmeals-get-started`;
export const vmealsFAQ = `${BaseURL}api/vmeals-faqs`;
export const vmealsAboutUs = `${BaseURL}api/vmeals-about-us`;
export const vmealsBlog = `${BaseURL}api/blogs`;
export const vmealsBanner = `${BaseURL}api/vmeals-banner`;
export const vmealsContactUs = `${BaseURL}api/vmeals-contact-us`;
export const vmealsFormContactUs = `${BaseURL}api/vmeals-form-contact-us`;
export const vmealsContact = `${BaseURL}api/contact`;
export const vmealsRegisterCompany = `${BaseURL}api/registerCompany`;
export const vmealsFooter = `${BaseURL}api/vmeals-footer`;
export const Footer = `${BaseURL}api/footer`;
export const vmealsIconFooter = `${BaseURL}api/vmeals-icon-footer`;
export const vmealsIcon = `${BaseURL}api/vmeals-icon`;
export const vmealsOurGeniuses = `${BaseURL}api/vmeals-our-geniuses`;
export const vmealsOurPartners = `${BaseURL}api/vmeals-our-partners`;
export const vmealsFormOurPartners = `${BaseURL}api/vmeals-form-our-partners`;
export const vmealsSEO = `${BaseURL}api/vmeals-seo`;
export const vmealsSliderBar = `${BaseURL}api/vmeals-silder-bar`;
export const vmealsOrder = `${BaseURL}api/order`;
export const vmealsCreatePayment = `${BaseURLExternal}vmeals/createPayment`;
export const vmealsClassicDietContent = `${BaseURL}api/vmeals-classic-diet`;
export const vmealsGreenDietContent = `${BaseURL}api/vmeals-green-diet`;
export const vmealsGlutenAndDairyDietContent = `${BaseURL}api/vmeals-gluten-and-dairy-diet`;
export const vmealsIndianFusionDietContent = `${BaseURL}api/vmeals-indian-fusion`;
export const vmealsPescatarianDietContent = `${BaseURL}api/vmeals-pescatarian-diet`;
export const vmealsKetoDietContent = `${BaseURL}api/vmeals-keto-diet`;
export const vmealsSubscribe = `${BaseURL}api/subscribe`;
export const vmealsOurBlogs = `${BaseURL}api/vmeals-blogs-data`;
export const vmealsOurBlogsALL = `${BaseURL}api/vmeals-blogs-data?page=1&limit=1000`;
export const vmealsPages = `${BaseURL}api/pages?page=1&limit=300`;
export const vmealsSampleMenu = `${BaseURL}api/vmeals-sample-menu`;
export const vmealsBlogCategories = `${BaseURL}api/blogcategories`;
export const useCoupon = `${BaseURLExternal}coupon/useCoupon`;
