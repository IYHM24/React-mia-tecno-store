
export const getCarrousel = async () => {
    try {
        const response = await fetch("http://146.148.106.79:8080/api/carousel/all");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`error`,error);
    }
}


