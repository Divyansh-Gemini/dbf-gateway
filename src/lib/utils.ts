export const getDeviceId = (): string => {
    if (typeof window === "undefined") return "";

    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
        deviceId = "dev_" + Math.random().toString(36).substring(2) + Date.now().toString(36);
        localStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
};

export const getUserLocation = async (): Promise<string> => {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.city && data.region && data.country_name) {
            return `${data.city}, ${data.region}, ${data.country_name}`;
        }
        return "Location not available";
    } catch (error) {
        console.error("Error getting location:", error);
        return "Location not available";
    }
};

export const saveFormData = (name: string, mobile: string, location: string) => {
    const data = {
        name,
        mobile,
        location,
        timestamp: new Date().toISOString(),
    };
    localStorage.setItem("formData", JSON.stringify(data));
};