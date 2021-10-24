const departments = [
    {
        name: 'AMAZONAS',
        provinces: [
            {
                name: 'CHACHAPOYAS',
                districts: [
                    { name: 'CHACHAPOYAS' },
                    { name: 'ASUNCION' },
                    { name: 'BALSAS' },
                    { name: 'CHETO' },
                    { name: 'CHILIQUIN' },
                    { name: 'CHUQUIBAMBA' },
                    { name: 'GRANADA' },
                    { name: 'HUANCAS' },
                    { name: 'LA JALCA' },
                    { name: 'LEIMEBAMBA' },
                    { name: 'LEVANTO' },
                    { name: 'MAGDALENA' },
                    { name: 'MARISCAL CASTILLA' },
                    { name: 'MOLINOPAMPA' },
                    { name: 'MONTEVIDEO' },
                    { name: 'OLLEROS' },
                    { name: 'QUINJALCA' },
                    { name: 'SAN FRANCISCO DE DAGUAS' },
                    { name: 'SAN ISIDRO DE MAINO' },
                    { name: 'SOLOCO' },
                    { name: 'SONCHE' },
                ]
            },
            {
                name: 'BAGUA',
                districts: [
                    { name: 'BAGUA' },
                    { name: 'ARAMANGO' },
                    { name: 'COPALLIN' },
                    { name: 'EL PARCO' },
                    { name: 'IMAZA' },
                    { name: 'LA PECA' },
                ]
            },
            {
                name: 'BONGARA',
                districts: [
                    { name: 'JUMBILLA' },
                    { name: 'CHISQUILLA' },
                    { name: 'CHURUJA' },
                    { name: 'COROSHA' },
                    { name: 'CUISPES' },
                    { name: 'FLORIDA' },
                    { name: 'JAZAN' },
                    { name: 'RECTA' },
                    { name: 'SAN CARLOS' },
                    { name: 'SHIPASBAMBA' },
                    { name: 'VALERA' },
                    { name: 'YAMBRASBAMBA' },
                ]
            },
            {
                name: 'CONDORCANQUI',
                districts: [
                    { name: 'EL CENEPA' },
                    { name: 'NIEVA' },
                    { name: 'RIO SANTIAGO' },
                ]
            },
            {
                name: 'LUYA',
                districts: [
                    { name: 'LAMUD' },
                    { name: 'CAMPORREDONDO' },
                    { name: 'COCABAMBA' },
                    { name: 'COLCAMAR' },
                    { name: 'CONILA' },
                    { name: 'INGUILPATA' },
                    { name: 'LONGUITA' },
                    { name: 'LONYA CHICO' },
                    { name: 'LUYA' },
                    { name: 'LUYA VIEJO' },
                    { name: 'MARIA' },
                    { name: 'OCALLI' },
                    { name: 'OCUMAL' },
                    { name: 'PISUQUIA' },
                    { name: 'PROVIDENCIA' },
                    { name: 'SAN CRISTOBAL' },
                    { name: 'SAN FRANCISCO DEL YESO' },
                    { name: 'SAN JERONIMO' },
                    { name: 'SAN JUAN DE LOPECANCHA' },
                    { name: 'SANTA CATALINA' },
                    { name: 'SANTO TOMAS' },
                    { name: 'TINGO' },
                    { name: 'TRITA' },
                ]
            },
            {
                name: 'RODRIGUEZ DE MENDOZA',
                districts: [
                    { name: 'SAN NICOLAS' },
                    { name: 'CHIRIMOTO' },
                    { name: 'COCHAMAL' },
                    { name: 'HUAMBO' },
                    { name: 'LIMABAMBA' },
                    { name: 'LONGAR' },
                    { name: 'MARISCAL BENAVIDES' },
                    { name: 'MILPUC' },
                    { name: 'OMIA' },
                    { name: 'SANTA ROSA' },
                    { name: 'TOTORA' },
                    { name: 'VISTA ALEGRE' },
                ]
            },
            {
                name: 'UTCUBAMBA',
                districts: [
                    { name: 'BAGUA GRANDE' },
                    { name: 'CAJARURO' },
                    { name: 'CUMBA' },
                    { name: 'EL MILAGRO' },
                    { name: 'JAMALCA' },
                    { name: 'LONYA GRANDE' },
                    { name: 'YAMON' },
                ]
            },
        ]
    },
    {
        name: 'ANCASH',
        provinces: [
            {
                name: 'AIJA',
                districts: [
                    { name: 'AIJA' },
                    { name: 'CORIS' },
                    { name: 'HUACLLAN' },
                    { name: 'LA MERCED' },
                    { name: 'SUCCHA' },
                ]
            },
            {
                name: 'ANTONIO RAYMONDI',
                districts: [
                    { name: 'LLAMELLIN' },
                    { name: 'ACZO' },
                    { name: 'CHACCHO' },
                    { name: 'CHINGAS' },
                    { name: 'MIRGAS' },
                    { name: 'SAN JUAN DE RONTOY' },
                ]
            },
            {
                name: 'ASUNCION',
                districts: [
                    { name: 'CHACAS' },
                    { name: 'ACOCHACA' },
                ]
            },
            {
                name: 'BOLOGNESI',
                districts: [
                    { name: 'CHIQUIAN' },
                    { name: 'ABELARDO PARDO LEZAMETA' },
                    { name: 'ANTONIO RAYMONDI' },
                    { name: 'AQUIA' },
                    { name: 'CAJACAY' },
                    { name: 'CANIS' },
                    { name: 'COLQUIOC' },
                    { name: 'HUALLANCA' },
                    { name: 'HUASTA' },
                    { name: 'HUAYLLACAYAN' },
                    { name: 'LA PRIMAVERA' },
                    { name: 'MANGAS' },
                    { name: 'PACLLON' },
                    { name: 'SAN MIGUEL DE CORPANQUI' },
                    { name: 'TICLLOS' },
                ]
            },
            {
                name: 'CARHUAZ',
                districts: [
                    { name: 'CARHUAZ' },
                    { name: 'ACOPAMPA' },
                    { name: 'AMASHCA' },
                    { name: 'ANTA' },
                    { name: 'ATAQUERO' },
                    { name: 'MARCARA' },
                    { name: 'PARIAHUANCA' },
                    { name: 'SAN MIGUEL DE ACO' },
                    { name: 'SHILLA' },
                    { name: 'TINCO' },
                    { name: 'YUNGAR' },
                ]
            },
            {
                name: 'CARLOS F. FITZCARRALD',
                districts: [
                    { name: 'SAN LUIS' },
                    { name: 'SAN NICOLAS' },
                    { name: 'YAUYA' },
                ]
            },
            {
                name: 'CASMA',
                districts: [
                    { name: 'CASMA' },
                    { name: 'BUENA VISTA ALTA' },
                    { name: 'COMANDANTE NOEL' },
                    { name: 'YAUTAN' },
                ]
            },
            {
                name: 'CORONGO',
                districts: [
                    { name: 'CORONGO' },
                    { name: 'ACO' },
                    { name: 'BAMBAS' },
                    { name: 'CUSCA' },
                    { name: 'LA PAMPA' },
                    { name: 'YANAC' },
                    { name: 'YUPAN' },
                ]
            },
            {
                name: 'HUARAZ',
                districts: [
                    { name: 'HUARAZ' },
                    { name: 'COCHABAMBA' },
                    { name: 'COLCABAMBA' },
                    { name: 'HUANCHAY' },
                    { name: 'INDEPENDENCIA' },
                    { name: 'JANGAS' },
                    { name: 'LA LIBERTAD' },
                    { name: 'OLLEROS' },
                    { name: 'PAMPAS' },
                    { name: 'PIRA' },
                    { name: 'PARIACOTO' },
                    { name: 'TARICA' },
                ]
            },
            {
                name: 'HUARI',
                districts: [
                    { name: 'HUARI' },
                    { name: 'ANRA' },
                    { name: 'CAJAY' },
                    { name: 'CHAVIN DE HUANTAR' },
                    { name: 'HUACACHI' },
                    { name: 'HUACCHIS' },
                    { name: 'HUACHIS' },
                    { name: 'HUANTAR' },
                    { name: 'MASIN' },
                    { name: 'PONTO' },
                    { name: 'PAUCAS' },
                    { name: 'RAPAYAN' },
                    { name: 'SAN MARCOS' },
                    { name: 'SAN PEDRO DE CHANA' },
                    { name: 'UCO' },
                ]
            },
            {
                name: 'HUARMEY',
                districts: [
                    { name: 'HUARMEY' },
                    { name: 'COCHAPETI' },
                    { name: 'CULEBRAS' },
                    { name: 'HUAYAN' },
                    { name: 'MALVAS' },
                ]
            },
            {
                name: 'HUAYLAS',
                districts: [
                    { name: 'CARAZ' },
                    { name: 'HUALLANCA' },
                    { name: 'HUATA' },
                    { name: 'HUAYLAS' },
                    { name: 'MATO' },
                    { name: 'PAMPAROMAS' },
                    { name: 'PUEBLO LIBRE' },
                    { name: 'SANTA CRUZ' },
                    { name: 'SANTO TORIBIO' },
                    { name: 'YURACMARCA' },
                ]
            },
            {
                name: 'MARISCAL LUZURIAGA',
                districts: [
                    { name: 'PISCOBAMBA' },
                    { name: 'CASCA' },
                    { name: 'ELEAZAR GUZMAN BARRON' },
                    { name: 'FIDEL OLIVAS ESCUDERO' },
                    { name: 'LLAMA' },
                    { name: 'LLUMPA' },
                    { name: 'LUCMA' },
                    { name: 'MUSGA' },
                ]
            },
            {
                name: 'OCROS',
                districts: [
                    { name: 'OCROS' },
                    { name: 'ACAS' },
                    { name: 'CAJAMARQUILLA' },
                    { name: 'CARHUAPAMPA' },
                    { name: 'COCHAS' },
                    { name: 'CONGAS' },
                    { name: 'LLIPA' },
                    { name: 'SAN CRISTOBAL DE RAJAN' },
                    { name: 'SAN PEDRO' },
                    { name: 'SANTIAGO DE CHILCAS' },
                ]
            },
            {
                name: 'PALLASCA',
                districts: [
                    { name: 'CABANA' },
                    { name: 'BOLOGNESI' },
                    { name: 'CONCHUCOS' },
                    { name: 'HUACASCHUQUE' },
                    { name: 'HUANDOVAL' },
                    { name: 'LACABAMBA' },
                    { name: 'LLAPO' },
                    { name: 'PALLASCA' },
                    { name: 'PAMPAS' },
                    { name: 'SANTA ROSA' },
                    { name: 'TAUCA' },
                ]
            },
            {
                name: 'POMABAMBA',
                districts: [
                    { name: 'POMABAMBA' },
                    { name: 'HUAYLLAN' },
                    { name: 'PAROBAMBA' },
                    { name: 'QUINUABAMBA' },
                ]
            },
            {
                name: 'RECUAY',
                districts: [
                    { name: 'CHACHAPOYAS' },
                    { name: 'RECUAY' },
                    { name: 'CATAC' },
                    { name: 'COTAPARACO' },
                    { name: 'HUAYLLAPAMPA' },
                    { name: 'LLACLLIN' },
                    { name: 'MARCA' },
                    { name: 'PAMPAS CHICO' },
                    { name: 'PARARIN' },
                    { name: 'TAPACOCHA' },
                    { name: 'TICAPAMPA' },
                ]
            },
            {
                name: 'SANTA',
                districts: [
                    { name: 'CHIMBOTE' },
                    { name: 'CACERES DEL PERU' },
                    { name: 'COISHCO' },
                    { name: 'MACATE' },
                    { name: 'MORO' },
                    { name: 'NEPEÑA' },
                    { name: 'SAMANCO' },
                    { name: 'SANTA' },
                    { name: 'NUEVO CHIMBOTE' },
                ]
            },
            {
                name: 'SIHUAS',
                districts: [
                    { name: 'SIHUAS' },
                    { name: 'ACOBAMBA' },
                    { name: 'ALFONSO UGARTE' },
                    { name: 'CASHAPAMPA' },
                    { name: 'CHINGALPO' },
                    { name: 'HUAYLLABAMBA' },
                    { name: 'QUICHES' },
                    { name: 'RAGASH' },
                    { name: 'SAN JUAN' },
                    { name: 'SICSIBAMBA' },
                ]
            },
            {
                name: 'YUNGAY',
                districts: [
                    { name: 'YUNGAY' },
                    { name: 'CASCAPARA' },
                    { name: 'MANCOS' },
                    { name: 'MATACOTO' },
                    { name: 'QUILLO' },
                    { name: 'RANRAHIRCA' },
                    { name: 'SHUPLUY' },
                    { name: 'YANAMA' },
                ]
            },
        ]
    },
    {
        name: 'APURIMAC',
        provinces: [
            {
                name: 'ABANCAY',
                districts: [
                    { name: 'ABANCAY' },
                    { name: 'CHACOCHE' },
                    { name: 'CIRCA' },
                    { name: 'CURAHUASI' },
                    { name: 'HUANIPACA' },
                    { name: 'LAMBRAMA' },
                    { name: 'PICHIRHUA' },
                    { name: 'SAN PEDRO DE CACHORA' },
                    { name: 'TAMBURCO' },
                ]
            },
            {
                name: 'ANTABAMBA',
                districts: [
                    { name: 'ANTABAMBA' },
                    { name: 'EL ORO' },
                    { name: 'HUAQUIRCA' },
                    { name: 'JUAN ESPINOZA MEDRANO' },
                    { name: 'OROPESA' },
                    { name: 'PACHACONAS' },
                    { name: 'SABAINO' },
                ]
            },
            {
                name: 'AYMARAES',
                districts: [
                    { name: 'CHALHUANCA' },
                    { name: 'CAPAYA' },
                    { name: 'CARAYBAMBA' },
                    { name: 'CHAPIMARCA' },
                    { name: 'COLCABAMBA' },
                    { name: 'COTARUSE' },
                    { name: 'HUAYLLO' },
                    { name: 'JUSTO APU SAHUARAURA' },
                    { name: 'LUCRE' },
                    { name: 'POCOHUANCA' },
                    { name: 'SAN JUAN DE CHACÑA' },
                    { name: 'SAÑAYCA' },
                    { name: 'SORAYA' },
                    { name: 'TAPAIRIHUA' },
                    { name: 'TINTAY' },
                    { name: 'TORAYA' },
                    { name: 'YANACA' },
                ]
            },
            {
                name: 'COTABAMBAS',
                districts: [
                    { name: 'TAMBOBAMBA' },
                    { name: 'COTABAMBAS' },
                    { name: 'COYLLURQUI' },
                    { name: 'HAQUIRA' },
                    { name: 'MARA' },
                    { name: 'CHALLHUAHUACHO' },
                ]
            },
            {
                name: 'GRAU',
                districts: [
                    { name: 'CHUQUIBAMBILLA' },
                    { name: 'CURPAHUASI' },
                    { name: 'GAMARRA' },
                    { name: 'HUAYLLATI' },
                    { name: 'MAMARA' },
                    { name: 'MICAELA BASTIDAS' },
                    { name: 'PATAYPAMPA' },
                    { name: 'PROGRESO' },
                    { name: 'SAN ANTONIO' },
                    { name: 'SANTA ROSA' },
                    { name: 'TURPAY' },
                    { name: 'VILCABAMBA' },
                    { name: 'VIRUNDO' },
                    { name: 'CURASCO' },
                ]
            },
            {
                name: 'CHINCHEROS',
                districts: [
                    { name: 'CHINCHEROS' },
                    { name: 'ANCO-HUALLO' },
                    { name: 'COCHARCAS' },
                    { name: 'HUACCANA' },
                    { name: 'OCOBAMBA' },
                    { name: 'ONGOY' },
                    { name: 'URANMARCA' },
                    { name: 'RANRACANCHA' },
                ]
            },
            {
                name: 'ANDAHUAYLAS',
                districts: [
                    { name: 'ANDAHUAYLAS' },
                    { name: 'ANDARAPA' },
                    { name: 'CHIARA' },
                    { name: 'HUANCARAMA' },
                    { name: 'HUANCARAY' },
                    { name: 'HUAYANA' },
                    { name: 'KISHUARA' },
                    { name: 'PACOBAMBA' },
                    { name: 'PACUCHA' },
                    { name: 'PAMPACHIRI' },
                    { name: 'POMACOCHA' },
                    { name: 'SAN ANTONIO DE CACHI' },
                    { name: 'SAN JERONIMO' },
                    { name: 'SAN MIGUEL DE CHACCRAMPA' },
                    { name: 'SANTA MARIA DE CHICMO' },
                    { name: 'TALAVERA' },
                    { name: 'TUMAY HUARACA' },
                    { name: 'TURPO' },
                    { name: 'KAQUIABAMBA' },
                ]
            },
        ]
    },
    {
        name: 'AREQUIPA',
        provinces: [
            {
                name: 'AREQUIPA',
                districts: [
                    { name: 'AREQUIPA' },
                    { name: 'ALTO SELVA ALEGRE' },
                    { name: 'CAYMA' },
                    { name: 'CERRO COLORADO' },
                    { name: 'CHARACATO' },
                    { name: 'CHIGUATA' },
                    { name: 'JACOBO HUNTER' },
                    { name: 'LA JOYA' },
                    { name: 'MARIANO MELGAR' },
                    { name: 'MIRAFLORES' },
                    { name: 'MOLLEBAYA' },
                    { name: 'PAUCARPATA' },
                    { name: 'POCSI' },
                    { name: 'POLOBAYA' },
                    { name: 'QUEQUEÑA' },
                    { name: 'SABANDIA' },
                    { name: 'SACHACA' },
                    { name: 'SAN JUAN DE SIGUAS' },
                    { name: 'SAN JUAN DE TARUCANI' },
                    { name: 'SANTA ISABEL DE SIGUAS' },
                    { name: 'SANTA RITA DE SIGUAS' },
                    { name: 'SOCABAYA' },
                    { name: 'TIABAYA' },
                    { name: 'UCHUMAYO' },
                    { name: 'VITOR' },
                    { name: 'YANAHUARA' },
                    { name: 'YARABAMBA' },
                    { name: 'YURA' },
                    { name: 'JOSE LUIS BUSTAMANTE Y RIVERO' },
                ]
            },
            {
                name: 'CAMANA',
                districts: [
                    { name: 'CAMANA' },
                    { name: 'JOSE MARIA QUIMPER' },
                    { name: 'MARIANO NICOLAS VALCARCEL' },
                    { name: 'MARISCAL CACERES' },
                    { name: 'NICOLAS DE PIEROLA' },
                    { name: 'OCOÑA' },
                    { name: 'QUILCA' },
                    { name: 'SAMUEL PASTOR' },
                ]
            },
            {
                name: 'CARAVELI',
                districts: [
                    { name: 'CARAVELI' },
                    { name: 'ACARI' },
                    { name: 'ATICO' },
                    { name: 'ATIQUIPA' },
                    { name: 'BELLA UNION' },
                    { name: 'CAHUACHO' },
                    { name: 'CHALA' },
                    { name: 'CHAPARRA' },
                    { name: 'HUANUHUANU' },
                    { name: 'JAQUI' },
                    { name: 'LOMAS' },
                    { name: 'QUICACHA' },
                    { name: 'YAUCA' },
                ]
            },
            {
                name: 'CASTILLA',
                districts: [
                    { name: 'APLAO' },
                    { name: 'ANDAGUA' },
                    { name: 'AYO' },
                    { name: 'CHACHAS' },
                    { name: 'CHILCAYMARCA' },
                    { name: 'CHOCO' },
                    { name: 'HUANCARQUI' },
                    { name: 'MACHAGUAY' },
                    { name: 'ORCOPAMPA' },
                    { name: 'PAMPACOLCA' },
                    { name: 'TIPAN' },
                    { name: 'UÑON' },
                    { name: 'URACA' },
                    { name: 'VIRACO' },
                ]
            },
            {
                name: 'CAYLLOMA',
                districts: [
                    { name: 'CHIVAY' },
                    { name: 'ACHOMA' },
                    { name: 'CABANACONDE' },
                    { name: 'CALLALLI' },
                    { name: 'CAYLLOMA' },
                    { name: 'COPORAQUE' },
                    { name: 'HUAMBO' },
                    { name: 'HUANCA' },
                    { name: 'ICHUPAMPA' },
                    { name: 'LARI' },
                    { name: 'LLUTA' },
                    { name: 'MACA' },
                    { name: 'MADRIGAL' },
                    { name: 'SAN ANTONIO DE CHUCA' },
                    { name: 'SIBAYO' },
                    { name: 'TAPAY' },
                    { name: 'TISCO' },
                    { name: 'TUTI' },
                    { name: 'YANQUE' },
                    { name: 'MAJES' },
                ]
            },
            {
                name: 'CONDESUYOS',
                districts: [
                    { name: 'CHUQUIBAMBA' },
                    { name: 'ANDARAY' },
                    { name: 'CAYARANI' },
                    { name: 'CHICHAS' },
                    { name: 'IRAY' },
                    { name: 'RIO GRANDE' },
                    { name: 'SALAMANCA' },
                    { name: 'YANAQUIHUA' },
                ]
            },
            {
                name: 'ISLAY',
                districts: [
                    { name: 'MOLLENDO' },
                    { name: 'COCACHACRA' },
                    { name: 'DEAN VALDIVIA' },
                    { name: 'ISLAY' },
                    { name: 'MEJIA' },
                    { name: 'PUNTA DE BOMBON' },
                ]
            },
            {
                name: 'LA UNION',
                districts: [
                    { name: 'COTAHUASI' },
                    { name: 'ALCA' },
                    { name: 'CHARCANA' },
                    { name: 'HUAYNACOTAS' },
                    { name: 'PAMPAMARCA' },
                    { name: 'PUYCA' },
                    { name: 'QUECHUALLA' },
                    { name: 'SAYLA' },
                    { name: 'TAURIA' },
                    { name: 'TOMEPAMPA' },
                    { name: 'TORO' },
                ]
            },
        ]
    },
    {
        name: 'AYACUCHO',
        provinces: [
            {
                name: 'CANGALLO',
                districts: [
                    { name: 'CANGALLO' },
                    { name: 'CHUSCHI' },
                    { name: 'LOS MOROCHUCOS' },
                    { name: 'MARIA PARADO DE BELLIDO' },
                    { name: 'PARAS' },
                    { name: 'TOTOS' },
                ]
            },
            {
                name: 'HUANTA',
                districts: [
                    { name: 'HUANTA' },
                    { name: 'AYAHUANCO' },
                    { name: 'HUAMANGUILLA' },
                    { name: 'IGUAIN' },
                    { name: 'LURICOCHA' },
                    { name: 'SANTILLANA' },
                    { name: 'SIVIA' },
                    { name: 'LLOCHEGUA' },
                ]
            },
            {
                name: 'HUAMANGA',
                districts: [
                    { name: 'AYACUCHO' },
                    { name: 'ACOCRO' },
                    { name: 'ACOS VINCHOS' },
                    { name: 'CARMEN ALTO' },
                    { name: 'CHIARA' },
                    { name: 'OCROS' },
                    { name: 'PACAYCASA' },
                    { name: 'QUINUA' },
                    { name: 'SAN JOSE DE TICLLAS' },
                    { name: 'SAN JUAN BAUTISTA' },
                    { name: 'SANTIAGO DE PISCHA' },
                    { name: 'SOCOS' },
                    { name: 'TAMBILLO' },
                    { name: 'VINCHOS' },
                    { name: 'JESUS NAZARENO' },
                ]
            },
            {
                name: 'HUANCA SANCOS',
                districts: [
                    { name: 'SANCOS' },
                    { name: 'CARAPO' },
                    { name: 'SACSAMARCA' },
                    { name: 'SANTIAGO DE LUCANAMARCA' },
                ]
            },
            {
                name: 'LA MAR',
                districts: [
                    { name: 'SAN MIGUEL' },
                    { name: 'ANCO' },
                    { name: 'AYNA' },
                    { name: 'CHILCAS' },
                    { name: 'CHUNGUI' },
                    { name: 'LUIS CARRANZA' },
                    { name: 'SANTA ROSA' },
                    { name: 'TAMBO' },
                    { name: 'SAMUGARI' },
                ]
            },
            {
                name: 'LUCANAS',
                districts: [
                    { name: 'PUQUIO' },
                    { name: 'AUCARA' },
                    { name: 'CABANA' },
                    { name: 'CARMEN SALCEDO' },
                    { name: 'CHAVIÑA' },
                    { name: 'CHIPAO' },
                    { name: 'HUAC-HUAS' },
                    { name: 'LARAMATE' },
                    { name: 'LEONCIO PRADO' },
                    { name: 'LLAUTA' },
                    { name: 'LUCANAS' },
                    { name: 'OCAÑA' },
                    { name: 'OTOCA' },
                    { name: 'SAISA' },
                    { name: 'SAN CRISTOBAL' },
                    { name: 'SAN JUAN' },
                    { name: 'SAN PEDRO' },
                    { name: 'SAN PEDRO DE PALCO' },
                    { name: 'SANCOS' },
                    { name: 'SANTA ANA DE HUAYCAHUACHO' },
                    { name: 'SANTA LUCIA' },
                ]
            },
            {
                name: 'PARINACOCHAS',
                districts: [
                    { name: 'CORACORA' },
                    { name: 'CHUMPI' },
                    { name: 'CORONEL CASTAÑEDA' },
                    { name: 'PACAPAUSA' },
                    { name: 'PULLO' },
                    { name: 'PUYUSCA' },
                    { name: 'SAN FRANCISCO DE RAVACAYCO' },
                    { name: 'UPAHUACHO' },
                ]
            },
            {
                name: 'PAUCAR DEL SARA SARA',
                districts: [
                    { name: 'PAUSA' },
                    { name: 'COLTA' },
                    { name: 'CORCULLA' },
                    { name: 'LAMPA' },
                    { name: 'MARCABAMBA' },
                    { name: 'OYOLO' },
                    { name: 'PARARCA' },
                    { name: 'SAN JAVIER DE ALPABAMBA' },
                    { name: 'SAN JOSE DE USHUA' },
                    { name: 'SARA SARA' },
                ]
            },
            {
                name: 'SUCRE',
                districts: [
                    { name: 'QUEROBAMBA' },
                    { name: 'BELEN' },
                    { name: 'CHALCOS' },
                    { name: 'CHILCAYOC' },
                    { name: 'HUACAÑA' },
                    { name: 'MORCOLLA' },
                    { name: 'PAICO' },
                    { name: 'SAN PEDRO DE LARCAY' },
                    { name: 'SAN SALVADOR DE QUIJE' },
                    { name: 'SANTIAGO DE PAUCARAY' },
                    { name: 'SORAS' },
                ]
            },
            {
                name: 'VICTOR FAJARDO',
                districts: [
                    { name: 'HUANCAPI' },
                    { name: 'ALCAMENCA' },
                    { name: 'APONGO' },
                    { name: 'ASQUIPATA' },
                    { name: 'CANARIA' },
                    { name: 'CAYARA' },
                    { name: 'COLCA' },
                    { name: 'HUAMANQUIQUIA' },
                    { name: 'HUANCARAYLLA' },
                    { name: 'HUAYA' },
                    { name: 'SARHUA' },
                    { name: 'VILCANCHOS' },
                ]
            },
            {
                name: 'VILCAS HUAMAN',
                districts: [
                    { name: 'VILCAS HUAMAN' },
                    { name: 'ACCOMARCA' },
                    { name: 'CARHUANCA' },
                    { name: 'CONCEPCION' },
                    { name: 'HUAMBALPA' },
                    { name: 'INDEPENDENCIA' },
                    { name: 'SAURAMA' },
                    { name: 'VISCHONGO' },
                ]
            },
        ]
    },
    {
        name: 'CAJAMARCA',
        provinces: [
            {
                name: 'CAJAMARCA',
                districts: [
                    { name: 'CAJAMARCA' },
                    { name: 'ASUNCION' },
                    { name: 'CHETILLA' },
                    { name: 'COSPAN' },
                    { name: 'ENCAÑADA' },
                    { name: 'JESUS' },
                    { name: 'LLACANORA' },
                    { name: 'LOS BAÑOS DEL INCA' },
                    { name: 'MAGDALENA' },
                    { name: 'MATARA' },
                    { name: 'NAMORA' },
                    { name: 'SAN JUAN' },
                ]
            },
            {
                name: 'CAJABAMBA',
                districts: [
                    { name: 'CAJABAMBA' },
                    { name: 'CACHACHI' },
                    { name: 'CONDEBAMBA' },
                    { name: 'SITACOCHA' },
                ]
            },
            {
                name: 'CELENDIN',
                districts: [
                    { name: 'CELENDIN' },
                    { name: 'CHUMUCH' },
                    { name: 'CORTEGANA' },
                    { name: 'HUASMIN' },
                    { name: 'JORGE CHAVEZ' },
                    { name: 'JOSE GALVEZ' },
                    { name: 'MIGUEL IGLESIAS' },
                    { name: 'OXAMARCA' },
                    { name: 'SOROCHUCO' },
                    { name: 'SUCRE' },
                    { name: 'UTCO' },
                    { name: 'LA LIBERTAD DE PALLAN' },
                ]
            },
            {
                name: 'CHOTA',
                districts: [
                    { name: 'CHOTA' },
                    { name: 'ANGUIA' },
                    { name: 'CHADIN' },
                    { name: 'CHIGUIRIP' },
                    { name: 'CHIMBAN' },
                    { name: 'CHOROPAMPA' },
                    { name: 'COCHABAMBA' },
                    { name: 'CONCHAN' },
                    { name: 'HUAMBOS' },
                    { name: 'LAJAS' },
                    { name: 'LLAMA' },
                    { name: 'MIRACOSTA' },
                    { name: 'PACCHA' },
                    { name: 'PION' },
                    { name: 'QUEROCOTO' },
                    { name: 'SAN JUAN DE LICUPIS' },
                    { name: 'TACABAMBA' },
                    { name: 'TOCMOCHE' },
                    { name: 'CHALAMARCA' },
                ]
            },
            {
                name: 'CONTUMAZA',
                districts: [
                    { name: 'CONTUMAZA' },
                    { name: 'CHILETE' },
                    { name: 'CUPISNIQUE' },
                    { name: 'GUZMANGO' },
                    { name: 'SAN BENITO' },
                    { name: 'SANTA CRUZ DE TOLED' },
                    { name: 'TANTARICA' },
                    { name: 'YONAN' },
                ]
            },
            {
                name: 'CUTERVO',
                districts: [
                    { name: 'CUTERVO' },
                    { name: 'CALLAYUC' },
                    { name: 'CHOROS' },
                    { name: 'CUJILLO' },
                    { name: 'LA RAMADA' },
                    { name: 'PIMPINGOS' },
                    { name: 'QUEROCOTILLO' },
                    { name: 'SAN ANDRES DE CUTERVO' },
                    { name: 'SAN JUAN DE CUTERVO' },
                    { name: 'SAN LUIS DE LUCMA' },
                    { name: 'SANTA CRUZ' },
                    { name: 'SANTO DOMINGO DE LA CAPILLA' },
                    { name: 'SANTO TOMAS' },
                    { name: 'SOCOTA' },
                    { name: 'TORIBIO CASANOVA' },
                ]
            },
            {
                name: 'HUALGAYOC',
                districts: [
                    { name: 'BAMBAMARCA' },
                    { name: 'CHUGUR' },
                    { name: 'HUALGAYOC' },
                ]
            },
            {
                name: 'JAEN',
                districts: [
                    { name: 'JAEN' },
                    { name: 'BELLAVISTA' },
                    { name: 'CHONTALI' },
                    { name: 'COLASAY' },
                    { name: 'HUABAL' },
                    { name: 'LAS PIRIAS' },
                    { name: 'POMAHUACA' },
                    { name: 'PUCARA' },
                    { name: 'SALLIQUE' },
                    { name: 'SAN FELIPE' },
                    { name: 'SAN JOSE DEL ALTO' },
                    { name: 'SANTA ROSA' },
                ]
            },
            {
                name: 'SAN IGNACIO',
                districts: [
                    { name: 'SAN IGNACIO' },
                    { name: 'CHIRINOS' },
                    { name: 'HUARANGO' },
                    { name: 'LA COIPA' },
                    { name: 'NAMBALLE' },
                    { name: 'SAN JOSE DE LOURDES' },
                    { name: 'TABACONAS' },
                ]
            },
            {
                name: 'SAN MARCOS',
                districts: [
                    { name: 'PEDRO GALVEZ' },
                    { name: 'CHANCAY' },
                    { name: 'EDUARDO VILLANUEVA' },
                    { name: 'GREGORIO PITA' },
                    { name: 'ICHOCAN' },
                    { name: 'JOSE MANUEL QUIROZ' },
                    { name: 'JOSE SABOGAL' },
                ]
            },
            {
                name: 'SAN MIGUEL',
                districts: [
                    { name: 'SAN MIGUEL' },
                    { name: 'BOLIVAR' },
                    { name: 'CALQUIS' },
                    { name: 'CATILLUC' },
                    { name: 'EL PRADO' },
                    { name: 'LA FLORIDA' },
                    { name: 'LLAPA' },
                    { name: 'NANCHOC' },
                    { name: 'NIEPOS' },
                    { name: 'SAN GREGORIO' },
                    { name: 'SAN SILVESTRE DE COCHAN' },
                    { name: 'TONGOD' },
                    { name: 'UNION AGUA BLANCA' },
                ]
            },
            {
                name: 'SAN PABLO',
                districts: [
                    { name: 'SAN PABLO' },
                    { name: 'SAN BERNARDINO' },
                    { name: 'SAN LUIS' },
                    { name: 'TUMBADEN' },
                ]
            },
            {
                name: 'SANTA CRUZ',
                districts: [
                    { name: 'SANTA CRUZ' },
                    { name: 'ANDABAMBA' },
                    { name: 'CATACHE' },
                    { name: 'CHANCAYBAÑOS' },
                    { name: 'LA ESPERANZA' },
                    { name: 'NINABAMBA' },
                    { name: 'PULAN' },
                    { name: 'SAUCEPAMPA' },
                    { name: 'SEXI' },
                    { name: 'UTICYACU' },
                    { name: 'YAUYUCAN' },
                ]
            },
        ]
    },
    {
        name: 'CALLAO',
        provinces: [
            {
                name: 'CALLAO',
                districts: [
                    { name: 'CALLAO' },
                    { name: 'BELLAVISTA' },
                    { name: 'CARMEN DE LA LEGUA REYNOSO' },
                    { name: 'LA PERLA' },
                    { name: 'LA PUNTA' },
                    { name: 'VENTANILLA' },
                ]
            },
        ]
    },
    {
        name: 'CUSCO',
        provinces: [
            {
                name: 'CUSCO',
                districts: [
                    { name: 'CUSCO' },
                    { name: 'CCORCA' },
                    { name: 'POROY' },
                    { name: 'SAN JERONIMO' },
                    { name: 'SAN SEBASTIAN' },
                    { name: 'SANTIAGO' },
                    { name: 'SAYLLA' },
                    { name: 'WANCHAQ' },
                ]
            },
            {
                name: 'ACOMAYO',
                districts: [
                    { name: 'ACOMAYO' },
                    { name: 'ACOPIA' },
                    { name: 'ACOS' },
                    { name: 'MOSOC LLACTA' },
                    { name: 'POMACANCHI' },
                    { name: 'RONDOCAN' },
                    { name: 'SANGARARA' },
                ]
            },
            {
                name: 'ANTA',
                districts: [
                    { name: 'ANTA' },
                    { name: 'ANCAHUASI' },
                    { name: 'CACHIMAYO' },
                    { name: 'CHINCHAYPUJIO' },
                    { name: 'HUAROCONDO' },
                    { name: 'LIMATAMBO' },
                    { name: 'MOLLEPATA' },
                    { name: 'PUCYURA' },
                    { name: 'ZURITE' },
                ]
            },
            {
                name: 'CALCA',
                districts: [
                    { name: 'CALCA' },
                    { name: 'COYA' },
                    { name: 'LAMAY' },
                    { name: 'LARES' },
                    { name: 'PISAC' },
                    { name: 'SAN SALVADOR' },
                    { name: 'TARAY' },
                    { name: 'YANATILE' },
                ]
            },
            {
                name: 'CANAS',
                districts: [
                    { name: 'YANAOCA' },
                    { name: 'CHECCA' },
                    { name: 'KUNTURKANKI' },
                    { name: 'LANGUI' },
                    { name: 'LAYO' },
                    { name: 'PAMPAMARCA' },
                    { name: 'QUEHUE' },
                    { name: 'TUPAC AMARU' },
                ]
            },
            {
                name: 'CANCHIS',
                districts: [
                    { name: 'SICUANI' },
                    { name: 'CHECACUPE' },
                    { name: 'COMBAPATA' },
                    { name: 'MARANGANI' },
                    { name: 'PITUMARCA' },
                    { name: 'SAN PABLO' },
                    { name: 'SAN PEDRO' },
                    { name: 'TINTA' },
                ]
            },
            {
                name: 'CHUMBIVILCAS',
                districts: [
                    { name: 'SANTO TOMAS' },
                    { name: 'CAPACMARCA' },
                    { name: 'CHAMACA' },
                    { name: 'COLQUEMARCA' },
                    { name: 'LIVITACA' },
                    { name: 'LLUSCO' },
                    { name: 'QUIÑOTA' },
                    { name: 'VELILLE' },
                ]
            },
            {
                name: 'ESPINAR',
                districts: [
                    { name: 'ESPINAR' },
                    { name: 'CONDOROMA' },
                    { name: 'COPORAQUE' },
                    { name: 'OCORURO' },
                    { name: 'PALLPATA' },
                    { name: 'PICHIGUA' },
                    { name: 'SUYCKUTAMBO' },
                    { name: 'ALTO PICHIGUA' },
                ]
            },
            {
                name: 'LA CONVENCION',
                districts: [
                    { name: 'SANTA ANA' },
                    { name: 'ECHARATE' },
                    { name: 'HUAYOPATA' },
                    { name: 'MARANURA' },
                    { name: 'OCOBAMBA' },
                    { name: 'QUELLOUNO' },
                    { name: 'KIMBIRI' },
                    { name: 'SANTA TERESA' },
                    { name: 'VILCABAMBA' },
                    { name: 'PICHARI' },
                ]
            },
            {
                name: 'PARURO',
                districts: [
                    { name: 'PARURO' },
                    { name: 'ACCHA' },
                    { name: 'CCAPI' },
                    { name: 'COLCHA' },
                    { name: 'HUANOQUITE' },
                    { name: 'OMACHA' },
                    { name: 'PACCARITAMBO' },
                    { name: 'PILLPINTO' },
                    { name: 'YAURISQUE' },
                ]
            },
            {
                name: 'PAUCARTAMBO',
                districts: [
                    { name: 'PAUCARTAMBO' },
                    { name: 'CAICAY' },
                    { name: 'CHALLABAMBA' },
                    { name: 'COLQUEPATA' },
                    { name: 'HUANCARANI' },
                    { name: 'KOSÑIPATA' },
                ]
            },
            {
                name: 'QUISPICANCHI',
                districts: [
                    { name: 'URCOS' },
                    { name: 'ANDAHUAYLILLAS' },
                    { name: 'CAMANTI' },
                    { name: 'CCARHUAYO' },
                    { name: 'CCATCA' },
                    { name: 'CUSIPATA' },
                    { name: 'HUARO' },
                    { name: 'LUCRE' },
                    { name: 'MARCAPATA' },
                    { name: 'OCONGATE' },
                    { name: 'OROPESA' },
                    { name: 'QUIQUIJANA' },
                ]
            },
            {
                name: 'URUBAMBA',
                districts: [
                    { name: 'URUBAMBA' },
                    { name: 'CHINCHERO' },
                    { name: 'HUAYLLABAMBA' },
                    { name: 'MACHUPICCHU' },
                    { name: 'MARAS' },
                    { name: 'OLLANTAYTAMBO' },
                    { name: 'YUCAY' },
                ]
            },
        ]
    },
    {
        name: 'HUANCAVELICA',
        provinces: [
            {
                name: 'HUANCAVELICA',
                districts: [
                    { name: 'HUANCAVELICA' },
                    { name: 'ACOBAMBILLA' },
                    { name: 'ACORIA' },
                    { name: 'CONAYCA' },
                    { name: 'CUENCA' },
                    { name: 'HUACHOCOLPA' },
                    { name: 'HUAYLLAHUARA' },
                    { name: 'IZCUCHACA' },
                    { name: 'LARIA' },
                    { name: 'MANTA' },
                    { name: 'MARISCAL CACERES' },
                    { name: 'MOYA' },
                    { name: 'NUEVO OCCORO' },
                    { name: 'PALCA' },
                    { name: 'PILCHACA' },
                    { name: 'VILCA' },
                    { name: 'YAULI' },
                    { name: 'ASCENSION' },
                    { name: 'HUANDO' },
                ]
            },
            {
                name: 'ACOBAMBA',
                districts: [
                    { name: 'ACOBAMBA' },
                    { name: 'ANDABAMBA' },
                    { name: 'ANTA' },
                    { name: 'CAJA' },
                    { name: 'MARCAS' },
                    { name: 'PAUCARA' },
                    { name: 'POMACOCHA' },
                    { name: 'ROSARIO' },
                ]
            },
            {
                name: 'ANGARAES',
                districts: [
                    { name: 'LIRCAY' },
                    { name: 'ANCHONGA' },
                    { name: 'CALLANMARCA' },
                    { name: 'CCOCHACCASA' },
                    { name: 'CHINCHO' },
                    { name: 'CONGALLA' },
                    { name: 'HUANCA-HUANCA' },
                    { name: 'HUAYLLAY GRANDE' },
                    { name: 'JULCAMARCA' },
                    { name: 'SAN ANTONIO DE ANTAPARCO' },
                    { name: 'SANTO TOMAS DE PATA' },
                    { name: 'SECCLLA' },
                ]
            },
            {
                name: 'CASTROVIRREYNA',
                districts: [
                    { name: 'CASTROVIRREYNA' },
                    { name: 'ARMA' },
                    { name: 'AURAHUA' },
                    { name: 'CAPILLAS' },
                    { name: 'CHUPAMARCA' },
                    { name: 'COCAS' },
                    { name: 'HUACHOS' },
                    { name: 'HUAMATAMBO' },
                    { name: 'MOLLEPAMPA' },
                    { name: 'SAN JUAN' },
                    { name: 'SANTA ANA' },
                    { name: 'TANTARA' },
                    { name: 'TICRAPO' },
                ]
            },
            {
                name: 'CHURCAMPA',
                districts: [
                    { name: 'CHURCAMPA' },
                    { name: 'ANCO' },
                    { name: 'CHINCHIHUASI' },
                    { name: 'EL CARMEN' },
                    { name: 'LA MERCED' },
                    { name: 'LOCROJA' },
                    { name: 'PAUCARBAMBA' },
                    { name: 'SAN MIGUEL DE MAYOCC' },
                    { name: 'SAN PEDRO DE CORIS' },
                    { name: 'PACHAMARCA ' },
                    { name: 'COSME' },
                ]
            },
            {
                name: 'HUAYTARA',
                districts: [
                    { name: 'HUAYTARA' },
                    { name: 'AYAVI' },
                    { name: 'CORDOVA' },
                    { name: 'HUAYACUNDO ARMA' },
                    { name: 'LARAMARCA' },
                    { name: 'OCOYO' },
                    { name: 'PILPICHACA' },
                    { name: 'QUERCO' },
                    { name: 'QUITO-ARMA' },
                    { name: 'SAN ANTONIO DE CUSICANCHA' },
                    { name: 'SAN FRANCISCO DE SANGAYAICO' },
                    { name: 'SAN ISIDRO' },
                    { name: 'SANTIAGO DE CHOCORVOS' },
                    { name: 'SANTIAGO DE QUIRAHUARA' },
                    { name: 'SANTO DOMINGO DE CAPILLAS' },
                    { name: 'TAMBO' },
                ]
            },
            {
                name: 'TAYACAJA',
                districts: [
                    { name: 'PAMPAS' },
                    { name: 'ACOSTAMBO' },
                    { name: 'ACRAQUIA' },
                    { name: 'AHUAYCHA' },
                    { name: 'COLCABAMBA' },
                    { name: 'DANIEL HERNANDEZ' },
                    { name: 'HUACHOCOLPA' },
                    { name: 'HUARIBAMBA' },
                    { name: 'ÑAHUIMPUQUIO' },
                    { name: 'PAZOS' },
                    { name: 'QUISHUAR' },
                    { name: 'SALCABAMBA' },
                    { name: 'SALCAHUASI' },
                    { name: 'SAN MARCOS DE ROCCHAC' },
                    { name: 'SURCUBAMBA' },
                    { name: 'TINTAY PUNCU' },
                ]
            },
        ]
    },
    {
        name: 'HUANUCO',
        provinces: [
            {
                name: 'HUANUCO',
                districts: [
                    { name: 'HUANUCO' },
                    { name: 'AMARILIS' },
                    { name: 'CHINCHAO' },
                    { name: 'CHURUBAMBA' },
                    { name: 'MARGOS' },
                    { name: 'QUISQUI' },
                    { name: 'SAN FRANCISCO DE CAYRAN' },
                    { name: 'SAN PEDRO DE CHAULAN' },
                    { name: 'SANTA MARIA DEL VALLE' },
                    { name: 'YARUMAYO' },
                    { name: 'PILLCO MARCA' },
                    { name: 'YACUS' },
                ]
            },
            {
                name: 'AMBO',
                districts: [
                    { name: 'AMBO' },
                    { name: 'CAYNA' },
                    { name: 'COLPAS' },
                    { name: 'CONCHAMARCA' },
                    { name: 'HUACAR' },
                    { name: 'SAN FRANCISCO' },
                    { name: 'SAN RAFAEL' },
                    { name: 'TOMAY KICHWA' },
                ]
            },
            {
                name: 'DOS DE MAYO',
                districts: [
                    { name: 'LA UNION' },
                    { name: 'CHUQUIS' },
                    { name: 'MARIAS' },
                    { name: 'PACHAS' },
                    { name: 'QUIVILLA' },
                    { name: 'RIPAN' },
                    { name: 'SHUNQUI' },
                    { name: 'SILLAPATA' },
                    { name: 'YANAS' },
                ]
            },
            {
                name: 'HUACAYBAMBA',
                districts: [
                    { name: 'HUACAYBAMBA' },
                    { name: 'CANCHABAMBA' },
                    { name: 'COCHABAMBA' },
                    { name: 'PINRA' },
                ]
            },
            {
                name: 'HUAMALIES',
                districts: [
                    { name: 'LLATA' },
                    { name: 'ARANCAY' },
                    { name: 'CHAVIN DE PARIARCA' },
                    { name: 'JACAS GRANDE' },
                    { name: 'JIRCAN' },
                    { name: 'MIRAFLORES' },
                    { name: 'MONZON' },
                    { name: 'PUNCHAO' },
                    { name: 'PUÑOS' },
                    { name: 'SINGA' },
                    { name: 'TANTAMAYO' },
                ]
            },
            {
                name: 'LEONCIO PRADO',
                districts: [
                    { name: 'RUPA-RUPA' },
                    { name: 'DANIEL ALOMIA ROBLES' },
                    { name: 'HERMILIO VALDIZAN' },
                    { name: 'JOSE CRESPO Y CASTILLO' },
                    { name: 'LUYANDO' },
                    { name: 'MARIANO DAMASO BERAUN' },
                ]
            },
            {
                name: 'MARAÑON',
                districts: [
                    { name: 'HUACRACHUCO' },
                    { name: 'CHOLON' },
                    { name: 'SAN BUENAVENTURA' },
                ]
            },
            {
                name: 'PACHITEA',
                districts: [
                    { name: 'PANAO' },
                    { name: 'CHAGLLA' },
                    { name: 'MOLINO' },
                    { name: 'UMARI' },
                ]
            },
            {
                name: 'PUERTO INCA',
                districts: [
                    { name: 'PUERTO INCA' },
                    { name: 'CODO DEL POZUZO' },
                    { name: 'HONORIA' },
                    { name: 'TOURNAVISTA' },
                    { name: 'YUYAPICHIS' },
                ]
            },
            {
                name: 'LAURICOCHA',
                districts: [
                    { name: 'JESUS' },
                    { name: 'BAÑOS' },
                    { name: 'JIVIA' },
                    { name: 'QUEROPALCA' },
                    { name: 'RONDOS' },
                    { name: 'SAN FRANCISCO DE ASIS' },
                    { name: 'SAN MIGUEL DE CAURI' },
                ]
            },
            {
                name: 'YAROWILCA',
                districts: [
                    { name: 'CHAVINILLO' },
                    { name: 'CAHUAC' },
                    { name: 'CHACABAMBA' },
                    { name: 'APARICIO POMARES' },
                    { name: 'JACAS CHICO' },
                    { name: 'OBAS' },
                    { name: 'PAMPAMARCA' },
                    { name: 'CHORAS' },
                ]
            },
        ]
    },
    {
        name: 'ICA',
        provinces: [
            {
                name: 'ICA',
                districts: [
                    { name: 'ICA' },
                    { name: 'LA TINGUIÑA' },
                    { name: 'LOS AQUIJES' },
                    { name: 'OCUCAJE' },
                    { name: 'PACHACUTEC' },
                    { name: 'PARCONA' },
                    { name: 'PUEBLO NUEVO' },
                    { name: 'SALAS' },
                    { name: 'SAN JOSE DE LOS MOLINOS' },
                    { name: 'SAN JUAN BAUTISTA' },
                    { name: 'SANTIAGO' },
                    { name: 'SUBTANJALLA' },
                    { name: 'TATE' },
                    { name: 'YAUCA DEL ROSARIO' },
                ]
            },
            {
                name: 'CHINCHA',
                districts: [
                    { name: 'CHINCHA ALTA' },
                    { name: 'ALTO LARAN' },
                    { name: 'CHAVIN' },
                    { name: 'CHINCHA BAJA' },
                    { name: 'EL CARMEN' },
                    { name: 'GROCIO PRADO' },
                    { name: 'PUEBLO NUEVO' },
                    { name: 'SAN JUAN DE YANAC' },
                    { name: 'SAN PEDRO DE HUACARPANA' },
                    { name: 'SUNAMPE' },
                    { name: 'TAMBO DE MORA' },
                ]
            },
            {
                name: 'NAZCA',
                districts: [
                    { name: 'NAZCA' },
                    { name: 'CHANGUILLO' },
                    { name: 'EL INGENIO' },
                    { name: 'MARCONA' },
                    { name: 'VISTA ALEGRE' },
                ]
            },
            {
                name: 'PALPA',
                districts: [
                    { name: 'PALPA' },
                    { name: 'LLIPATA' },
                    { name: 'RIO GRANDE' },
                    { name: 'SANTA CRUZ' },
                    { name: 'TIBILLO' },
                ]
            },
            {
                name: 'PISCO',
                districts: [
                    { name: 'PISCO' },
                    { name: 'HUANCANO' },
                    { name: 'HUMAY' },
                    { name: 'INDEPENDENCIA' },
                    { name: 'PARACAS' },
                    { name: 'SAN ANDRES' },
                    { name: 'SAN CLEMENTE' },
                    { name: 'TUPAC AMARU INCA' },
                ]
            },
        ]
    },
    {
        name: 'JUNIN',
        provinces: [
            {
                name: 'CHANCHAMAYO',
                districts: [
                    { name: 'CHANCHAMAYO' },
                    { name: 'PERENE' },
                    { name: 'PICHANAQUI' },
                    { name: 'SAN LUIS DE SHUARO' },
                    { name: 'SAN RAMON' },
                    { name: 'VITOC' },
                ]
            },
            {
                name: 'CHUPACA',
                districts: [
                    { name: 'CHUPACA' },
                    { name: 'AHUAC' },
                    { name: 'CHONGOS BAJO' },
                    { name: 'HUACHAC' },
                    { name: 'HUAMANCACA CHICO' },
                    { name: 'SAN JUAN DE ISCOS' },
                    { name: 'SAN JUAN DE JARPA' },
                    { name: 'TRES DE DICIEMBRE' },
                    { name: 'YANACANCHA' },
                ]
            },
            {
                name: 'CONCEPCION',
                districts: [
                    { name: 'CONCEPCION' },
                    { name: 'ACO' },
                    { name: 'ANDAMARCA' },
                    { name: 'CHAMBARA' },
                    { name: 'COCHAS' },
                    { name: 'COMAS' },
                    { name: 'HEROINAS TOLEDO' },
                    { name: 'MANZANARES' },
                    { name: 'MARISCAL CASTILLA' },
                    { name: 'MATAHUASI' },
                    { name: 'MITO' },
                    { name: 'NUEVE DE JULIO' },
                    { name: 'ORCOTUNA' },
                    { name: 'SAN JOSE DE QUERO' },
                    { name: 'SANTA ROSA DE OCOPA' },
                ]
            },
            {
                name: 'HUANCAYO',
                districts: [
                    { name: 'HUANCAYO' },
                    { name: 'CARHUACALLANGA' },
                    { name: 'CHACAPAMPA' },
                    { name: 'CHICCHE' },
                    { name: 'CHILCA' },
                    { name: 'CHONGOS ALTO' },
                    { name: 'CHUPURO' },
                    { name: 'COLCA' },
                    { name: 'CULLHUAS' },
                    { name: 'EL TAMBO' },
                    { name: 'HUACRAPUQUIO' },
                    { name: 'HUALHUAS' },
                    { name: 'HUANCAN' },
                    { name: 'HUASICANCHA' },
                    { name: 'HUAYUCACHI' },
                    { name: 'INGENIO' },
                    { name: 'PARIAHUANCA' },
                    { name: 'PILCOMAYO' },
                    { name: 'PUCARA' },
                    { name: 'QUICHUAY' },
                    { name: 'QUILCAS' },
                    { name: 'SAN AGUSTIN' },
                    { name: 'SAN JERONIMO DE TUNAN' },
                    { name: 'SAÑO' },
                    { name: 'SAPALLANGA' },
                    { name: 'SICAYA' },
                    { name: 'SANTO DOMINGO DE ACOBAMBA' },
                    { name: 'VIQUES' },
                ]
            },
            {
                name: 'JAUJA',
                districts: [
                    { name: 'JAUJA' },
                    { name: 'ACOLLA' },
                    { name: 'APATA' },
                    { name: 'ATAURA' },
                    { name: 'CANCHAYLLO' },
                    { name: 'CURICACA' },
                    { name: 'EL MANTARO' },
                    { name: 'HUAMALI' },
                    { name: 'HUARIPAMPA' },
                    { name: 'HUERTAS' },
                    { name: 'JANJAILLO' },
                    { name: 'JULCAN' },
                    { name: 'LEONOR ORDOÑEZ' },
                    { name: 'LLOCLLAPAMPA' },
                    { name: 'MARCO' },
                    { name: 'MASMA' },
                    { name: 'MASMA CHICCHE' },
                    { name: 'MOLINOS' },
                    { name: 'MONOBAMBA' },
                    { name: 'MUQUI' },
                    { name: 'MUQUIYAUYO' },
                    { name: 'PACA' },
                    { name: 'PACCHA' },
                    { name: 'PANCAN' },
                    { name: 'PARCO' },
                    { name: 'POMACANCHA' },
                    { name: 'RICRAN' },
                    { name: 'SAN LORENZO' },
                    { name: 'SAN PEDRO DE CHUNAN' },
                    { name: 'SAUSA' },
                    { name: 'SINCOS' },
                    { name: 'TUNAN MARCA' },
                    { name: 'YAULI' },
                    { name: 'YAUYOS' },
                ]
            },
            {
                name: 'JUNIN',
                districts: [
                    { name: 'JUNIN' },
                    { name: 'CARHUAMAYO' },
                    { name: 'ONDORES' },
                    { name: 'ULCUMAYO' },
                ]
            },
            {
                name: 'SATIPO',
                districts: [
                    { name: 'SATIPO' },
                    { name: 'COVIRIALI' },
                    { name: 'LLAYLLA' },
                    { name: 'MAZAMARI' },
                    { name: 'PAMPA HERMOSA' },
                    { name: 'PANGOA' },
                    { name: 'RIO NEGRO' },
                    { name: 'RIO TAMBO' },
                ]
            },
            {
                name: 'TARMA',
                districts: [
                    { name: 'TARMA' },
                    { name: 'ACOBAMBA' },
                    { name: 'HUARICOLCA' },
                    { name: 'HUASAHUASI' },
                    { name: 'LA UNION' },
                    { name: 'PALCA' },
                    { name: 'PALCAMAYO' },
                    { name: 'SAN PEDRO DE CAJAS' },
                    { name: 'TAPO' },
                ]
            },
            {
                name: 'YAULI',
                districts: [
                    { name: 'LA OROYA' },
                    { name: 'CHACAPALPA' },
                    { name: 'HUAY-HUAY' },
                    { name: 'MARCAPOMACOCHA' },
                    { name: 'MOROCOCHA' },
                    { name: 'PACCHA' },
                    { name: 'SANTA BARBARA DE CARHUACAYAN' },
                    { name: 'SANTA ROSA DE SACCO' },
                    { name: 'SUITUCANCHA' },
                    { name: 'YAULI' },
                ]
            },
        ]
    },
    {
        name: 'LA LIBERTAD',
        provinces: [
            {
                name: 'TRUJILLO',
                districts: [
                    { name: 'TRUJILLO' },
                    { name: 'EL PORVENIR' },
                    { name: 'FLORENCIA DE MORA' },
                    { name: 'HUANCHACO' },
                    { name: 'LA ESPERANZA' },
                    { name: 'LAREDO' },
                    { name: 'MOCHE' },
                    { name: 'POROTO' },
                    { name: 'SALAVERRY' },
                    { name: 'SIMBAL' },
                    { name: 'VICTOR LARCO HERRERA' },
                ]
            },
            {
                name: 'ASCOPE',
                districts: [
                    { name: 'ASCOPE' },
                    { name: 'CHICAMA' },
                    { name: 'CHOCOPE' },
                    { name: 'MAGDALENA DE CAO' },
                    { name: 'PAIJAN' },
                    { name: 'RAZURI' },
                    { name: 'SANTIAGO DE CAO' },
                    { name: 'CASA GRANDE' },
                ]
            },
            {
                name: 'BOLIVAR',
                districts: [
                    { name: 'BOLIVAR' },
                    { name: 'BAMBAMARCA' },
                    { name: 'CONDORMARCA' },
                    { name: 'LONGOTEA' },
                    { name: 'UCHUMARCA' },
                    { name: 'UCUNCHA' },
                ]
            },
            {
                name: 'CHEPEN',
                districts: [
                    { name: 'CHEPEN' },
                    { name: 'PACANGA' },
                    { name: 'PUEBLO NUEVO' },
                ]
            },
            {
                name: 'JULCAN',
                districts: [
                    { name: 'JULCAN' },
                    { name: 'CALAMARCA' },
                    { name: 'CARABAMBA' },
                    { name: 'HUASO' },
                ]
            },
            {
                name: 'OTUZCO',
                districts: [
                    { name: 'OTUZCO' },
                    { name: 'AGALLPAMPA' },
                    { name: 'CHARAT' },
                    { name: 'HUARANCHAL' },
                    { name: 'LA CUESTA' },
                    { name: 'MACHE' },
                    { name: 'PARANDAY' },
                    { name: 'SALPO' },
                    { name: 'SINSICAP' },
                    { name: 'USQUIL' },
                ]
            },
            {
                name: 'GRAN CHIMU',
                districts: [
                    { name: 'CASCAS' },
                    { name: 'LUCMA' },
                    { name: 'MARMOT' },
                    { name: 'SAYAPULLO' },
                ]
            },
            {
                name: 'PACASMAYO',
                districts: [
                    { name: 'SAN PEDRO DE LLOC' },
                    { name: 'GUADALUPE' },
                    { name: 'JEQUETEPEQUE' },
                    { name: 'PACASMAYO' },
                    { name: 'SAN JOSE' },
                ]
            },
            {
                name: 'PATAZ',
                districts: [
                    { name: 'TAYABAMBA' },
                    { name: 'BULDIBUYO' },
                    { name: 'CHILLIA' },
                    { name: 'HUANCASPATA' },
                    { name: 'HUAYLILLAS' },
                    { name: 'HUAYO' },
                    { name: 'ONGON' },
                    { name: 'PARCOY' },
                    { name: 'PATAZ' },
                    { name: 'PIAS' },
                    { name: 'SANTIAGO DE CHALLAS' },
                    { name: 'TAURIJA' },
                    { name: 'URPAY' },
                ]
            },
            {
                name: 'SANCHEZ CARRION',
                districts: [
                    { name: 'HUAMACHUCO' },
                    { name: 'CHUGAY' },
                    { name: 'COCHORCO' },
                    { name: 'CURGOS' },
                    { name: 'MARCABAL' },
                    { name: 'SANAGORAN' },
                    { name: 'SARIN' },
                    { name: 'SARTIMBAMBA' },
                ]
            },
            {
                name: 'SANTIAGO DE CHUCO',
                districts: [
                    { name: 'SANTIAGO DE CHUCO' },
                    { name: 'ANGASMARCA' },
                    { name: 'CACHICADAN' },
                    { name: 'MOLLEBAMBA' },
                    { name: 'MOLLEPATA' },
                    { name: 'QUIRUVILCA' },
                    { name: 'SANTA CRUZ DE CHUCA' },
                    { name: 'SITABAMBA' },
                ]
            },
            {
                name: 'VIRU',
                districts: [
                    { name: 'VIRU' },
                    { name: 'CHAO' },
                    { name: 'GUADALUPITO' },
                ]
            },
        ]
    },
    {
        name: 'LAMBAYEQUE',
        provinces: [
            {
                name: 'CHICLAYO',
                districts: [
                    { name: 'CHICLAYO' },
                    { name: 'CHONGOYAPE' },
                    { name: 'ETEN' },
                    { name: 'ETEN PUERTO' },
                    { name: 'JOSE LEONARDO ORTIZ' },
                    { name: 'LA VICTORIA' },
                    { name: 'LAGUNAS' },
                    { name: 'MONSEFU' },
                    { name: 'NUEVA ARICA' },
                    { name: 'OYOTUN' },
                    { name: 'PICSI' },
                    { name: 'PIMENTEL' },
                    { name: 'REQUE' },
                    { name: 'SANTA ROSA' },
                    { name: 'SAÑA' },
                    { name: 'CAYALTI' },
                    { name: 'PATAPO' },
                    { name: 'POMALCA' },
                    { name: 'PUCALA' },
                    { name: 'TUMAN' },
                ]
            },
            {
                name: 'FERREÑAFE',
                districts: [
                    { name: 'FERREÑAFE' },
                    { name: 'CAÑARIS' },
                    { name: 'INCAHUASI' },
                    { name: 'MANUEL ANTONIO MESONES MURO' },
                    { name: 'PITIPO' },
                    { name: 'PUEBLO NUEVO' },
                ]
            },
            {
                name: 'LAMBAYEQUE',
                districts: [
                    { name: 'LAMBAYEQUE' },
                    { name: 'CHOCHOPE' },
                    { name: 'ILLIMO' },
                    { name: 'JAYANCA' },
                    { name: 'MOCHUMI' },
                    { name: 'MORROPE' },
                    { name: 'MOTUPE' },
                    { name: 'OLMOS' },
                    { name: 'PACORA' },
                    { name: 'SALAS' },
                    { name: 'SAN JOSE' },
                    { name: 'TUCUME' },
                ]
            },
        ]
    },
    {
        name: 'LIMA',
        provinces: [
            {
                name: 'BARRANCA',
                districts: [
                    { name: 'BARRANCA' },
                    { name: 'PARAMONGA' },
                    { name: 'PATIVILCA' },
                    { name: 'SUPE' },
                    { name: 'SUPE PUERTO' },
                ]
            },
            {
                name: 'CAJATAMBO',
                districts: [
                    { name: 'CAJATAMBO' },
                    { name: 'COPA' },
                    { name: 'GORGOR' },
                    { name: 'HUANCAPON' },
                    { name: 'MANAS' },
                ]
            },
            {
                name: 'CANTA',
                districts: [
                    { name: 'CANTA' },
                    { name: 'ARAHUAY' },
                    { name: 'HUAMANTANGA' },
                    { name: 'HUAROS' },
                    { name: 'LACHAQUI' },
                    { name: 'SAN BUENAVENTURA' },
                    { name: 'SANTA ROSA DE QUIVES' },
                ]
            },
            {
                name: 'CAÑETE',
                districts: [
                    { name: 'SAN VICENTE DE CAÑETE' },
                    { name: 'ASIA' },
                    { name: 'CALANGO' },
                    { name: 'CERRO AZUL' },
                    { name: 'CHILCA' },
                    { name: 'COAYLLO' },
                    { name: 'IMPERIAL' },
                    { name: 'LUNAHUANA' },
                    { name: 'MALA' },
                    { name: 'NUEVO IMPERIAL' },
                    { name: 'PACARAN' },
                    { name: 'QUILMANA' },
                    { name: 'SAN ANTONIO' },
                    { name: 'SAN LUIS' },
                    { name: 'SANTA CRUZ DE FLORES' },
                    { name: 'ZUÑIGA' },
                ]
            },
            {
                name: 'HUARAL',
                districts: [
                    { name: 'HUARAL' },
                    { name: 'ATAVILLOS ALTO' },
                    { name: 'ATAVILLOS BAJO' },
                    { name: 'AUCALLAMA' },
                    { name: 'CHANCAY' },
                    { name: 'IHUARI' },
                    { name: 'LAMPIAN' },
                    { name: 'PACARAOS' },
                    { name: 'SAN MIGUEL DE ACOS' },
                    { name: 'SANTA CRUZ DE ANDAMARCA' },
                    { name: 'SUMBILCA' },
                    { name: 'VEINTISIETE DE NOVIEMBRE' },
                ]
            },
            {
                name: 'HUAROCHIRI',
                districts: [
                    { name: 'MATUCANA' },
                    { name: 'ANTIOQUIA' },
                    { name: 'CALLAHUANCA' },
                    { name: 'CARAMPOMA' },
                    { name: 'CHICLA' },
                    { name: 'CUENCA' },
                    { name: 'HUACHUPAMPA' },
                    { name: 'HUANZA' },
                    { name: 'HUAROCHIRI' },
                    { name: 'LAHUAYTAMBO' },
                    { name: 'LANGA' },
                    { name: 'LARAOS' },
                    { name: 'MARIATANA' },
                    { name: 'RICARDO PALMA' },
                    { name: 'SAN ANDRES DE TUPICOCHA' },
                    { name: 'SAN ANTONIO' },
                    { name: 'SAN BARTOLOME' },
                    { name: 'SAN DAMIAN' },
                    { name: 'SAN JUAN DE IRIS' },
                    { name: 'SAN JUAN DE TANTARANCHE' },
                    { name: 'SAN LORENZO DE QUINTI' },
                    { name: 'SAN MATEO' },
                    { name: 'SAN MATEO DE OTAO' },
                    { name: 'SAN PEDRO DE CASTA' },
                    { name: 'SAN PEDRO DE HUANCAYRE' },
                    { name: 'SANGALLAYA' },
                    { name: 'SANTA CRUZ DE COCACHACRA' },
                    { name: 'SANTA EULALIA' },
                    { name: 'SANTIAGO DE ANCHUCAYA' },
                    { name: 'SANTIAGO DE TUNA' },
                    { name: 'SANTO DOMINGO DE LOS OLLEROS' },
                    { name: 'SURCO' },
                ]
            },
            {
                name: 'HUAURA',
                districts: [
                    { name: 'HUACHO' },
                    { name: 'AMBAR' },
                    { name: 'CALETA DE CARQUIN' },
                    { name: 'CHECRAS' },
                    { name: 'HUALMAY' },
                    { name: 'HUAURA' },
                    { name: 'LEONCIO PRADO' },
                    { name: 'PACCHO' },
                    { name: 'SANTA LEONOR' },
                    { name: 'SANTA MARIA' },
                    { name: 'SAYAN' },
                    { name: 'VEGUETA' },
                ]
            },
            {
                name: 'LIMA',
                districts: [
                    { name: 'LIMA' },
                    { name: 'ANCON' },
                    { name: 'ATE' },
                    { name: 'BARRANCO' },
                    { name: 'BREÑA' },
                    { name: 'CARABAYLLO' },
                    { name: 'CHACLACAYO' },
                    { name: 'CHORRILLOS' },
                    { name: 'CIENEGUILLA' },
                    { name: 'COMAS' },
                    { name: 'EL AGUSTINO' },
                    { name: 'INDEPENDENCIA' },
                    { name: 'JESUS MARIA' },
                    { name: 'LA MOLINA' },
                    { name: 'LA VICTORIA' },
                    { name: 'LINCE' },
                    { name: 'LOS OLIVOS' },
                    { name: 'LURIGANCHO' },
                    { name: 'LURIN' },
                    { name: 'MAGDALENA DEL MAR' },
                    { name: 'PUEBLO LIBRE' },
                    { name: 'MIRAFLORES' },
                    { name: 'PACHACAMAC' },
                    { name: 'PUCUSANA' },
                    { name: 'PUENTE PIEDRA' },
                    { name: 'PUNTA HERMOSA' },
                    { name: 'PUNTA NEGRA' },
                    { name: 'RIMAC' },
                    { name: 'SAN BARTOLO' },
                    { name: 'SAN BORJA' },
                    { name: 'SAN ISIDRO' },
                    { name: 'SAN JUAN DE LURIGANCHO' },
                    { name: 'SAN JUAN DE MIRAFLORES' },
                    { name: 'SAN LUIS' },
                    { name: 'SAN MARTIN DE PORRES' },
                    { name: 'SAN MIGUEL' },
                    { name: 'SANTA ANITA' },
                    { name: 'SANTA MARIA DEL MAR' },
                    { name: 'SANTA ROSA' },
                    { name: 'SANTIAGO DE SURCO' },
                    { name: 'SURQUILLO' },
                    { name: 'VILLA EL SALVADOR' },
                    { name: 'VILLA MARIA DEL TRIUNFO' },
                ]
            },
            {
                name: 'OYON',
                districts: [
                    { name: 'OYON' },
                    { name: 'ANDAJES' },
                    { name: 'CAUJUL' },
                    { name: 'COCHAMARCA' },
                    { name: 'NAVAN' },
                    { name: 'PACHANGARA' },
                ]
            },
            {
                name: 'YAUYOS',
                districts: [
                    { name: 'YAUYOS' },
                    { name: 'ALIS' },
                    { name: 'AYAUCA' },
                    { name: 'AYAVIRI' },
                    { name: 'AZANGARO' },
                    { name: 'CACRA' },
                    { name: 'CARANIA' },
                    { name: 'CATAHUASI' },
                    { name: 'CHOCOS' },
                    { name: 'COCHAS' },
                    { name: 'COLONIA' },
                    { name: 'HONGOS' },
                    { name: 'HUAMPARA' },
                    { name: 'HUANCAYA' },
                    { name: 'HUANGASCAR' },
                    { name: 'HUANTAN' },
                    { name: 'HUAÑEC' },
                    { name: 'LARAOS' },
                    { name: 'LINCHA' },
                    { name: 'MADEAN' },
                    { name: 'MIRAFLORES' },
                    { name: 'OMAS' },
                    { name: 'PUTINZA' },
                    { name: 'QUINCHES' },
                    { name: 'QUINOCAY' },
                    { name: 'SAN JOAQUIN' },
                    { name: 'SAN PEDRO DE PILAS' },
                    { name: 'TANTA' },
                    { name: 'TAURIPAMPA' },
                    { name: 'TOMAS' },
                    { name: 'TUPE' },
                    { name: 'VIÑAC' },
                    { name: 'VITIS' },
                ]
            },
        ]
    },
    {
        name: 'LORETO',
        provinces: [
            {
                name: 'MAYNAS',
                districts: [
                    { name: 'IQUITOS' },
                    { name: 'ALTO NANAY' },
                    { name: 'FERNANDO LORES' },
                    { name: 'INDIANA' },
                    { name: 'LAS AMAZONAS' },
                    { name: 'MAZAN' },
                    { name: 'NAPO' },
                    { name: 'PUNCHANA' },
                    { name: 'PUTUMAYO' },
                    { name: 'TORRES CAUSANA' },
                    { name: 'BELEN' },
                    { name: 'SAN JUAN BAUTISTA' },
                    { name: 'TENIENTE MANUEL CLAVERO' },
                ]
            },
            {
                name: 'ALTO AMAZONAS',
                districts: [
                    { name: 'YURIMAGUAS' },
                    { name: 'BALSAPUERTO' },
                    { name: 'JEBEROS' },
                    { name: 'LAGUNAS' },
                    { name: 'SANTA CRUZ' },
                    { name: 'TENIENTE CESAR LOPEZ ROJAS' },
                ]
            },
            {
                name: 'LORETO',
                districts: [
                    { name: 'NAUTA' },
                    { name: 'PARINARI' },
                    { name: 'TIGRE' },
                    { name: 'TROMPETEROS' },
                    { name: 'URARINAS' },
                ]
            },
            {
                name: 'MARISCAL RAMON CASTILLA',
                districts: [
                    { name: 'RAMON CASTILLA' },
                    { name: 'PEBAS' },
                    { name: 'YAVARI' },
                    { name: 'SAN PABLO' },
                ]
            },
            {
                name: 'REQUENA',
                districts: [
                    { name: 'REQUENA' },
                    { name: 'ALTO TAPICHE' },
                    { name: 'CAPELO' },
                    { name: 'EMILIO SAN MARTIN' },
                    { name: 'MAQUIA' },
                    { name: 'PUINAHUA' },
                    { name: 'SAQUENA' },
                    { name: 'SOPLIN' },
                    { name: 'TAPICHE' },
                    { name: 'JENARO HERRERA' },
                    { name: 'YAQUERANA' },
                ]
            },
            {
                name: 'UCAYALI',
                districts: [
                    { name: 'CONTAMANA' },
                    { name: 'INAHUAYA' },
                    { name: 'PADRE MARQUEZ' },
                    { name: 'PAMPA HERMOSA' },
                    { name: 'SARAYACU' },
                    { name: 'VARGAS GUERRA' },
                ]
            },
            {
                name: 'DATEM DEL MARAÑON',
                districts: [
                    { name: 'BARRANCA' },
                    { name: 'CAHUAPANAS' },
                    { name: 'MANSERICHE' },
                    { name: 'MORONA' },
                    { name: 'PASTAZA' },
                    { name: 'ANDOAS' },
                ]
            },
        ]
    },
    {
        name: 'MADRE DE DIOS',
        provinces: [
            {
                name: 'TAMBOPATA',
                districts: [
                    { name: 'TAMBOPATA' },
                    { name: 'INAMBARI' },
                    { name: 'LAS PIEDRAS' },
                    { name: 'LABERINTO' },
                ]
            },
            {
                name: 'MANU',
                districts: [
                    { name: 'MANU' },
                    { name: 'FITZCARRALD' },
                    { name: 'MADRE DE DIOS' },
                    { name: 'HUEPETUHE' },
                ]
            },
            {
                name: 'TAHUAMANU',
                districts: [
                    { name: 'IÑAPARI' },
                    { name: 'IBERIA' },
                    { name: 'TAHUAMANU' },
                ]
            },
        ]
    },
    {
        name: 'MOQUEGUA',
        provinces: [
            {
                name: 'MARISCAL NIETO',
                districts: [
                    { name: 'MOQUEGUA' },
                    { name: 'CARUMAS' },
                    { name: 'CUCHUMBAYA' },
                    { name: 'SAMEGUA' },
                    { name: 'SAN CRISTOBAL' },
                    { name: 'TORATA' },
                ]
            },
            {
                name: 'GENERAL SANCHEZ CERRO',
                districts: [
                    { name: 'OMATE' },
                    { name: 'CHOJATA' },
                    { name: 'COALAQUE' },
                    { name: 'ICHUÑA' },
                    { name: 'LA CAPILLA' },
                    { name: 'LLOQUE' },
                    { name: 'MATALAQUE' },
                    { name: 'PUQUINA' },
                    { name: 'QUINISTAQUILLAS' },
                    { name: 'UBINAS' },
                    { name: 'YUNGA' },
                ]
            },
            {
                name: 'ILO',
                districts: [
                    { name: 'ILO' },
                    { name: 'EL ALGARROBAL' },
                    { name: 'PACOCHA' },
                ]
            },
        ]
    },
    {
        name: 'PASCO',
        provinces: [
            {
                name: 'PASCO',
                districts: [
                    { name: 'CHAUPIMARCA' },
                    { name: 'HUACHON' },
                    { name: 'HUARIACA' },
                    { name: 'HUAYLLAY' },
                    { name: 'NINACACA' },
                    { name: 'PALLANCHACRA' },
                    { name: 'PAUCARTAMBO' },
                    { name: 'SAN FRANCISCO DE ASIS DE YARUSYACAN' },
                    { name: 'SIMON BOLIVAR' },
                    { name: 'TICLACAYAN' },
                    { name: 'TINYAHUARCO' },
                    { name: 'VICCO' },
                    { name: 'YANACANCHA' },
                ]
            },
            {
                name: 'OXAPAMPA',
                districts: [
                    { name: 'OXAPAMPA' },
                    { name: 'CHONTABAMBA' },
                    { name: 'HUANCABAMBA' },
                    { name: 'PALCAZU' },
                    { name: 'POZUZO' },
                    { name: 'PUERTO BERMUDEZ' },
                    { name: 'VILLA RICA' },
                    { name: 'CONSTITUCIÓN' },
                ]
            },
            {
                name: 'DANIEL A. CARRION',
                districts: [
                    { name: 'YANAHUANCA' },
                    { name: 'CHACAYAN' },
                    { name: 'GOYLLARISQUIZGA' },
                    { name: 'PAUCAR' },
                    { name: 'SAN PEDRO DE PILLAO' },
                    { name: 'SANTA ANA DE TUSI' },
                    { name: 'TAPUC' },
                    { name: 'VILCABAMBA' },
                ]
            },
        ]
    },
    {
        name: 'PIURA',
        provinces: [
            {
                name: 'AYABACA',
                districts: [
                    { name: 'AYABACA' },
                    { name: 'FRIAS' },
                    { name: 'JILILI' },
                    { name: 'LAGUNAS' },
                    { name: 'MONTERO' },
                    { name: 'PACAIPAMPA' },
                    { name: 'PAIMAS' },
                    { name: 'SAPILLICA' },
                    { name: 'SICCHEZ' },
                    { name: 'SUYO' },
                ]
            },
            {
                name: 'HUANCABAMBA',
                districts: [
                    { name: 'HUANCABAMBA' },
                    { name: 'CANCHAQUE' },
                    { name: 'EL CARMEN DE LA FRONTERA' },
                    { name: 'HUARMACA' },
                    { name: 'LALAQUIZ' },
                    { name: 'SAN MIGUEL DE EL FAIQUE' },
                    { name: 'SONDOR' },
                    { name: 'SONDORILLO' },
                ]
            },
            {
                name: 'MORROPON',
                districts: [
                    { name: 'CHULUCANAS' },
                    { name: 'BUENOS AIRES' },
                    { name: 'CHALACO' },
                    { name: 'LA MATANZA' },
                    { name: 'MORROPON' },
                    { name: 'SALITRAL' },
                    { name: 'SAN JUAN DE BIGOTE' },
                    { name: 'SANTA CATALINA DE MOSSA' },
                    { name: 'SANTO DOMINGO' },
                    { name: 'YAMANGO' },
                ]
            },
            {
                name: 'PIURA',
                districts: [
                    { name: 'PIURA' },
                    { name: 'CASTILLA' },
                    { name: 'CATACAOS' },
                    { name: 'CURA MORI' },
                    { name: 'EL TALLAN' },
                    { name: 'LA ARENA' },
                    { name: 'LA UNION' },
                    { name: 'LAS LOMAS' },
                    { name: 'TAMBO GRANDE' },
                ]
            },
            {
                name: 'SECHURA',
                districts: [
                    { name: 'SECHURA' },
                    { name: 'BELLAVISTA DE LA UNION' },
                    { name: 'BERNAL' },
                    { name: 'CRISTO NOS VALGA' },
                    { name: 'VICE' },
                    { name: 'RINCONADA LLICUAR' },
                ]
            },
            {
                name: 'SULLANA',
                districts: [
                    { name: 'SULLANA' },
                    { name: 'BELLAVISTA' },
                    { name: 'IGNACIO ESCUDERO' },
                    { name: 'LANCONES' },
                    { name: 'MARCAVELICA' },
                    { name: 'MIGUEL CHECA' },
                    { name: 'QUERECOTILLO' },
                    { name: 'SALITRAL' },
                ]
            },
            {
                name: 'PAITA',
                districts: [
                    { name: 'PAITA' },
                    { name: 'AMOTAPE' },
                    { name: 'ARENAL' },
                    { name: 'COLAN' },
                    { name: 'LA HUACA' },
                    { name: 'TAMARINDO' },
                    { name: 'VICHAYAL' },
                ]
            },
            {
                name: 'TALARA',
                districts: [
                    { name: 'PARIÑAS' },
                    { name: 'EL ALTO' },
                    { name: 'LA BREA' },
                    { name: 'LOBITOS' },
                    { name: 'LOS ORGANOS' },
                    { name: 'MANCORA' },
                ]
            },
        ]
    },
    {
        name: 'PUNO',
        provinces: [
            {
                name: 'SAN ROMAN',
                districts: [
                    { name: 'JULIACA' },
                    { name: 'CABANA' },
                    { name: 'CABANILLAS' },
                    { name: 'CARACOTO' },
                ]
            },
            {
                name: 'PUNO',
                districts: [
                    { name: 'PUNO' },
                    { name: 'ACORA' },
                    { name: 'AMANTANI' },
                    { name: 'ATUNCOLLA' },
                    { name: 'CAPACHICA' },
                    { name: 'CHUCUITO' },
                    { name: 'COATA' },
                    { name: 'HUATA' },
                    { name: 'MAÑAZO' },
                    { name: 'PAUCARCOLLA' },
                    { name: 'PICHACANI' },
                    { name: 'PLATERIA' },
                    { name: 'SAN ANTONIO' },
                    { name: 'TIQUILLACA' },
                    { name: 'VILQUE' },
                ]
            },
            {
                name: 'AZANGARO',
                districts: [
                    { name: 'AZANGARO' },
                    { name: 'ACHAYA' },
                    { name: 'ARAPA' },
                    { name: 'ASILLO' },
                    { name: 'CAMINACA' },
                    { name: 'CHUPA' },
                    { name: 'JOSE DOMINGO CHOQUEHUANCA' },
                    { name: 'MUÑANI' },
                    { name: 'POTONI' },
                    { name: 'SAMAN' },
                    { name: 'SAN ANTON' },
                    { name: 'SAN JOSE' },
                    { name: 'SAN JUAN DE SALINAS' },
                    { name: 'SANTIAGO DE PUPUJA' },
                    { name: 'TIRAPATA' },
                ]
            },
            {
                name: 'CHUCUITO',
                districts: [
                    { name: 'JULI' },
                    { name: 'DESAGUADERO' },
                    { name: 'HUACULLANI' },
                    { name: 'KELLUYO' },
                    { name: 'PISACOMA' },
                    { name: 'POMATA' },
                    { name: 'ZEPITA' },
                ]
            },
            {
                name: 'EL COLLAO',
                districts: [
                    { name: 'ILAVE' },
                    { name: 'CAPAZO' },
                    { name: 'PILCUYO' },
                    { name: 'SANTA ROSA' },
                    { name: 'CONDURIRI' },
                ]
            },
            {
                name: 'MELGAR',
                districts: [
                    { name: 'AYAVIRI' },
                    { name: 'ANTAUTA' },
                    { name: 'CUPI' },
                    { name: 'LLALLI' },
                    { name: 'MACARI' },
                    { name: 'NUÑOA' },
                    { name: 'ORURILLO' },
                    { name: 'SANTA ROSA' },
                    { name: 'UMACHIRI' },
                ]
            },
            {
                name: 'CARABAYA',
                districts: [
                    { name: 'MACUSANI' },
                    { name: 'AJOYANI' },
                    { name: 'AYAPATA' },
                    { name: 'COASA' },
                    { name: 'CORANI' },
                    { name: 'CRUCERO' },
                    { name: 'ITUATA' },
                    { name: 'OLLACHEA' },
                    { name: 'SAN GABAN' },
                    { name: 'USICAYOS' },
                ]
            },
            {
                name: 'HUANCANE',
                districts: [
                    { name: 'HUANCANE' },
                    { name: 'COJATA' },
                    { name: 'HUATASANI' },
                    { name: 'INCHUPALLA' },
                    { name: 'PUSI' },
                    { name: 'ROSASPATA' },
                    { name: 'TARACO' },
                    { name: 'VILQUE CHICO' },
                ]
            },
            {
                name: 'SANDIA',
                districts: [
                    { name: 'SANDIA' },
                    { name: 'CUYOCUYO' },
                    { name: 'LIMBANI' },
                    { name: 'PATAMBUCO' },
                    { name: 'PHARA' },
                    { name: 'QUIACA' },
                    { name: 'SAN JUAN DEL ORO' },
                    { name: 'YANAHUAYA' },
                    { name: 'ALTO INAMBARI' },
                    { name: 'SAN PEDRO DE PUTINA PUNCO' },
                ]
            },
            {
                name: 'SAN ANTONIO DE PUTINA',
                districts: [
                    { name: 'PUTINA' },
                    { name: 'ANANEA' },
                    { name: 'PEDRO VILCA APAZA' },
                    { name: 'QUILCAPUNCU' },
                    { name: 'SINA' },
                ]
            },
            {
                name: 'LAMPA',
                districts: [
                    { name: 'LAMPA' },
                    { name: 'CABANILLA' },
                    { name: 'CALAPUJA' },
                    { name: 'NICASIO' },
                    { name: 'OCUVIRI' },
                    { name: 'PALCA' },
                    { name: 'PARATIA' },
                    { name: 'PUCARA' },
                    { name: 'SANTA LUCIA' },
                    { name: 'VILAVILA' },
                ]
            },
            {
                name: 'YUNGUYO',
                districts: [
                    { name: 'YUNGUYO' },
                    { name: 'ANAPIA' },
                    { name: 'COPANI' },
                    { name: 'CUTURAPI' },
                    { name: 'OLLARAYA' },
                    { name: 'TINICACHI' },
                    { name: 'UNICACHI' },
                ]
            },
            {
                name: 'MOHO',
                districts: [
                    { name: 'MOHO' },
                    { name: 'CONIMA' },
                    { name: 'HUAYRAPATA' },
                    { name: 'TILALI' },
                ]
            },
        ]
    },
    {
        name: 'SAN MARTIN',
        provinces: [
            {
                name: 'BELLAVISTA',
                districts: [
                    { name: 'BELLAVISTA' },
                    { name: 'ALTO BIAVO' },
                    { name: 'BAJO BIAVO' },
                    { name: 'HUALLAGA' },
                    { name: 'SAN PABLO' },
                    { name: 'SAN RAFAEL' },
                ]
            },
            {
                name: 'EL DORADO',
                districts: [
                    { name: 'SAN JOSE DE SISA' },
                    { name: 'AGUA BLANCA' },
                    { name: 'SAN MARTIN' },
                    { name: 'SANTA ROSA' },
                    { name: 'SHATOJA' },
                ]
            },
            {
                name: 'HUALLAGA',
                districts: [
                    { name: 'SAPOSOA' },
                    { name: 'ALTO SAPOSOA' },
                    { name: 'EL ESLABON' },
                    { name: 'PISCOYACU' },
                    { name: 'SACANCHE' },
                    { name: 'TINGO DE SAPOSOA' },
                ]
            },
            {
                name: 'LAMAS',
                districts: [
                    { name: 'LAMAS' },
                    { name: 'ALONSO DE ALVARADO' },
                    { name: 'BARRANQUITA' },
                    { name: 'CAYNARACHI' },
                    { name: 'CUÑUMBUQUI' },
                    { name: 'PINTO RECODO' },
                    { name: 'RUMISAPA' },
                    { name: 'SAN ROQUE DE CUMBAZA' },
                    { name: 'SHANAO' },
                    { name: 'TABALOSOS' },
                    { name: 'ZAPATERO' },
                ]
            },
            {
                name: 'MARISCAL CACERES',
                districts: [
                    { name: 'JUANJUI' },
                    { name: 'CAMPANILLA' },
                    { name: 'HUICUNGO' },
                    { name: 'PACHIZA' },
                    { name: 'PAJARILLO' },
                ]
            },
            {
                name: 'MOYOBAMBA',
                districts: [
                    { name: 'MOYOBAMBA' },
                    { name: 'CALZADA' },
                    { name: 'HABANA' },
                    { name: 'JEPELACIO' },
                    { name: 'SORITOR' },
                    { name: 'YANTALO' },
                ]
            },
            {
                name: 'PICOTA',
                districts: [
                    { name: 'PICOTA' },
                    { name: 'BUENOS AIRES' },
                    { name: 'CASPISAPA' },
                    { name: 'PILLUANA' },
                    { name: 'PUCACACA' },
                    { name: 'SAN CRISTOBAL' },
                    { name: 'SAN HILARION' },
                    { name: 'SHAMBOYACU' },
                    { name: 'TINGO DE PONASA' },
                    { name: 'TRES UNIDOS' },
                ]
            },
            {
                name: 'RIOJA',
                districts: [
                    { name: 'RIOJA' },
                    { name: 'AWAJUN' },
                    { name: 'ELIAS SOPLIN VARGAS' },
                    { name: 'NUEVA CAJAMARCA' },
                    { name: 'PARDO MIGUEL' },
                    { name: 'POSIC' },
                    { name: 'SAN FERNANDO' },
                    { name: 'YORONGOS' },
                    { name: 'YURACYACU' },
                ]
            },
            {
                name: 'SAN MARTIN',
                districts: [
                    { name: 'TARAPOTO' },
                    { name: 'ALBERTO LEVEAU' },
                    { name: 'CACATACHI' },
                    { name: 'CHAZUTA' },
                    { name: 'CHIPURANA' },
                    { name: 'EL PORVENIR' },
                    { name: 'HUIMBAYOC' },
                    { name: 'JUAN GUERRA' },
                    { name: 'LA BANDA DE SHILCAYO' },
                    { name: 'MORALES' },
                    { name: 'PAPAPLAYA' },
                    { name: 'SAN ANTONIO' },
                    { name: 'SAUCE' },
                    { name: 'SHAPAJA' },
                ]
            },
            {
                name: 'TOCACHE',
                districts: [
                    { name: 'TOCACHE' },
                    { name: 'NUEVO PROGRESO' },
                    { name: 'POLVORA' },
                    { name: 'SHUNTE' },
                    { name: 'UCHIZA' },
                ]
            },
        ]
    },
    {
        name: 'TACNA',
        provinces: [
            {
                name: 'TACNA',
                districts: [
                    { name: 'TACNA' },
                    { name: 'ALTO DE LA ALIANZA' },
                    { name: 'CALANA' },
                    { name: 'CIUDAD NUEVA' },
                    { name: 'INCLAN' },
                    { name: 'PACHIA' },
                    { name: 'PALCA' },
                    { name: 'POCOLLAY' },
                    { name: 'SAMA' },
                    { name: 'CORONEL GREGORIO ALBARRACIN LANCHIPA' },
                ]
            },
            {
                name: 'CANDARAVE',
                districts: [
                    { name: 'CANDARAVE' },
                    { name: 'CAIRANI' },
                    { name: 'CAMILACA' },
                    { name: 'CURIBAYA' },
                    { name: 'HUANUARA' },
                    { name: 'QUILAHUANI' },
                ]
            },
            {
                name: 'JORGE BASADRE',
                districts: [
                    { name: 'LOCUMBA' },
                    { name: 'ILABAYA' },
                    { name: 'ITE' },
                ]
            },
            {
                name: 'TARATA',
                districts: [
                    { name: 'TARATA' },
                    { name: 'HEROES ALBARRACIN' },
                    { name: 'ESTIQUE' },
                    { name: 'ESTIQUE-PAMPA' },
                    { name: 'SITAJARA' },
                    { name: 'SUSAPAYA' },
                    { name: 'TARUCACHI' },
                    { name: 'TICACO' },
                ]
            },
        ]
    },
    {
        name: 'TUMBES',
        provinces: [
            {
                name: 'TUMBES',
                districts: [
                    { name: 'TUMBES' },
                    { name: 'CORRALES' },
                    { name: 'LA CRUZ' },
                    { name: 'PAMPAS DE HOSPITAL' },
                    { name: 'SAN JACINTO' },
                    { name: 'SAN JUAN DE LA VIRGEN' },
                ]
            },
            {
                name: 'ZARUMILLA',
                districts: [
                    { name: 'ZARUMILLA' },
                    { name: 'AGUAS VERDES' },
                    { name: 'MATAPALO' },
                    { name: 'PAPAYAL' },
                ]
            },
            {
                name: 'CONTRALMIRANTE VILLAR',
                districts: [
                    { name: 'ZORRITOS' },
                    { name: 'CASITAS' },
                    { name: 'CANOAS DE PUNTA SAL' },
                ]
            },
        ]
    },
    {
        name: 'UCAYALI',
        provinces: [
            {
                name: 'CORONEL PORTILLO',
                districts: [
                    { name: 'CALLERIA' },
                    { name: 'CAMPOVERDE' },
                    { name: 'IPARIA' },
                    { name: 'MASISEA' },
                    { name: 'YARINACOCHA' },
                    { name: 'NUEVA REQUENA' },
                    { name: 'MANANTAY' },
                ]
            },
            {
                name: 'ATALAYA',
                districts: [
                    { name: 'RAYMONDI' },
                    { name: 'SEPAHUA' },
                    { name: 'TAHUANIA' },
                    { name: 'YURUA' },
                ]
            },
            {
                name: 'PADRE ABAD',
                districts: [
                    { name: 'PADRE ABAD' },
                    { name: 'IRAZOLA' },
                    { name: 'CURIMANA' },
                ]
            },
            {
                name: 'PURUS',
                districts: [
                    { name: 'PURUS' },
                ]
            },
        ]
    },
]

export default departments;