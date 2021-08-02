const departments = [
    {
        name: 'Amazonas',
        provinces: [
            { name: 'Chachapoyas' },
            { name: 'Bagua' },
            { name: 'Bongará' },
            { name: 'Condorcanqui' },
            { name: 'Luya' },
            { name: 'Rodríguez de Mendoza' },
            { name: 'Utcubamba' },
        ]
    },
    {
        name: 'Ancash',
        provinces: [
            { name: 'Aija' },
            { name: 'Antonio Raymondi' },
            { name: 'Asunción' },
            { name: 'Bolognesi' },
            { name: 'Carhuaz' },
            { name: 'Carlos F. Fitzcarrald' },
            { name: 'Casma' },
            { name: 'Corongo' },
            { name: 'Huaraz' },
            { name: 'Huari' },
            { name: 'Huarmey' },
            { name: 'Huaylas' },
            { name: 'Mariscal Luzuriaga' },
            { name: 'Ocros' },
            { name: 'Pallasca' },
            { name: 'Pomabamba' },
            { name: 'Recuay' },
            { name: 'Santa' },
            { name: 'Sihuas' },
            { name: 'Yungay' },
        ]
    },
    {
        name: 'Apurímac',
        provinces: [
            { name: 'Abancay' },
            { name: 'Antabamba' },
            { name: 'Aymaraes' },
            { name: 'Cotabambas' },
            { name: 'Grau' },
            { name: 'Chincheros' },
            { name: 'Andahuaylas' },
        ]
    },
    {
        name: 'Arequipa',
        provinces: [
            { name: 'Arequipa' },
            { name: 'Camaná' },
            { name: 'Caravelí' },
            { name: 'Castilla' },
            { name: 'Caylloma' },
            { name: 'Condesuyos' },
            { name: 'Islay' },
            { name: 'La Unión' },
        ]
    },
    {
        name: 'Ayacucho',
        provinces: [
            { name: 'Cangallo' },
            { name: 'Huanta' },
            { name: 'Huamanga' },
            { name: 'Huanca Sancos' },
            { name: 'La Mar' },
            { name: 'Lucanas' },
            { name: 'Parinacochas' },
            { name: 'Páucar del Sara Sara' },
            { name: 'Sucre' },
            { name: 'Víctor Fajardo' },
            { name: 'Vilcashuamán' },
        ]
    },
    {
        name: 'Cajamarca',
        provinces: [
            { name: 'Cajamarca' },
            { name: 'Cajabamba' },
            { name: 'Celendín' },
            { name: 'Chota' },
            { name: 'Contumazá' },
            { name: 'Cutervo' },
            { name: 'Hualgayoc' },
            { name: 'Jaén' },
            { name: 'San Ignacio' },
            { name: 'San Marcos' },
            { name: 'San Miguel' },
            { name: 'San Pablo' },
            { name: 'Santa Cruz' },
        ]
    },
    {
        name: 'Callao',
        provinces: [
            { name: 'Callao' },
        ]
    },
    {
        name: 'Cusco',
        provinces: [
            { name: 'Cuzco' },
            { name: 'Acomayo' },
            { name: 'Anta' },
            { name: 'Calca' },
            { name: 'Canas' },
            { name: 'Canchis' },
            { name: 'Chumbivilcas' },
            { name: 'Espinar' },
            { name: 'La Convención' },
            { name: 'Paruro' },
            { name: 'Paucartambo' },
            { name: 'Quispicanchi' },
            { name: 'Urubamba' },
        ]
    },
    {
        name: 'Huancavelica',
        provinces: [
            { name: 'Huancavelica' },
            { name: 'Acobamba' },
            { name: 'Angaraes' },
            { name: 'Castrovirreyna' },
            { name: 'Churcampa' },
            { name: 'Huaytará' },
            { name: 'Tayacaja' },
        ]
    },
    {
        name: 'Huánuco',
        provinces: [
            { name: 'Huánuco' },
            { name: 'Ambo' },
            { name: 'Dos de Mayo' },
            { name: 'Huacaybamba' },
            { name: 'Huamalíes' },
            { name: 'Leoncio Prado' },
            { name: 'Marañón' },
            { name: 'Pachitea' },
            { name: 'Puerto Inca' },
            { name: 'Lauricocha' },
            { name: 'Yarowilca' },
        ]
    },
    {
        name: 'Ica',
        provinces: [
            { name: 'Ica' },
            { name: 'Chincha' },
            { name: 'Nazca' },
            { name: 'Palpa' },
            { name: 'Pisco' },
        ]
    },
    {
        name: 'Junín',
        provinces: [
            { name: 'Chanchamayo' },
            { name: 'Chupaca' },
            { name: 'Concepción' },
            { name: 'Huancayo' },
            { name: 'Jauja' },
            { name: 'Junín' },
            { name: 'Satipo' },
            { name: 'Tarma' },
            { name: 'Yauli' },
        ]
    },
    {
        name: 'La Libertad',
        provinces: [
            { name: 'Trujillo' },
            { name: 'Ascope' },
            { name: 'Bolívar' },
            { name: 'Chepén' },
            { name: 'Julcán' },
            { name: 'Otuzco' },
            { name: 'Gran Chimú' },
            { name: 'Pacasmayo' },
            { name: 'Pataz' },
            { name: 'Sánchez Carrión' },
            { name: 'Santiago de Chuco' },
            { name: 'Virú' },
        ]
    },
    {
        name: 'Lambayeque',
        provinces: [
            { name: 'Chiclayo' },
            { name: 'Ferreñafe' },
            { name: 'Lambayeque' },
        ]
    },
    {
        name: 'Lima',
        provinces: [
            { name: 'Barranca' },
            { name: 'Cajatambo' },
            { name: 'Canta' },
            { name: 'Cañete' },
            { name: 'Huaral' },
            { name: 'Huarochirí' },
            { name: 'Huaura' },
            { name: 'Lima' },
            { name: 'Oyón' },
            { name: 'Yauyos' },
        ]
    },
    {
        name: 'Loreto',
        provinces: [
            { name: 'Maynas' },
            { name: 'Putumayo' },
            { name: 'Alto Amazonas' },
            { name: 'Loreto' },
            { name: 'Mariscal Ramón Castilla' },
            { name: 'Requena' },
            { name: 'Ucayali' },
            { name: 'Datem del Marañón' },
        ]
    },
    {
        name: 'Madre de Dios',
        provinces: [
            { name: 'Tambopata' },
            { name: 'Manu' },
            { name: 'Tahuamanu' },
        ]
    },
    {
        name: 'Moquegua',
        provinces: [
            { name: 'Mariscal Nieto' },
            { name: 'General Sánchez Cerro' },
            { name: 'Ilo' },
        ]
    },
    {
        name: 'Pasco',
        provinces: [
            { name: 'Pasco' },
            { name: 'Oxapampa' },
            { name: 'Daniel A. Carrión' },
        ]
    },
    {
        name: 'Piura',
        provinces: [
            { name: 'Ayabaca' },
            { name: 'Huancabamba' },
            { name: 'Morropón' },
            { name: 'Piura' },
            { name: 'Sechura' },
            { name: 'Sullana' },
            { name: 'Paita' },
            { name: 'Talara' },
        ]
    },
    {
        name: 'Puno',
        provinces: [
            { name: 'San Román' },
            { name: 'Puno' },
            { name: 'Azángaro' },
            { name: 'Chucuito' },
            { name: 'El Collao' },
            { name: 'Melgar' },
            { name: 'Carabaya' },
            { name: 'Huancané' },
            { name: 'Sandia' },
            { name: 'San Antonio de Putina' },
            { name: 'Lampa' },
            { name: 'Yunguyo' },
            { name: 'Moho' },
        ]
    },
    {
        name: 'San Martín',
        provinces: [
            { name: 'Bellavista' },
            { name: 'El Dorado' },
            { name: 'Huallaga' },
            { name: 'Lamas' },
            { name: 'Mariscal Cáceres' },
            { name: 'Moyobamba' },
            { name: 'Picota' },
            { name: 'Rioja' },
            { name: 'San Martín' },
            { name: 'Tocache' },
        ]
    },
    {
        name: 'Tacna',
        provinces: [
            { name: 'Tacna' },
            { name: 'Candarave' },
            { name: 'Jorge Basadre' },
            { name: 'Tarata' },
        ]
    },
    {
        name: 'Tumbes',
        provinces: [
            { name: 'Tumbes' },
            { name: 'Zarumilla' },
            { name: 'Contralmirante Villar' },
        ]
    },
    {
        name: 'Ucayali',
        provinces: [
            { name: 'Coronel Portillo' },
            { name: 'Atalaya' },
            { name: 'Padre Abad' },
            { name: 'Purús' },
        ]
    },
]

export default departments;