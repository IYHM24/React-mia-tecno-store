
export const getCarrousel = async () => {
    try {
        const response = await fetch("http://192.168.0.18:8080/api/carousel/all");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`error`,error);
    }
}


