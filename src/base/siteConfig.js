export const desc = 'welcome to begoingto website, I am Begoingto, I first scholarship of full stack web development. I come from SETEC institute.'

export const thumbnailDefault = "https://www.rkteach.com/uploads/upload-image.jpg"
export const API_URL = 'https://api.escuelajs.co/api/v1'
export const FILE_SIZE = 1024; // 1MB
export const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
export const moneyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
});