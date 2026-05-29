// config.js

// Lista de Revendedoras para fácil alteração
const revendedoras = [
    { codigo: 'JUELISIA2026', nome: 'Juelisia Almeida', whatsapp: '5511941064847' },
    { codigo: 'MICHELE', nome: 'Michele Santo', whatsapp: '5511971128269' }
];

// Lista de Produtos
const produtos = [
    { 
        id: 'rec4rKg8SZEuWj62u',
        nome: 'BANNER',
        preco: 0,
        precoOriginal: 0,
        destaque: false,
        img: 'img/banner.png',
        grama: '',
        categoria: 'BANNER',
        statusCampanha: '',
        descricao: '' },

    {
        id: '01',
        nome: 'Sabonete de Açafrão da Terra e Barbatimão **trata foliculite**',
        preco: 18.00,
        precoOriginal: 22.00,
        destaque: true,
        img: 'img/1.png',
        grama: '110g',
        categoria: 'CUIDADO ÍNTIMO',
        statusCampanha: 'PROMOÇÃO',
        descricao: `Benefícios:
        Auxilia na redução do crescimento dos pelos com uso contínuo.
        Controla a oleosidade e previne cravos e espinhas.
        Ação anti-inflamatória e cicatrizante, ideal para peles sensíveis.
        Hidrata sem obstruir os poros.
        Suaviza rugas e linhas de expressão.
        Protege contra infecções íntimas com ação antifúngica e antibacteriana.
        Ajuda no tratamento de foliculite e irritações pós-depilação.
        Açafrão da Terra: antioxidante natural, combate inflamações e manchas.
        Barbatimão: adstringente e cicatrizante, promove saúde íntima e da pele.
        Manteiga de Karité: hidratação profunda e nutrição

        Modo de usar:
        Uso diário. Aplique na região desejada, deixe agir por até 5 minutos e enxágue.`
    },

    {
        id: '02',
        nome: 'Sabonete de Maracujá Azedo',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'img/2.png',
        grama: '100g',
        categoria: 'REFRESCA/HIDRATA',
        statusCampanha: '',
        descricao: `O sabonete artesanal de maracujá azedo é um produto natural, hidratante e refrescante, ideal para limpeza suave da pele. Com base glicerinada, frequentemente combina essência cítrica de maracujá, extratos glicólicos (como maracujá ou aveia) e sementes desidratadas para esfoliação leve. Promove ação calmante, revigorante e ajuda no controle da oleosidade.

        Principais Características e Benefícios:
        Aroma: Cítrico, intenso e vibrante, fiel à fruta.
        Ação na Pele: Calmante, relaxante e revigorante.
        Hidratação: Proporcionada pela base glicerinada e manteigas vegetais.`
    },

    {
        id: '03',
        nome: 'Sabonete de Pitaya',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'img/3.png',
        grama: '90g',
        categoria: 'REFRESCA/HIDRATA',
        statusCampanha: '',
        descricao: `A pitaya é rica em vitaminas C e E, que são
    antioxidantes poderosos.Essas vitaminas ajudam a
    proteger a pele contra os danos dos radicais livres,
    que podem acelerar o envelhecimento da pele e
    causar danos celulares.
    A Aloe vera, por sua vez, é conhecida por suas
    propriedades hidratantes e calmantes.Ela contém
    uma substância chamada mucopolissacarídeo, que
    ajuda a reter a umidade na pele, mantendo- a
    hidratada e evitando a perda excessiva de água.
` },

    {
        id: '04',
        nome: 'Sabonete de Calêndula',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'img/4.png',
        grama: '100g',
        categoria: 'CUIDADO ÍNTIMO',
        statusCampanha: '',
        descricao: `Sabonete artesanal de Calêndula produzido com
        extrato natural de Camomila. Este sabonete oferece
        propriedades com ações adstringente, analgésica,
        calmante, cicatrizante, antialérgica, antifúngica,
        antiviral, tonificante da pele e bactericida.
        Ideal para o cuidado de peles sensíveis e auxiliam no
        processo de cicatrização, ameniza coceiras e acalma
        a pele.` },

    {
        id: '05',
        nome: 'Sabonete de Castanha',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'img/5.png',
        grama: '100g',
        categoria: 'HIDRATANTE',
        statusCampanha: '',
        descricao: `Este é nosso novo sabonete artesanal de castanha
        com manteiga de karité e extrato de leite de cabra.
        Uma combinação perfeita e nutritiva para cuidar da
        sua pele.Combinando ingredientes naturais e
        benéficos, esse sabonete oferece uma experiência
        única de limpeza e hidratação intensa.` },

    {
        id: '06',
        nome: 'Sabonete de Mel e Própolis',
        preco: 15.00,
        precoOriginal: 18.50,
        destaque: true,
        img: 'img/6.png',
        grama: '70g',
        categoria: 'HIDRATANTE',
        statusCampanha: 'ÚLTIMO CICLO',
        descricao: `Proporciona hidratação profunda, deixando a pele macia e nutrida. Possui ação antisséptica, antibacteriana e anti-inflamatória, ajudando na cicatrização, no alívio de irritações e na prevenção do envelhecimento precoce graças aos antioxidantes naturais. O uso regular promove pele mais suave, uniforme e luminosa.` },

    {
        id: '07',
        nome: 'Sabonete de Coco e Vanilla',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'img/7.png',
        grama: '100g',
        categoria: 'HIDRATANTE',
        statusCampanha: '',
        descricao: `Promove limpeza profunda e suave, sem agredir a pele, graças à glicerina natural. Rico em óleo de coco, oferece hidratação intensa, nutrição e toque macio, além de ajudar no controle da oleosidade. Possui ação antibacteriana e calmante, sendo hipoalergênico e ideal para peles sensíveis, mistas a oleosas, podendo também ser usado para bebês e roupas delicadas.
    ` },

    {
        id: '08',
        nome: 'Sabonete Amazônia com bucha vegetal',
        preco: 28.00,
        precoOriginal: 28.00,
        destaque: false,
        img: 'img/8.png',
        grama: '110g',
        categoria: 'MASSAGEADOR',
        statusCampanha: '',
        descricao: `Sabonete Artesanal Amazônia com Bucha Vegetal
    Sabonete natural que proporciona limpeza profunda e esfoliação suave em um só produto. Possui bucha vegetal incorporada, que ajuda na remoção de células mortas, estimula a circulação e deixa a pele macia, renovada e revitalizada.
    Com aroma refrescante e fórmula hidratante, é ideal para transformar o banho em um momento prático de cuidado e bem-estar diário. 🌿` },

    {
        id: '09',
        nome: 'Sabonete de Capim Limão',
        preco: 15.00,
        precoOriginal: 18.50,
        destaque: true,
        img: 'img/9.png',
        grama: '100g',
        categoria: 'RELAXANTE',
        statusCampanha: 'PROMOÇÃO',
        descricao: `Poderoso calmante natural, proporciona ações antissépticas e relaxantes. Além do cheirinho maravilhoso e fresco. Seu aroma delicado proporciona sensação de frescor duradoura no corpo. O extrato de Aloe Vera presente no sabonete possui propriedades antioxidantes, adstringentes e antissépticas, além de proporcionar muita hidratação.` },


    {
        id: '10',
        nome: 'Sabonete de Carvão Ativado - Controle da oleosidade',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'img/10.png',
        grama: '100g',
        categoria: 'CUIDADO FACIAL',
        statusCampanha: '',
        descricao: `Limpeza profunda e desobstrução dos poros
        • Controle da oleosidade e prevenção de acne
        • Ação antibacteriana
        • Esfoliação suave, deixando a pele renovada
        • Auxilia na redução de manchas
        • Ajuda a acalmar irritações da pele

        ✨ Pele mais limpa, equilibrada e saudável!` },

    {
        id: '11',
        nome: 'Sabonete de Arruda',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'img/11.png',
        grama: '100g',
        categoria: 'ENERGIZANTE',
        statusCampanha: '',
        descricao: `Indicado para limpeza energética e proteção espiritual, ajudando a afastar inveja, mau-olhado e energias negativas. Possui ação antisséptica e anti-inflamatória suave, promovendo limpeza profunda, alívio de irritações, coceiras e auxílio na cicatrização. Também pode contribuir para o relaxamento muscular e sensação de leveza.
        Modo de uso: utilizar de 1 a 2 vezes por semana.` },

    {
        id: '12',
        nome: 'Sabonete Ametista de Amora',
        preco: 28.00,
        precoOriginal: 28.00,
        destaque: true,
        img: 'img/12.png',
        grama: '100g',
        categoria: 'ENERGIZANTE',
        statusCampanha: 'PROMOÇÃO',
        descricao: `Este sabonete exclusivo combina os benefícios revitalizantes da ametista com a fragrância irresistível da amora, proporcionando uma experiência de banho única e envolvente.
        Ideal para uso diário no banho, nosso Sabonete de Ametista é perfeito para todos os tipos de pele. Utilize-o para limpar e energizar seu corpo, deixando sua pele suave, perfumada e revigorada.` },

    {
        id: '13',
        nome: 'Sabonete de Melancia',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'img/13.png',
        grama: '100g',
        categoria: 'REFRESCA/HIDRATA',
        statusCampanha: '',
        descricao: `Feito à mão com riqueza de detalhes, ele une o visual surpreendente de uma fatia de fruta com os benefícios reais da natureza.
        O aloe vera hidrata profundamente e acalma a pele, deixando uma sensação suave e refrescante a cada uso.
        É cheiroso, bonito, funcional e irresistível — tudo o que um bom banho merece!
        COMO USAR:
        Este sabonete pode ser utilizado todo dia.` },

    {
        id: '14',
        nome: 'Sabonete de Alecrim, Manjericão e Hortelã',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'img/14.png',
        grama: '110g',
        categoria: 'ENERGIZANTE',
        statusCampanha: '',
        descricao: `Um banho que purifica, revitaliza e equilibra corpo, mente e espírito!

    Benefícios

    Alecrim – Estimula a circulação, energia vital, auxilia na concentração e desperta a clareza mental. No campo espiritual, é conhecido por afastar energias negativas e fortalecer a conexão espiritual.
    Manjericão – Uma erva sagrada de purificação, proteção e que promove paz interior, reduz o estresse e equilibra as emoções, alinhando corpo e mente.
    Hortelã – Refrescante e revigorante, alivia tensões e proporciona uma sensação de leveza e bem-estar. Também ajuda a desbloquear energias estagnadas, promovendo fluxo e renovação.

    COMO USAR

    Este sabonete pode ser utilizado 1x por semana para manter o equilíbrio em dia.` },

    { 
        id: '15',
         nome: 'Sabonete de Manga', 
         preco: 18.50, 
         precoOriginal: 18.50, 
         destaque: false, 
         img: 'img/15.png', 
         grama: '100g', 
         categoria: 'REFRESCA/HIDRATA', 
         statusCampanha: '', 
         descricao: `Descubra o frescor do verão com nosso Sabonete de
        Manga enriquecido com o suave extrato de
        calêndula. Uma combinação refrescante que deixa
        sua pele macia e revitalizada. Ideal para os dias
        quentes, proporcionando uma experiência leve e
        revigorante.
        Além disso, as pequenas sementes de colza no
        sabonete ajudam com uma leve esfoliação da pele,
        removendo impurezas e células mortas, enquanto
        faz uma espumação incrível na sua pele.` },

    { 
        id: '16',
        nome: 'Sabonete de Camomila', 
        preco: 18.50, 
        precoOriginal: 18.50, 
        destaque: false, 
        img: 'img/16.png', 
        grama: '100g', 
        categoria: 'RELAXANTE', 
        statusCampanha: '', 
        descricao: `🌼 Benefícios principais:
            •        Ação calmante e relaxante: ajuda a aliviar estresse, ansiedade e tensão.
            •        Hidratação natural: nutre a pele, deixando-a macia, suave e hidratada.
            •        Propriedades anti-inflamatórias: auxilia a acalmar irritações, vermelhidão e inflamações.
            •        Ideal para pele sensível e seca: suave e gentil, promove conforto e equilíbrio.
            •        Efeito aromaterapêutico: fragrância delicada que proporciona sensação de bem-estar e relaxamento durante o banho.` },


    { 
        id: '17',
        nome: 'Sabonete de Amora - Hidratante e Calmante', 
        preco: 9.90, 
        precoOriginal: 18.50, 
        destaque: true, 
        img: 'img/17.png', 
        grama: '80g', 
        categoria: 'REFRESCA/HIDRATA', 
        statusCampanha: 'ÚLTIMO CICLO', 
        descricao: `Delicado e envolvente, o sabonete de amora proporciona uma limpeza suave enquanto deixa a pele macia, hidratada e levemente perfumada. Rico em propriedades antioxidantes, ajuda a proteger a pele contra os danos do dia a dia, promovendo um aspecto mais saudável e revitalizado.
        Sua fragrância doce e marcante transforma o momento do banho em uma experiência relaxante e prazerosa. Ideal para todos os tipos de pele.` },

    { 
        id: '18',
        nome: 'Sabonete de Dolomita - Clareador de manchas', 
        preco: 18.50, 
        precoOriginal: 18.50, 
        destaque: false, 
        img: 'img/18.png', 
        grama: '100g', 
        categoria: 'CLAREADOR', 
        statusCampanha: '', 
        descricao: `A dolomita oferece um poder clareador e ameniza linhas de expressão, cicatrizes, olheiras, rugas e manchas de qualquer parte do corpo. Reduz o processo inflamatório em casos de acnes e ameniza os cravos.O sabonete de dolomita é indicado para a limpeza e esfoliação suave da pele, ajudando a manter a pele limpa, hidratada e com uma aparência saudável. Ideal para quem deseja um produto artesanal e eficaz para o cuidado diário da pele.` },

    { 
        id: '19', 
        nome: 'Sabonete de Sal Grosso e Alecrim - Limpeza Energética', 
        preco: 18.50, 
        precoOriginal: 18.50, 
        destaque: false, 
        img: 'img/19.png', 
        grama: '100g', 
        categoria: 'ENERGIZANTE', 
        statusCampanha: '', 
        descricao: `Perfeito para renovar as energias e cuidar da pele, o sabonete de sal grosso e alecrim promove uma limpeza profunda e revitalizante. O sal grosso auxilia na esfoliação suave, removendo impurezas e células mortas, enquanto o alecrim possui propriedades estimulantes e refrescantes.
        Deixa a pele mais macia, purificada e com uma sensação única de frescor e bem-estar. Ideal para incluir no seu momento de autocuidado e equilíbrio.                                                                                                 Indicado para uso de 2 a 3 vezes por semana, ajudando a renovar a pele e proporcionar bem-estar e frescor. 🌿` },

    { 
        id: '20', 
        nome: 'Sabonete de Sal grosso e Arruda', 
        preco: 18.50, 
        precoOriginal: 18.50, 
        destaque: true, 
        img: 'img/20.png', 
        grama: '100g', 
        categoria: 'ENERGIZANTE', 
        statusCampanha: 'ÚLTIMO CICLO', 
        descricao: `O sabonete de sal grosso e arruda é indicado para limpeza energética, proteção e equilíbrio emocional. O sal grosso ajuda a purificar e renovar as energias, enquanto a arruda é conhecida por afastar influências negativas, como inveja e mau-olhado.

        Além da limpeza espiritual, o uso do sabonete promove sensação de bem-estar, leveza e autocuidado, podendo ser incorporado como um ritual de proteção pessoal durante o banho.

        👉 Como usar: recomenda-se utilizar 1 a 2 vezes por semana, pois o uso diário pode ser excessivo e interferir no equilíbrio das energias.

        ✨ Ideal para quem busca renovação, proteção e harmonia no dia a dia.` },

    { 
        id: '21', 
        nome: 'Sabonete de Sal Grosso e Anil - Limpeza Energética e Leveza', 
        preco: 18.50, 
        precoOriginal: 18.50, 
        destaque: false, 
        img: 'img/21.png', 
        grama: '100g', 
        categoria: 'ENERGIZANTE', 
        statusCampanha: '', 
        descricao: `🌿 Limpeza profunda da pele e da energia, promovendo sensação de leveza e renovação após o banho.

        ✨ Auxilia na proteção espiritual e no fortalecimento da aura, sendo ideal para momentos de cansaço, estresse ou necessidade de equilíbrio energético.

        💙 Possui fórmula glicerinada suave, que limpa e hidrata sem agredir a pele.

        🌊 Conta com aroma fresco de algas e propriedades calmantes do extrato de alecrim, proporcionando bem-estar e relaxamento.

        🧼 Pode ser usado no banho diário ou em rituais energéticos, algumas vezes por semana para manter a proteção e o equilíbrio.` },


    { 
        id: '22', 
        nome: 'Sabonete Olho Grego com Anil', 
        preco: 28.00, 
        precoOriginal: 28.00, 
        destaque: false, 
        img: 'img/22.png', 
        grama: '90g', 
        categoria: 'ENERGIZANTE', 
        statusCampanha: '', 
        descricao: `🧿 Benefícios principais:
            •        Proteção energética: ajuda a afastar inveja, mau-olhado e energias negativas.
            •        Limpeza e purificação da aura: o anil auxilia na neutralização de cargas pesadas e na renovação espiritual.
            •        Elevação da vibração: promove sensação de leveza, equilíbrio e bem-estar.
            •        Ritual de cuidado diário: transforma o banho em um momento de proteção e conexão energética.
            •        Hidratação da pele: deixa a pele macia e perfumada com a fragrância suave de bamboo.` },

    { 
        id: '23', 
        nome: 'Sabonete Cheirinho de Bebê', 
        preco: 18.50, 
        precoOriginal: 18.50, 
        destaque: false, 
        img: 'img/23.png', 
        grama: '100g', 
        categoria: 'HIDRATANTE', 
        statusCampanha: '', 
        descricao: `Delicado e suave, o sabonete cheirinho de bebê foi desenvolvido para proporcionar uma sensação de carinho e conforto à pele. Com fragrância leve e aconchegante, ele remete ao cuidado e à pureza, deixando um perfume suave que agrada a todos.` },

    { 
        id: '24', 
        nome: 'Sabonete Facial de Argila Verde', 
        preco: 15.00, 
        precoOriginal: 15.00, 
        destaque: false, 
        img: 'img/24.png', 
        grama: '70g', 
        categoria: 'CUIDADO FACIAL', 
        statusCampanha: '', 
        descricao: `Formulado com argila verde, extrato de alecrim e essência de chá verde, o sabonete facial de Argila Verde proporciona uma limpeza profunda e refrescante, enquanto nutre e revitaliza a pele.` },

    { 
        id: '25', 
        nome: 'Sabonete Facial de Dolomita', 
        preco: 15.00, 
        precoOriginal: 15.00, 
        destaque: false, 
        img: 'img/25.png', 
        grama: '70g', 
        categoria: 'CUIDADO FACIAL', 
        statusCampanha: '', 
        descricao: 'Enriquecido com extrato de leite de cabra, proporcionando uma limpeza profunda e revitalizante. Sua fórmula nutritiva ajuda a promover a regeneração celular, deixando a pele mais macia, luminosa e rejuvenescida.' },

    { 
        id: '26', 
        nome: 'Sabonete Facial de Argila Rosa', 
        preco: 15.00, 
        precoOriginal: 15.00, 
        destaque: false, 
        img: 'img/26.png', 
        grama: '70g', 
        categoria: 'CUIDADO FACIAL', 
        statusCampanha: '', 
        descricao: 'Enriquecido com óleo de rosa mosqueta e extrato de amêndoas, este sabonete delicadamente remove impurezas, enquanto nutre e hidrata a pele. Sua fórmula suave reduz manchas, desintoxica profundamente e proporciona uma esfoliação leve, deixando sua pele visivelmente mais radiante e revitalizada.' },

    { 
        id: '27', 
        nome: 'Geléia de Banho Maçã Verde', 
        preco: 25.00, 
        precoOriginal: 34.00, 
        destaque: true, 
        img: 'img/27.png', 
        grama: '250ml', 
        categoria: 'GELEIA DE BANHO', 
        statusCampanha: 'PROMOÇÃO', 
        descricao: `Transforme seu banho em um momento de cuidado e prazer! Nossa Geléia de banho possui uma textura única, que limpa suavemente a pele enquanto proporciona uma sensação refrescante e hidratante.
        Enriquecida com ingredientes selecionados, ela forma uma espuma delicada que deixa a pele macia, perfumada e revitalizada. Ideal para todos os tipos de pele, trazendo leveza e um toque especial à sua rotina de autocuidado.` },


    { 
        id: '28', 
        nome: 'Geléia de Banho Pitaya', 
        preco: 25.00, 
        precoOriginal: 34.00, 
        destaque: true, 
        img: 'img/28.png', 
        grama: '250ml', 
        categoria: 'GELEIA DE BANHO', 
        statusCampanha: 'PROMOÇÃO', 
        descricao: `Transforme seu banho em um momento de cuidado e prazer! Nossa Geléia de banho possui uma textura única, que limpa suavemente a pele enquanto proporciona uma sensação refrescante e hidratante.
        Enriquecida com ingredientes selecionados, ela forma uma espuma delicada que deixa a pele macia, perfumada e revitalizada. Ideal para todos os tipos de pele, trazendo leveza e um toque especial à sua rotina de autocuidado.` },

    { 
        id: '29',
        nome: 'Geléia de Banho Morango com Champanhe', 
        preco: 25.00, 
        precoOriginal: 34.00, 
        destaque: true, 
        img: 'img/29.png', 
        grama: '250ml', 
        categoria: 'GELEIA DE BANHO', 
        statusCampanha: 'PROMOÇÃO', 
        descricao: `Transforme seu banho em um momento de cuidado e prazer! Nossa Geléia de banho possui uma textura única, que limpa suavemente a pele enquanto proporciona uma sensação refrescante e hidratante.
        Enriquecida com ingredientes selecionados, ela forma uma espuma delicada que deixa a pele macia, perfumada e revitalizada. Ideal para todos os tipos de pele, trazendo leveza e um toque especial à sua rotina de autocuidado.` },

    { 
        id: '30',
        nome: 'Geléia de Banho Cereja e Avelã', 
        preco: 25.00, 
        precoOriginal: 34.00, 
        destaque: true, 
        img: 'img/30.png', 
        grama: '250ml', 
        categoria: 'GELEIA DE BANHO', 
        statusCampanha: 'PROMOÇÃO', 
        descricao: `Transforme seu banho em um momento de cuidado e prazer! Nossa Geléia de banho possui uma textura única, que limpa suavemente a pele enquanto proporciona uma sensação refrescante e hidratante. 
        Enriquecida com ingredientes selecionados, ela forma uma espuma delicada que deixa a pele macia, perfumada e revitalizada. Ideal para todos os tipos de pele, trazendo leveza e um toque especial à sua rotina de autocuidado.` },

    { 
        id: '31',
        nome: 'Geléia de Banho Manga', 
        preco: 25.00, 
        precoOriginal: 34.00, 
        destaque: true, 
        img: 'img/31.png', 
        grama: '250ml', 
        categoria: 'GELEIA DE BANHO', 
        statusCampanha: 'PROMOÇÃO', 
        descricao: `Transforme seu banho em um momento de cuidado e prazer! Nossa Geléia de banho possui uma textura única, que limpa suavemente a pele enquanto proporciona uma sensação refrescante e hidratante.
        Enriquecida com ingredientes selecionados, ela forma uma espuma delicada que deixa a pele macia, perfumada e revitalizada. Ideal para todos os tipos de pele, trazendo leveza e um toque especial à sua rotina de autocuidado.` },

    { 
        id: '32',
        nome: 'Geléia de Banho Melancia', 
        preco: 25.00, 
        precoOriginal: 34.00, 
        destaque: true, 
        img: 'img/32.png', 
        grama: '250ml', 
        categoria: 'GELEIA DE BANHO', 
        statusCampanha: 'PROMOÇÃO', 
        descricao: `Transforme seu banho em um momento de cuidado e prazer! Nossa Geléia de banho possui uma textura única, que limpa suavemente a pele enquanto proporciona uma sensação refrescante e hidratante.
        Enriquecida com ingredientes selecionados, ela forma uma espuma delicada que deixa a pele macia, perfumada e revitalizada. Ideal para todos os tipos de pele, trazendo leveza e um toque especial à sua rotina de autocuidado.` },

    /*{ 
        id: '33', 
        nome: 'Sabonete Massageador de Manga', 
        preco: 22.00, 
        precoOriginal: 22.00, 
        destaque: true, 
        img: 'img/33.png', 
        grama: '130g', 
        categoria: 'MASSAGEADOR', 
        statusCampanha: 'ÚLTIMO CICLO', 
        descricao: `Produzido com base glicerinada de alta qualidade, promove limpeza suave, hidratação e nutrição, deixando a pele macia, aveludada e delicadamente perfumada.

        ✨ Seu formato massageador estimula a circulação, proporcionando uma experiência relaxante e revitalizante durante o banho.

        🌿 Possui aroma doce, tropical e refrescante, que traz sensação energizante e ajuda a prevenir o ressecamento da pele.

        💚 Ideal para transformar o banho em um momento de autocuidado, frescor e bem-estar.` },

    { 
        id: '34', 
        nome: 'Sabonete Massageador de Morango com Champanhe', 
        preco: 22.00, 
        precoOriginal: 22.00, 
        destaque: false, 
        img: 'img/34.png', 
        grama: '130g', 
        categoria: 'MASSAGEADOR', 
        statusCampanha: '', 
        descricao: `Produzido com base glicerinada de alta qualidade, promove limpeza suave, hidratação e nutrição, deixando a pele macia, sedosa e perfumada.

        ✨ Seu formato massageador estimula a circulação, proporcionando uma experiência relaxante e revitalizante no banho.

        💖 Possui aroma doce, sofisticado e envolvente, que traz sensação refrescante e auxilia na prevenção do ressecamento, cuidando da pele com delicadeza.

        💚 Ideal para transformar o banho em um momento de cuidado, elegância e bem-estar.` },

    { 
        id: '35', 
        nome: 'Sabonete Massageador de Melancia', 
        preco: 22.00, 
        precoOriginal: 22.00, 
        destaque: false, 
        img: 'img/35.png', 
        grama: '130g', 
        categoria: 'MASSAGEADOR', 
        statusCampanha: '', 
        descricao: `Nosso sabonete artesanal de melancia é produzido com base glicerinada de alta qualidade, trazendo um aroma frutal adocicado e uma aparência vibrante que remete à fruta natural.
        Enriquecido com extratos naturais, ele promove uma limpeza suave, hidratação profunda e ação antioxidante, deixando a pele macia, perfumada e refrescante. Para um cuidado ainda mais especial, pode conter sementes naturais que proporcionam uma leve esfoliação, renovando a pele de forma delicada.` },


    { 
        id: '36', 
        nome: 'Sabonete Massageador de Pitaya', 
        preco: 22.00, 
        precoOriginal: 22.00, 
        destaque: true, 
        img: 'img/36.png', 
        grama: '130g', 
        categoria: 'MASSAGEADOR', 
        statusCampanha: 'ÚLTIMO CICLO', 
        descricao: `Nosso sabonete massageador de pitaya é produzido com base glicerinada de alta qualidade, trazendo um aroma suave, adocicado e exótico. Seu formato massageador proporciona uma experiência diferenciada no banho, estimulando a circulação enquanto limpa e cuida da pele.
        Enriquecido com extratos naturais, promove uma limpeza delicada, hidratação profunda e ação revitalizante, deixando a pele macia, perfumada e com um toque sedoso. Ideal para quem busca um momento de autocuidado com leveza e frescor.`},

    { 
        id: '37', 
        nome: 'Sabonete Massageador de Maracujá', 
        preco: 22.00, 
        precoOriginal: 22.00, 
        destaque: false, 
        img: 'img/37.png', 
        grama: '130g', 
        categoria: 'MASSAGEADOR', 
        statusCampanha: '', 
        descricao: `Promove limpeza suave, hidratação e renovação da pele, enquanto sua textura massageadora estimula a circulação, alivia tensões e ajuda a reduzir o inchaço.
        🌿 Com extrato de aloe vera: ação calmante, regeneradora e hidratante — ideal para peles sensíveis ou ressecadas
        🍃 Aroma de maracujá: fragrância cítrica e energizante que desperta os sentidos
        ✨ Esfoliação leve: remove células mortas e deixa a pele macia e revitalizada
        💧 Nutrição sem ressecar: limpa profundamente mantendo a hidratação natural da pele

        Resultado: pele mais saudável, macia, perfumada e revigorada.` },

    { 
        id: '38', 
        nome: 'Sabonete Massageador de Maçã Verde', 
        preco: 22.00, 
        precoOriginal: 0, 
        destaque: false, 
        img: 'img/38.png', 
        grama: '130g', 
        categoria: 'MASSAGEADOR', 
        statusCampanha: '', 
        descricao: `Nosso sabonete massageador de maçã verde é produzido com base glicerinada de alta qualidade, trazendo um aroma frutal fresco e levemente adocicado. Seu formato massageador proporciona uma experiência única no banho, estimulando a circulação enquanto limpa e cuida da pele.
        Enriquecido com extratos naturais, promove uma limpeza suave, hidratação profunda e ação revitalizante, deixando a pele macia, perfumada e com sensação refrescante. Ideal para transformar o banho em um momento relaxante e energizante ao mesmo tempo` },*/


    { 
        id: '39', 
        nome: 'Escalda pés de Eucalipto e alecrim', 
        preco: 20.00, 
        precoOriginal: 20.00, 
        destaque: false, 
        img: 'img/39.png', 
        grama: '100g', 
        categoria: 'ESCALDA PÉS', 
        statusCampanha: '', 
        descricao: `Escalda-pés de Alecrim Energizante - Ideal para relaxar e revigorar após um dia cansativo. Enriquecido com alecrim, ajuda a aliviar o cansaço dos pés, proporciona sensação de frescor, bem-estar e renovação das energias. Perfeito para momentos de autocuidado e spa em casa.` },

    { 
        id: '40', 
        nome: 'Escalda pés de Camomila e Lavanda', 
        preco: 20.00, 
        precoOriginal: 20.00, 
        destaque: false, 
        img: 'img/40.png', 
        grama: '100g', 
        categoria: 'ESCALDA PÉS', 
        statusCampanha: '', 
        descricao: `✨ Escalda-Pés de Camomila – Calmante e Relaxante  Proporcione um momento de cuidado e bem-estar com o escalda-pés de camomila. Enriquecido com sal grosso e notas suaves de lavanda, ele ajuda a aliviar o cansaço dos pés, promove relaxamento profundo e deixa uma sensação deliciosa de leveza e conforto após um dia intenso. Ideal para seu ritual de spa em casa. 🌿💛` },

    /*{ 
        id: '41', 
        nome: 'Kit Geléia de Banho de Manga', 
        preco: 59.90, 
        precoOriginal: 59.90, 
        destaque: false, 
        img: 'img/41.png', 
        grama: '2 unidades', 
        categoria: 'KIT', 
        statusCampanha: '', 
        descricao: `Este kit combina a delicadeza da geleia de banho com a suavidade do sabonete artesanal, criando uma experiência única, perfumada e relaxante. ` },

    { 
        id: '42', 
        nome: 'Kit Geléia de Banho de Morango com Champanhe', 
        preco: 59.90, 
        precoOriginal: 59.90, 
        destaque: false, 
        img: 'img/42.png', 
        grama: '2 unidades', 
        categoria: 'KIT', 
        statusCampanha: '', 
        descricao: ` Este kit combina a delicadeza da geleia de banho com a suavidade do sabonete artesanal, criando uma experiência única, perfumada e relaxante.` },

    { 
        id: '43', 
        nome: 'Kit Geléia de Banho de Pitaya', 
        preco: 59.90, 
        precoOriginal: 59.90, 
        destaque: false, 
        img: 'img/43.png', 
        grama: '2 unidades', 
        categoria: 'KIT', 
        statusCampanha: '', 
        descricao: `Este kit combina a delicadeza da geleia de banho com a suavidade do sabonete artesanal, criando uma experiência única, perfumada e relaxante.` },

    { 
        id: '44', 
        nome: 'Kit Geléia de Banho de Maça Verde', 
        preco: 59.90, 
        precoOriginal: 59.90, 
        destaque: false, 
        img: 'img/44.png', 
        grama: '2 unidades', 
        categoria: 'KIT', 
        statusCampanha: '', 
        descricao: `Este kit combina a delicadeza da geleia de banho com a suavidade do sabonete artesanal, criando uma experiência única, perfumada e relaxante.` },

    { 
        id: '45', 
        nome: 'Kit Geléia de Banho de Melância', 
        preco: 59.90, 
        precoOriginal: 59.90, 
        destaque: false, 
        img: 'img/45.png', 
        grama: '2 unidades', 
        categoria: 'KIT', 
        statusCampanha: '', 
        descricao: ` Este kit combina a delicadeza da geleia de banho com a suavidade do sabonete artesanal, criando uma experiência única, perfumada e relaxante.` },          

    { 
        id: '46', 
        nome: 'Kit Sabonete massageador - 3 unidades', 
        preco: 60.00, 
        precoOriginal: 60.00, 
        destaque: false, 
        img: 'img/46.png', 
        grama: '130g cada unidade', 
        categoria: 'KIT', 
        statusCampanha: '', 
        descricao: `🍃 Kit Sabonetes Massageadores Frutais
        Um kit especial com sabonetes artesanais massageadores de melancia, maracujá e maçã verde, que unem limpeza suave e estímulo da circulação durante o banho.

        ✨ Benefícios:
        * Proporciona leve esfoliação e efeito relaxante
        * Ajuda a ativar a circulação com a massagem
        * Limpa sem ressecar, deixando a pele macia
        * Aromas frutais refrescantes e energizantes
        * Ideal para transformar o banho em um momento de autocuidado

        💚 Pele renovada, perfumada e com sensação de bem-estar.`},*/

    { 
        id: '47', 
        nome: 'Kit Calmaria - 3 unidades', 
        preco: 64.90, 
        precoOriginal: 64.90, 
        destaque: false, 
        img: 'img/47.png', 
        grama: '3 unidades', 
        categoria: 'KIT', 
        statusCampanha: '', 
        descricao: `O Kit Calmaria contém três sabonetes artesanais de Camomila, Calêndula e Lavanda Francesa, que promovem limpeza suave, hidratação e uma deliciosa sensação de tranquilidade.

        ✨ Benefícios:
        • Ação calmante e relaxante
        • Hidratação e cuidado delicado com a pele
        • Aroma suave e terapêutico
        • Produto artesanal e natural
        • Ótima opção para presente`},

    { 
        id: '48', 
        nome: 'Kit Trio Energético - 3 unidades', 
        preco: 71.90, 
        precoOriginal: 71.90, 
        destaque: false, 
        img: 'img/48.png', 
        grama: '3 unidades', 
        categoria: 'KIT', 
        statusCampanha: '', 
        descricao: `✨ Trio Energético – Sais de Banho Naturais (Anil, Arruda e Alecrim)

        Kit especial para um banho revigorante e de boas energias. Com sais grossos e ativos naturais, promove limpeza energética, relaxamento e sensação de bem-estar, além de ajudar a renovar as vibrações e aliviar o cansaço do dia a dia.

        🌿 Benefícios:
        • Auxilia na purificação e proteção energética
        • Proporciona relaxamento físico e mental
        • Estimula o equilíbrio e a vitalidade
        • Deixa a pele suave e levemente perfumada

        Perfeito para transformar o seu banho em um ritual de autocuidado e renovação. 💚` },

    { 
        id: '49', 
        nome: 'Kit SPA Relaxante', 
        preco: 62.00, 
        precoOriginal: 62.00, 
        destaque: false, 
        img: 'img/49.png', 
        grama: '3 unidades', 
        categoria: 'KIT', 
        statusCampanha: '', 
        descricao: `O kit contém:
        •	Escalda-pés de camomila – ajuda a aliviar o cansaço e promove relaxamento profundo
        •	Sabonete artesanal de maracujá azedo – refrescante e revigorante para a pele
        •	Sabonete artesanal de camomila – acalma, hidrata e é ideal para peles sensíveis

    💛 Benefícios:
        •	Sensação de bem-estar e tranquilidade
        •	Hidratação e cuidado natural com a pele
        •	Aroma suave e relaxante
        •	Perfeito para presentear ou para momentos de autocuidado` },    

    /*{ 
        id: '50', 
        nome: 'Esferas Enfervescentes Artesanais ', 
        preco: 20.00, 
        precoOriginal: 20.00, 
        destaque: false, 
        img: 'img/50.png', 
        grama: '50g', 
        categoria: 'ESCALDA PÉS', 
        statusCampanha: '', 
        descricao: `Esferas Efervescentes Artesanais ✨

        Transforme o seu momento de autocuidado em uma experiência única!
        Nossas esferas efervescentes são feitas artesanalmente, com ingredientes selecionados que proporcionam relaxamento, hidratação e um toque especial de bem-estar.

        Ao entrar em contato com a água, elas liberam uma deliciosa fragrância e criam uma espuma suave, ajudando a aliviar o estresse do dia a dia e deixando a pele macia e perfumada.

        🌿 Benefícios:
        • Relaxamento e sensação de spa em casa
        • Hidratação da pele
        • Aromas suaves e agradáveis
        • Produto artesanal, feito com carinho

        💧 Modo de uso:
        Coloque a esfera em uma bacia ou banheira com água morna e aproveite o momento!` }, */

    { 
        id: '51', 
        nome: 'Esfoliante Corporal Chocolate Belga ✨🍫', 
        preco: 59.00, 
        precoOriginal: 59.00, 
        destaque: false, 
        img: 'img/51.png', 
        grama: '150g', 
        categoria: 'RELAXANTE', 
        statusCampanha: '', 
        descricao: `🍫✨ Esfoliante Corporal Chocolate Belga ✨🍫

        Transforme o seu banho em um verdadeiro ritual de cuidado e prazer!
        O nosso esfoliante corporal de chocolate belga foi desenvolvido para proporcionar uma experiência sensorial única, combinando esfoliação eficaz com hidratação intensa.

        Sua fórmula ajuda a remover as células mortas, deixando a pele mais macia, renovada e com um toque aveludado, enquanto o aroma irresistível de chocolate proporciona relaxamento e bem-estar.

        🌿 Benefícios:
        • Esfoliação suave e eficiente
        • Pele mais macia e hidratada
        • Estimula a renovação celular
        • Aroma delicioso e envolvente de chocolate

        💆‍♀️ Modo de uso:
        Aplique sobre a pele úmida, massageando com movimentos circulares. Enxágue em seguida. Use de 2 a 3 vezes por semana.

        💖 Indicado para:
        Todos os tipos de pele.` },

    { 
        id: '52', 
        nome: 'Sabonete Massageador Chocolate Belga ✨🍫', 
        preco: 29.00, 
        precoOriginal: 29.00, 
        destaque: false, 
        img: 'img/52.png', 
        grama: '130g', 
        categoria: 'MASSAGEADOR', 
        statusCampanha: '', 
        descricao: `🍫✨ Sabonete Massageador Chocolate Belga ✨🍫

        Transforme o seu banho em um momento de puro cuidado e relaxamento!
        O sabonete massageador de chocolate belga combina limpeza suave com uma deliciosa experiência sensorial, deixando a pele macia, hidratada e levemente perfumada.

        Seu formato com esferas massageadoras estimula a circulação, proporcionando uma sensação relaxante durante o uso, enquanto o aroma envolvente de chocolate traz conforto e bem-estar.

        🌿 Benefícios:
        • Limpeza suave sem ressecar a pele
        • Hidratação e toque aveludado
        • Estimula a circulação com efeito massageador
        • Aroma irresistível de chocolate

        💆‍♀️ Modo de uso:
        Aplique diretamente sobre a pele molhada, massageando com movimentos circulares. Enxágue em seguida.

        💖 Indicado para:
        Todos os tipos de pele.` },


];