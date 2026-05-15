// config.js

// Lista de Revendedoras para fácil alteração
const revendedoras = [
    { codigo: 'JUELISIA2026', nome: 'Juelisia Almeida', whatsapp: '5511999999999' },
    { codigo: 'MICHELE', nome: 'Michele Santo', whatsapp: '5511971128269' },
    { codigo: 'LUCIA2026', nome: 'Lucia Inês de Souza', whatsapp: '5511966255477' },
    { codigo: 'GEOVANA2026', nome: 'Geovana Lima', whatsapp: '5511942398376' },
    { codigo: 'GISLENE2026', nome: 'Gislene Borges', whatsapp: '5511961875882' },
    { codigo: 'THAYNA2026', nome: 'Thayna Souza', whatsapp: '5511952344228' }
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778817600000/_vtA8P1otqgBdlOWe5rO5Q/xRKC-V9NVX6x4zVKmHCwengMxOP5oX6q5hDmXjAy9IjbUl0MVA0GRUS8zSXgCm6YoV0vwNKr0rQU0a_jyx3i-IM8zlfsjh_OBxueuwmKuGUL54kwfs2ejv5ai2HoxgE5vpglcDD6HWS4tkuU7bDTZQ/0WeTP_8tdjUCH4ubGScJYt9n4K7zoYKyWs6WpZn_qow',
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778817600000/P0j7yB3dZ3cfRL_x_OuvsA/LA9xOwX5K1QDhEduKJt4i14e6mNQFssVOgxNpJv2OXOhgdk66lYGdYg4QvEI8Yj4LSnpSb1dKLVG_2MxxrYgZUasAoNEO6MlWwJlDoRa2x2GaQFFOxqrP84ZNfQo2X_JzLbH3-3uK41qGPeVQG7LMg/4w0bPWSQsl_1FNukJPDSYF7_8DYkgleF_6OBmi1VWKo',
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778817600000/X4ln2g_VCMQMxGptpMsH_g/hL0pY3WZoFvA9Bynw0FRpGTjR6wtlfmoEwoqxgm1410YItQ5fwexNcD78uTk_VVNftXoBHhnZzf0b1nHixvAoHxToqtJ_sw3p9PG4KoVrZhCAGQLvjcSg9jyyaetJNYQ8x8EBEDzywKWNMMRQnl_HQ/pnpGn1KZ5qHRWa8NJwD0EPFSLyL2klAcdZ3ukNoByOk',
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/tFoxolr6LBspXLXkLOqm7g/DR5IKXb3GhX4F4dspf09M7Z4xjGAfNzrckxNYqyui85NqsJfprfANXeWaEFfKjkBzaTA_ctDlqA5UwbFhOINX8Wkzr3QsKrWHFHkcuhNs2_AeHAfFwVHMBpA2SswA63coV_MQOP8R9HiXf4rt_Mwmg/GmaeJ1Y943lAJpUhvBqKKcV5QDbGTy1HSu85DDAmDVk',
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
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: true,
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/If_g7Nde3RKfFsiCXZLV8w/u3A4mBXzVkcfj-8IUFxoQv6qlvOGYJ-E1fFLEJ_SzYizmA1PcQxhAgYw_0opxpieSqqNh41IFBOKzEDxSWG2c8b7dHmKAcmnGACTGjYb1SzCo2WeGgPRExvqQ98eH_6U_Xa83Pmg24W7q_d-CBakLQ/HP1aSfcoTVRs4QCNQR-O7kYEJfJf35r1eUAdQqLtjjU',
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/apB4bOk44cSE-HgAMRtQUw/uMwcmDtksSX9uGD33KgA9tX_hlQ9nfgJP_Q8Uy1HXYPMEX1N0ujPSo5aKhNfkFRLJWbfr8XZukCLHmoW4P1Y1TGCqUhF6nBnr04ZGm8j_mNlz1gkVmrFAX07knrusbA07XWh5fgWUwKwdV9r9H546Q/HhXyt166mUPmtbt1FYLMNDR85X1pX5_YB7f0NPj6NM4',
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/w7X4CxsPvHyl9B04JjUzkA/MDDXY4i3XV63tjJSZxdOLhD5Yfx9RrJFoQQsbJTaEn0V_KaJWvvzh_3MBqeO2evfY4Cli0om3bD-zloNluLxLRd7p_iMLDD1d3amhF-8kqA0rdlYeuw-xM8GKl88ZIt7tx5MsxtR74ShAm7yvspiYw/sCrlV1f38EtegiSblPYVKV7KXVbey-GyoyNA2_Ke1Jk',
        grama: '110g',
        categoria: 'MASSAGEADOR',
        statusCampanha: '',
        descricao: `Sabonete Artesanal Amazônia com Bucha Vegetal
    Sabonete natural que proporciona limpeza profunda e esfoliação suave em um só produto. Possui bucha vegetal incorporada, que ajuda na remoção de células mortas, estimula a circulação e deixa a pele macia, renovada e revitalizada.
    Com aroma refrescante e fórmula hidratante, é ideal para transformar o banho em um momento prático de cuidado e bem-estar diário. 🌿` },

    {
        id: '09',
        nome: 'Sabonete de Capim Limão',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/_IjniyC4GSsjrerLR2qqJg/ok0zpI5RSGhFSL17J9ijThmvnNX0_2jfb1QF9jwZHb5iHVot4YLFdicSM5Z9icYRg5zsN0HezpcmzqZdXatgBar-jaj36rh4CGIAlqLXyDoEc-As7QK9WFkanz6gKJBx8GqNTcoRAp3LPwi9TFTykQ/R8NwXPrydbHMNsF4Q3d3HcYrA_MR_V4PK0VawzFOXJI',
        grama: '100g',
        categoria: 'RELAXANTE',
        statusCampanha: '',
        descricao: `Poderoso calmante natural, proporciona ações antissépticas e relaxantes. Além do cheirinho maravilhoso e fresco. Seu aroma delicado proporciona sensação de frescor duradoura no corpo. O extrato de Aloe Vera presente no sabonete possui propriedades antioxidantes, adstringentes e antissépticas, além de proporcionar muita hidratação.` },


    {
        id: '10',
        nome: 'Sabonete de Carvão Ativado - Controle da oleosidade',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/5-PpVu7oc87KkxtsD0Ou7Q/i2akrQ2ughqS2kX02OpYte3ZvZzqKQToMkRMgNxVwAXADA7LxoVJQYc4zauCftxZHy4TgdNq61e1938y7EUN7BV8t0PWmIc0ThfUVWnKHN82WK_ckFHAahjEcwlqtuWjBQ67LwD3UdftQJLOhMmB2Q/1LR9BCPbNcIk4TjJrHXop57iKPX5mYsJL6NhUxTrzdI',
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/IXsuAyY0Lwrxbinj1eNPgA/p0ygm-_hqXvMHaIw8IeuD33RAMpUYsvCpTK2DQ_2oUl4YTcu_a3hy8zwrBtgejWsV-0oiOIqZjcuHpTHpLoBvPePHdTlBrQMItbPa8vP8i2D0vK70vc6EvQFjC1blIHQnDkRg4VQi_6phlNVzk9gNg/CUrVaS5JAXt1SjFaWNFSUxCzQJsmbTgFT7cNp7iIeqQ',
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
        destaque: false,
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/Zd-1W-ks-d-83RMjm6bGLw/Cqce8pSyqlgum9L6RDoBg5OA6W2tBeh67yqRHqrr7UItMwKgDeZtU0MU1XGztnjCkZ5fEN10KZK4c7vERt71OwVU3lC8C8ylMfHRNVFEINJe86gLzMLlMX08d0P03MrePg00RhC7EcTyo_Co7xso4w/T8FKwmYjDrmiVUAAkXnv4InejD0Tipc2u0b42s6T5Nw',
        grama: '100g',
        categoria: 'ENERGIZANTE',
        statusCampanha: '',
        descricao: `Este sabonete exclusivo combina os benefícios revitalizantes da ametista com a fragrância irresistível da amora, proporcionando uma experiência de banho única e envolvente.
        Ideal para uso diário no banho, nosso Sabonete de Ametista é perfeito para todos os tipos de pele. Utilize-o para limpar e energizar seu corpo, deixando sua pele suave, perfumada e revigorada.` },

    {
        id: '13',
        nome: 'Sabonete de Melancia',
        preco: 18.50,
        precoOriginal: 18.50,
        destaque: false,
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/N7yPQeTUkHTnDcMOBSlmnw/mZqRDWoQAVFDFf5FbSey1k1iQayaBB4PBNbXwhsy5h2ygBS1G2lZZVEdBGTxeA5SqCTnF1GHYKaOYTv0XabgouO9w7bciO_IMcIXYsWxkucl7U733QFZUR0yu10GW-gqeRD9hoSihCk8PU_5SscjAQ/A8wXVnZjzzvPs1LangOfsLCaIAIE6o1AMpvg1Sypo_o',
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/2ufN-fGZjmiJRscrqmi3qw/BzRihcqLVAqRx2RM2saScQ4Petv_RmSfjkQeATBIrGM5xMRv39WKRyCSA_2wAiiuLESeA7Wyqfifg44m7s637cip8OkNid31B4tdHXdhF14dRjzl76d7GgGCmecwJtoDoRrPL9VL-b6Iu1JCjRgjqA/Y3UZ5Bgv2mKUaNuoC1hfwmGX7rfuqIxFnBNFqM-2S7c',
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
         precoOriginal: 18.50, destaque: false, img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/a_KPMHSOrGpnSQ2o9r3P4A/ZT1ygBa6vTGOHBx31h-7dvOlkjB8XHa0jlX0qAeaE8rNeDEEUwjvJtFW8SLT6IJX6IDxjs0vkEhPCJfyHIqPo69ME1oEbckiPIE61L_iIA1Z-et1L1Ll1ebfpI-Dj5ES6-yVkqmKWPg0WgAh0KRdLw/e45QaNV0dRXE9btZaL0MoIO399a317DlFEMWtly34yY', grama: '100g', categoria: 'REFRESCA/HIDRATA', statusCampanha: '', descricao: `Descubra o frescor do verão com nosso Sabonete de
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/pb14Us57S8cVeX32dUpbyw/kbDvgFZkpOFtRgvw856SVVLAGaoxTOWV98-L5YkUWR7xFJrKuH1FMOntLn1lRbuJnazo0sByApd8cwod5p1_lahAqpOBLaYZuIVB_dWRsjA5xrJvNClpE6OKVIrNA1bUYtFweaZDZvlBH9bzYH9a3A/Khrf11nN6BbDzFgElwW7Hwm4EQyFoPNP4_ChzebC9O4', 
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
        preco: 18.50, 
        precoOriginal: 18.50, 
        destaque: true, 
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/0t6KIaIy_mcI_HCZiVao_g/JlhKMwrO2bBPnDsnMbmswl13SuA1THtSelmBtH34f7ewv5FOf8LTjIjbjd923gL-181CHuj6fTpqHj8iRi2kT5UpfsHjjIxpYvu0h2jtaYpeNcJuTECIQD8oIYa145XyupqfQkRaUXh1BJw_6udBmA/dzxUvSOr3e8Djfex82TypKNhyCDA00Q0TvwaSDOQltg', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/rLVSni9mV30QWc-MSMemVg/Uc6Gk0rNjjvSk8-210uCl5lngOHbw71R6Ge_By-iO9T3LQ_6a-Fr3p_jx9Sipe6lPqFd6nwDsoHT40vDblos4_v8dSpEsJp0PL96g0Ca3QLYN9tfOgQ_XgylDmdvAKR3ESNutV6QwQzivtm8MpoAyA/-KzJeJv3_0aNA-9KPRE85fbRmTu4t4jFoUfKxK-1J1I', 
        grama: '100g', 
        categoria: 'CLAREADOR', 
        statusCampanha: '', 
        descricao: `A dolomita oferece um poder clareador e ameniza linhas de expressão, cicatrizes, olheiras, rugas e manchas de qualquer parte do corpo. Reduz o processo inflamatório em casos de acnes e ameniza os cravos.O sabonete de dolomita é indicado para a limpeza e esfoliação suave da pele, ajudando a manter a pele limpa, hidratada e com uma aparência saudável. Ideal para quem deseja um produto artesanal e eficaz para o cuidado diário da pele.` },

    { 
        id: '19', 
        nome: 'Sabonete de Sal Grosso e Alecrim - Limpeza Energética', 
        preco: 18.50, 
        precoOriginal: 18.50, 
        destaque: false, img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/qCw23lfUy7G-YqKn6oNaow/1FCgpjazod42bWpkTtZVBnaE5izYlKKvEHqS5X72IXzRz3oec0IZrFDUjdmO6HHWDDhJXrYP4OTXu6ojE7GIwTeTNATgII2leBMycmTF9QX3ku-jbML5SQKjtfSPZ5kAZPHECffqyPMOVqrLlisZlQ/Fqhv61r7Rq0lh7DIv5Jf_71KJjR-Fy8bB4xVdXcB-us', 
        grama: '100g', 
        categoria: 'ENERGIZANTE', 
        statusCampanha: '', 
        descricao: `Perfeito para renovar as energias e cuidar da pele, o sabonete de sal grosso e alecrim promove uma limpeza profunda e revitalizante. O sal grosso auxilia na esfoliação suave, removendo impurezas e células mortas, enquanto o alecrim possui propriedades estimulantes e refrescantes.
        Deixa a pele mais macia, purificada e com uma sensação única de frescor e bem-estar. Ideal para incluir no seu momento de autocuidado e equilíbrio.                                                                                                                        Indicado para uso de 2 a 3 vezes por semana, ajudando a renovar a pele e proporcionar bem-estar e frescor. 🌿` },

    { 
        id: '20', 
        nome: 'Sabonete de Sal grosso e Arruda', 
        preco: 18.50, 
        precoOriginal: 18.50, 
        destaque: true, 
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/Nod0kbKL7CwtvfZMJx9B4g/aRfmKQX0HCeT2HWq6CYfYPMK7J_GNhUCLf22mTi_rKsuYYfEyL2cl8Ln5cR-EFY1iyMRNv2zmhEGIgM6K2w21MMQxF9Q4VkaeNJ28gw1ckNaDu4NmxohYAztakhHi0KDZWpp991iCnjap5TTJRQQFg/UQyZ6TlkP-_kOnPL7g3cOnlS8V4ESpiCGquXTSv-hEA', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/eVCPlxde0YfRZZ4edBTx7A/pLP6KcrLopucZa2OjoVv1keepT87zJcNiEzi2H6CDAvJZAi2GxJbLzzcqd6Pjp_JPF-3D2MnyKkN0U_Vu5vfQ0BqaUc06zllx8Lym0CU8Ol9wQfTvj9oM1_DaTQUyCnnNjIRiOX8QlHLd5gq8U0XAQ/T9h_1tjPBwvyHDBKWkyEDEIwNB6TQMsQUKrssdFNlSc', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/Cvlc2Je4D4M5v1Xh7HJdgA/DnAOnZTZ57HK_jOlCKhte3UXWh0UtJiyLFGdE-OpbKWmoF62UiFJYqUhRZeuYBM2DYt85UvD9b16PRbas5kQ16tn3Le03FSPdetOwu-0H7JG6rByTyXdS91F8aXGdvfEALSWf2PIReRyPvIgDlwM4w/Cw_XXV2VyMRNvFIf6I-xsASgUzBaGegj8e6t1d3tR-M', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/lGjxaUuX62F0KPxawrcDNA/MbcOmpcRD-MOFZpyR5eHaSttx3OCNdmgIdqCkpNr8A_Gwg_X0udmlE2Ns3vbgjXoelHBrFbPEQBsNDw9cc6bj3O4LjcQU-cvvY3vYk8Kp-02Jjg5rRvwFiwJlDucBZnnAQ3wcmVUVq5Sk_T00O5bwg/Ez0zZaKWf37saojccMP3Rex4v6FVEvoJ_sL-yi2DDkE', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/zbjvaWWkfMr6nO4NNXBSAg/5NXQPIYyGGwopn2Yab8CAXCh5UVb167UrwAM_2avLNrDElloC_uVGAxmRCBM5eS5AdeoeOrXR01eVKXN-b9B-8QxXKb4hSHkVSM5WmUfVU9Z1TnVib9eqVORn7R1-3rl-fdKDtPHpypkjqXfv30htw/qEpQyPWIThdLuY34kVtfmuoMdVUV84e6YvW_vTvU7Uk', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/j8trld6NL-wj2ufinvS4Cg/rb-9sRUtx6Qk-yidhSVUoA8Z_C0PqU_c3WnrK0P_newZXyOUxn02e6WN0oa8hDZLo0UNNiFF7wB2zZxP9amUh3eh-xbrJrnOqfj1rW0oetLWBdZnPCWguDEu0E1f9jCswuzhcXgaDywWx_f2l9llyg/Unqnw4HsLjjIoahWIZbIBK7XlA7M3My9cnEpSzmfBzQ', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/FhyKqBPuo5pkqEokf4yB_Q/PKX7hXZrwLzETKr4y1wyHmbdBW-exMoWD8JsWwB9vd9dOe373_k4zvL28fYnqsqXor1vDoOJOUNbu2yyjKIglE_2l_qdfS-2y4mOqfXsnHLI0ZuRba9zDE7lFOVfM_XCoF2wgd2B2_p8JgD40v4xZA/OW0Ekrfel0M9mRNfFjs1IkF9rlxVjGGX3HPs6VbyOU0', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/44462a3PGyfp3bRftrcFKA/xVq7vv7LtoqZCqSukVRsnhTUR73AibMnEPh-4UyHgBwOHC2RVx6XxcBz036nGmFUVxawtGI2ju88I5pHd9L72YWKnlYI0gJhupZwZguk2JDDKnlhqKsAT0_9dIf8zf7_DZcMC5ENwWJYv7e9_yR8ew/cwdWTKCxMRFNZCQF0R0Zf3EZrRFWXf07ewAqfU-NLs4', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/bd7wRf4nTH10eQMpJdiq4w/vQCC8QiLxkej9gwSprFRC6rzdr7Ie57Kd8OcLCifhmDICSPA_RONnSOGQNTisF9-jo1cupco5XUdtqxmshDJm7zIlkmYHqwcIBNOT-Y_S3hQXa-d6_o6yFDwsP4v_xiDt-k6c8ndX8D1B1hewJ36SA/7mTRN7OfRgA-AWDgQTlLAF1B0wwJPzYno5w5eIwagLc', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/WKSqcEWs9yVSk94HXAs_eg/-f3oUkifZ55PYqIeHQYRNBUMsbToMGgZ87RKFiaVUHrv8URAafYCdxLe3UoxAphGcO1QLXnWIJKI6dJg2o-K0GlU9n6C-Ohma_tnw2rOp4oaBkn8NMp78KAhukc5_EmZYNmYRw-ebXClpeoZScr0dQ/tNhfqsLp_dlkSDnDcK9ARO8OiWJTpe7ZexGXRSq6zd8', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/L21NJt7hfr3D2i6evlDifw/h1X385w7yABgyMKwLqJXGK-sPCLrDRx3l-iWAobGmlVlkn2ybUqGPUXdv3C0dB5oVVIGZz6_hiCPvYvcIkHJJyVC52AMgjz_kG5XIpOJjwvAtqsyiE3kDDvIj5eP9qa2pBwveIrlgiBO2B54WCzfpw/FCoi1Avx06gL6XqjsUrJQjOasrn18Y1AU3ijykz79h0', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/CSF-8ixejS03LdZwjFPxDA/v-a5u6Uys8wTqC-XOGB0Z6KbLUEf6K2UziMxFgVFq3UjRH9y452ZvZ8mZpAOzCYTJ8ePePyFhtOXvqcXQ5SUlMi4MmBEbM3ajf1e43sFWUvAs8OcSxg_WsOXvhkW65gM3Y7c6cR_fHFGZUHGcXnvzg/lPNKIt53O1GMmj91lpx71IeUjJ8lMQRi5-diCz_ZV0c', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/cobxkCAMsACjxHcErjn8YQ/I1dxN3v7K6igfWRCtSK4Wr2OrirV9dNWC4opqEgV9qIoCQV2HXeBpKQTEqEBdvVp6J5W0gSaS9wDS8EJFwZcOWIDGOa0QEoatshZcvCk7z_EWOI4JyjNP4Cc0Un8o2K5Gz8qqxm6yq-sW5MSW6jeOQ/oPLUlJHiq7XeYOHvUvZDSUXKdEkXcpQqifxN9i3LczE', 
        grama: '250ml', 
        categoria: 'GELEIA DE BANHO', 
        statusCampanha: 'PROMOÇÃO', 
        descricao: `Transforme seu banho em um momento de cuidado e prazer! Nossa Geléia de banho possui uma textura única, que limpa suavemente a pele enquanto proporciona uma sensação refrescante e hidratante.
        Enriquecida com ingredientes selecionados, ela forma uma espuma delicada que deixa a pele macia, perfumada e revitalizada. Ideal para todos os tipos de pele, trazendo leveza e um toque especial à sua rotina de autocuidado.` },

    { 
        id: '33', 
        nome: 'Sabonete Massageador de Manga', 
        preco: 22.00, 
        precoOriginal: 22.00, 
        destaque: true, 
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/HC9xSqRRpoewB-fBPvP2AA/BGnDsjUCy2s7CsRqNI_OwgRHYaV190BU-jC-QbWFaCdIaJAZi_yp-Qn9tFsFaU7ZTt-0QMsswG0mFJ1PGrEFAhHKE1kiY8j6b__vq-_fjcgefoiZ3CbuScOWjqUeXpcGgMJRqXBUOJwASHD2TEy3Bg/Pvd3Fh_bKp9N10DlOfiY9g1TEGI2ZplcPX8p0bF2eEE', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/WOysQp7NswFoTFG9CqRUXw/7x3D_yoQs-kBfXxWn5OoIlCQqBXoN5Gq1EC9kpwqqnRp-NKIaEpIxLfdc5Jc4leALjQJovDHjf6VMafWelEEsqsZd3CsMUmzkINN2zppmtjFf-_iSSchdqbIJf5Rb48OV7Rw0SsZiOOmwSYmkgYTfw/K4eJBpwNK4dvU10aSbf22T9bEDra2V02OKtjvljRY_M', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/vmSP5q9tydOVzyg3AgShNQ/rzk0tbknBGUcS_cJJxq0Nj0n4MmEgXlJ-a0DO0Rj7HhHOW1wdMsP9zYgOpnMx0mUG3Vy7wejjYYBtOfWzvDxGTfoI1zIb4YH3KlaI1yLC-2pcYikiKedlU8JWgDInp_9HbK8gpAs3w1WkRO9Y39oHw/bRcCxEWIU8JJCyQPuoSgyApX9uIb5kvMtMiiAfvWJDI', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/u5bUiOtXi800xI3cpkvvBw/esuyEMMtiXfCFPj0_-zfzqepqxfqTq94sCJqjRP8PR68wK8LR1AfYM2Nn1H2pE21I9HpCsEgW4DYWChp7jhlRbbhRTq7KVDws8vWUWyE_tpJNE0EOKcgYYHnXob6M2XXjLOtvf7e-SdMew33EJwvNQ/L56NEtD5BPZBXH5X9nKFjGr1NxYiKfvdKsNwEXvN7dg', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/FG_47C6-CRinzCh7E82qwg/q6tHnCMazr3DJWjRdTI19zQk2w7-JzL4-D69_eUXQHrCixdX_0Y0aHd6tjEjOP9oti5kx3hefPb_stPynpcN1gnS76G2yGmagtewEqSjTBvDoZ29IeCDeqjxTAx_mNgIDYy2OA5yBgnNl0zX0NCoZA/C4bTcZtcF0M2WCuDcsvwU27ZLQbApIBDlpIkLX2aEVY', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/W3L6lUcBfHxTUOpD0x4fRg/G48n1M-5bix82Drd6E3bNqKz3IJLglgmsfOvOfC_s_DQ-xWZ5LT6DB3DgC1F8mTQ_pxyaCA9qZtw02cXgXdf7RdxwAEX7H5Ti2W7zV0oU5wzp1J4HrRqUJY0LA4dqVQVh39YArxCzvWycBNabfz3EA/oDSrHF8piKOX0K_8ewCLnyPczCaEAX0uJLJ83g3DvHc', 
        grama: '130g', 
        categoria: 'MASSAGEADOR', 
        statusCampanha: '', 
        descricao: `Nosso sabonete massageador de maçã verde é produzido com base glicerinada de alta qualidade, trazendo um aroma frutal fresco e levemente adocicado. Seu formato massageador proporciona uma experiência única no banho, estimulando a circulação enquanto limpa e cuida da pele.
        Enriquecido com extratos naturais, promove uma limpeza suave, hidratação profunda e ação revitalizante, deixando a pele macia, perfumada e com sensação refrescante. Ideal para transformar o banho em um momento relaxante e energizante ao mesmo tempo` },


    { 
        id: '39', 
        nome: 'Escalda pés de Eucalipto e alecrim', 
        preco: 20.00, 
        precoOriginal: 20.00, 
        destaque: false, 
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/V6aicDmpysJvUpOUsiq1FQ/vD_EPu4z1-VYRK2UWhsL--pEdTB4KaVF5l5DnpoMufRh1UC_Rx_71ekKPcLXhfs1pKCbiVCq1Ygp6DV1dPBR6TqnKWog05r27rBiJRtdLZqLu9YVM45oUQoiU79j1oeYTfEoUwTWhUmJKJZVkuTj9w/-GjHMDNUd76Z4kFjO_C0byzqh2Esk-xPxgjvfufGoSc', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/5u9SFiH7JPsYtOVvP52VRg/VxeIcIVZEVDNCyVD622shkhg57qSHhOfKl6kDfx4g5E4rENUNmOnYCHI1k26MRQM1Mx1gETvW5hIp1SGi5GpFehLqh9hOuBCIr7D-FuutHxwU_H6GpS1mA7a8zFRPMxCtHPVfbaIRIDd31kQe6CGpA/oHtZ1Cn10T0I9fAgP20LMuQV1u54AMl0tGuta5b4Hro', 
        grama: '100g', 
        categoria: 'ESCALDA PÉS', 
        statusCampanha: '', 
        descricao: `✨ Escalda-Pés de Camomila – Calmante e Relaxante  Proporcione um momento de cuidado e bem-estar com o escalda-pés de camomila. Enriquecido com sal grosso e notas suaves de lavanda, ele ajuda a aliviar o cansaço dos pés, promove relaxamento profundo e deixa uma sensação deliciosa de leveza e conforto após um dia intenso. Ideal para seu ritual de spa em casa. 🌿💛` },

    { 
        id: '41', 
        nome: 'Kit Geléia de Banho de Manga', 
        preco: 59.90, 
        precoOriginal: 59.90, 
        destaque: false, 
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/Nb3Q59HPZ2Ve5J1cTvrjUA/MV3f3Es6avh2p3bhvRZC4rQwKx5IC75W9vJIMPM-7F-BTT5bqT6_0tmcB6OZC_9dqR3nmGIU7h5OSLTIYMgM325skCRkdrwkTvmNGQODWP3b-3nR510NfJismEKU9wFz0J19U8oUnlsePFlzLm08NQ/AUt7-8QSeaABkR-npYa1DhpYUZY9oc3p_4IwINZE1uI', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/PIfahSNMbcquuSHKoINt2g/rujoOpJWr7nWa_slB66jQdHS8FAs0YoEr8aF884KTgM7h89HKcNuMj8jFYmFn3fdVp67ArhmMHkQNFWMZyGGttINU8agARTBwJvwpm1xp3Eb5VBjIZsbmXyag2kYlfSHoTTynqBLNnr4-mjpBfpvEQ/vDF4zrtD3u8gVXLoi894l4zNp-6TZIo6b4Bqm0G_dqQ', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/oPHTG80jeXkvKNULkhUOWQ/uTUc-ZSP-t-z71Nk-yp0DXljOTgTvtwnRvolx-5FJN6JQ7_Gngfk83UP1J3cABcUaWEJSegd6o5tptlhII1n4LpMWoI2WPc1H_SOuavAYNx6Hecyjb55Bfk7zyRxYavAapeyA9xT6XgIVIOKD5wawQ/zK7MOE-ifOHh-Uy3N7C49KDvD6ArZd97zQ01w8jzjC4', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/CGMWSfGkAbdoyv4KAiu6Ig/7dx1vYCkeqbIMe-VlMbVnDmpwqKh-BiuJpeyW4sX0f5NaCoD8r1GuNk1U1z9FW3xrLR63S1tJUpekVcu2tJsg02oYUyqZ7-srfMlSglcIVqh1-auiZ5eNoeN_mVXmx8JLYi66TLskUt9Hi9uxlm8fw/25qAuV4DtIioitDX4LC29MEptbuN6w1FGl4OcyLTHfQ', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/ReZ2iepLr7RaZuAicqJ0Ww/wmLEGe0Q05QQabe9cY3UlYyOCXwlYrt5I7nl79r9YFgXLGcMfITrd_VRoWi_t4imXchp10p9Hld7E39ejzYMW_A-g4bGy--4gNZeYj3evrjjB8IrY4BUw9DKH-Rk-gVHuN-BdPFBHB8CICxgsJT-aQ/xUvVUSxTbrwzdQfQdIDKbaMOF95qyz9vzA5FgFaKefA', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/7fit8enu2Ia3_gtlOIpXdA/UbIffI1ZJ5nr9Q4zvpzmMYR9mV4dsW8Nze_KltmyHbj676OAUTW6d36fYuMkIjinm-ipsZ5u41Fx9TlP6k585nAB1mAhNGue_Wgyz9lEdlyOTbR_apJOL9A8Q_6kyxgLt84UXinPON0KB0NV5Nl9vg/nhjlo_tPRBOeC-vobv6maGP-oRU6GpnWl3G244GrsMo', 
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

        💚 Pele renovada, perfumada e com sensação de bem-estar.`},

    { 
        id: '47', 
        nome: 'Kit Calmaria - 3 unidades', 
        preco: 64.90, 
        precoOriginal: 64.90, 
        destaque: false, 
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/Lf1CIg0VM5HA_FwOQ3V3TQ/pdQtoW0JcOr1yG9NqXItg4hxfD2bPeONYaNQbpimwOp6u_HxYPFRL3Zdtt73izcLw9tGEBR8hghbO2-UEpDnAvsRHua_geSC-KYz0XneO9YUtUoz4_eVn9ASFDA_kz-shsrIRSet9oCxeibBJsqEWA/x1ipcJoYkKm3IbFGgx2bK5aOZT2zeYqIJVepgeKwrcY', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/4Lk0rdhRwYeamQTb3gHtpA/9wYG9DB6j1VnDrPrrk8tU2nNF9_zs4QbbCWIx6JLGRD23gbtPQzCYxyBWdC52oyuw4_8ype5l1Ir631udEAR3g8llPFMd9zS587VkO52tJ6Zm-QWGmDZ-8MmehCHEEn5I1boruiypAt2QfiF4PsuSg/hVKhVbUzxcnxxGex2rqSc2gbZfeqD0wqMq6HEU_DheQ', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/2EYonKqNm9ubKCPabnFRbg/J3GermElVZqZZboodvyzGIMrzUdMxMapnAhu3jL15Xa875-bm1Qy4MBgaP0JH3RGYdLMBpNusuozPbmMQVhAKPJf7iUOfKR8CFxLHEy5rKB6dwYVoWqPRJCV09-5XlwMqj8lUcWo4jOx0BFcSLsXHQ/whO-rvoGvBbveDmu_TgvrSmyELUlSDw9g9VDe4n4gfM', 
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

    { 
        id: '50', 
        nome: 'Esferas Enfervescentes Artesanais ', 
        preco: 20.00, 
        precoOriginal: 20.00, 
        destaque: false, 
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/1Yej7gecQcZJoNp1hYXcJg/s-T2BX79QGFSx25PhQh5p29dB4cP1hKDVPFT73daR_zdOLPsp-4u9QF8LiE79c1Lr5uzhnor-jllH4351_ZmR3_CVId4tdmIQknTjUtq6pdJCa_z--wCG59z2tUM2iFvu6NuD4V_9MtL66OgGPm5tQ/2xpcdI_wIRp79oQs4bQFaiuA6HUBwa9K6--SQRVsRdY', 
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
        Coloque a esfera em uma bacia ou banheira com água morna e aproveite o momento!` }, 

    { 
        id: '51', 
        nome: 'Esfoliante Corporal Chocolate Belga ✨🍫', 
        preco: 59.00, 
        precoOriginal: 59.00, 
        destaque: false, 
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/-hOhkw5WlN-iTGVU2d2OPw/RKhUe-n3bgPAqVf1Xo9shrQfKR7JTb2OwE3_OqmqlqzPlpfgEDSCGNdCvGphrG6pw8-7wTz9K4tivAjxL2FhiabXPbpLAozZ6Z9Q6JDHa-BGsxTMT-moGt6cDcMgJRJiupMdgZSMeWWucHo6aEez3g/ZUpYDOgAlkjfHXQsNIdaAwHujOKu14eS8d7wV9XbSQw', 
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
        img: 'https://v5.airtableusercontent.com/v3/u/53/53/1778803200000/8PgbeXSRsQX2yI2prZGxqQ/CH4dHho-cer6ZPfjQY_myAlC8SuprWBhesn2GxNbG6YSAWd4A6rv1aURZIE26isL_eOHY0QNCvLY_RasAPX8HUYjKh6cr_rQgu4HVJN7r4mvGtw5F2UNXV6Jkq-toHaUxp0TBGw2mFreGXFm_oQzDQ/NLgYPkdRleu9cAV8EXS_61U_JPtZVQoMJo8LXvp3WE8', 
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