// Sugeneruoja atsitiktinį 8 simbolių registracijos kodą
const generateRegistrationCode = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
};

// Gauti visus paspirtukus iš localStorage
const getScooters = () => {
    return JSON.parse(localStorage.getItem('scooters')) || [];
};

// Išsaugoti paspirtukus į localStorage
const saveScooters = (scooters) => {
    localStorage.setItem('scooters', JSON.stringify(scooters));
};

// Pridėti naują paspirtuką
const addScooter = () => {
    const scooters = getScooters();
    const newScooter = {
        id: scooters.length ? scooters[scooters.length - 1].id + 1 : 1,
        registrationCode: generateRegistrationCode(),
        isBusy: 0,
        lastUseTime: new Date().toISOString().split('T')[0],
        totalRideKilometres: 0.0
    };
    scooters.push(newScooter);
    saveScooters(scooters);
    return newScooter;
};

// Atnaujinti paspirtuką
const updateScooter = (id, updatedData) => {
    let scooters = getScooters();
    scooters = scooters.map(scooter =>
        scooter.id === id ? { ...scooter, ...updatedData } : scooter
    );
    saveScooters(scooters);
};

// Ištrinti paspirtuką
const deleteScooter = (id) => {
    let scooters = getScooters().filter(scooter => scooter.id !== id);
    saveScooters(scooters);
};

export { getScooters, addScooter, updateScooter, deleteScooter };
