export const Fetch = async() => {
    try {
        let data = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        data = data.json()
        return data
    } catch (e) {
        return e
    }
}