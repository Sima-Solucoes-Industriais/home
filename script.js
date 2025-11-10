/* =========================================
   SIMA PORTFOLIO - JAVASCRIPT
   ========================================= */

// Dados dos projetos
const projects = [
    {
        id: 1,
        name: "Robô Autônomo de Desinfecção UVC",
        client: "UVtronic",
        description: "Diante do cenário pandêmico e da urgente necessidade de tornar ambientes seguros e livres de patógenos, a SIMA foi desafiada a criar uma solução de desinfecção que fosse não apenas eficaz, mas também autônoma. O projeto abrangeu todo o ciclo de vida do produto, desde o conceito inicial e prototipagem até a integração da tecnologia UVC com uma plataforma robótica Omron, comissionada para operar de forma remota e segura.",
        technologies: ["AMR", "Arduino", "UVC", "Inventor"],
        solution: [
            "Concepção do sistema UVC integrado a uma plataforma robótica Omron, com mobilidade guiada por sensores.",
            "Desenvolvimento de protótipos para validação da dose e penetração dos raios UVC em diferentes superfícies.",
            "Implementação de interfaces de operação remota, garantindo segurança do operador e isolamento do feixe UVC.",
            "Testes de ciclo de vida e certificação de componentes para operação contínua em ambientes críticos."
        ],
        results: [
            "Redução significativa da carga microbiana em múltiplos ambientes testados.",
            "Operação remota e autônoma sem necessidade de intervenção manual durante o ciclo de desinfecção.",
            "Conformidade com padrões de segurança para tecnologia UVC em espaços habitados."
        ]
    },
    {
        id: 2,
        name: "Linha de Cura Ultravioleta para Vasilhames P13",
        client: "Supergasbrás",
        description: "O processo convencional de pintura do cliente limitava a produtividade devido a longos tempos de cura, criando gargalos na linha. A meta era integrar uma cabine de cura ultravioleta de alta performance à infraestrutura existente.",
        technologies: ["UV LED", "CLP", "HMI", "Siemens", "Inventor"],
        solution: [
            "Engenharia e construção de cabine customizada com arrays de módulos UV micro-ondas de alta irradiância.",
            "Adaptação mecânica e elétrica para encaixe direto na linha de pintura atual, sem paradas prolongadas.",
            "Validação de resistência mecânica e aderência da tinta após cura."
        ],
        results: [
            "Eliminação do forno de cura e do tempo de espera tradicional.",
            "Cura imediata da tinta, garantindo resistência mecânica superior.",
            "Aumento de throughput na linha de pintura, sem comprometer qualidade."
        ]
    },
    {
        id: 3,
        name: "Dispositivos de Solda Ponto, Projeção e MIG/MAG",
        client: "Diversos (Automotivo, Siderúrgico e Metalmecânico)",
        description: "A SIMA desenvolveu e fabricou uma linha completa de dispositivos e ferramental de solda para máquinas estacionárias de solda a ponto e projeção, abrangendo desde o desenvolvimento do processo até a instalação em planta. O objetivo foi criar soluções robustas, precisas e adaptadas à realidade produtiva de cada cliente, integrando totalmente o ferramental às máquinas e sistemas de automação existentes.",
        technologies: ["Inventor", "CLP", "IHM", "Pneumática", "Servoacionamento", "FEA"],
        solution: [
            "Engenharia turn-key: desenvolvimento do processo, projeto mecânico, fabricação, montagem, testes e instalação final.",
            "Configurações personalizadas: dispositivos manuais, semiautomáticos ou automáticos, com ou sem sistema de set-up rápido.",
            "Versões estáticas ou móveis, com acionamento pneumático, servo-elétrico ou manual, conforme a aplicação e ciclo produtivo.",
            "Integração total com máquina de solda, incluindo lógica de funcionamento, sensores de presença e intertravamentos de segurança.",
            "Compatibilidade com sistemas periféricos, como alimentadores automáticos, extração de fumos e carrosséis giratórios."
        ],
        results: [
            "Precisão e repetibilidade na soldagem, reduzindo falhas e retrabalhos.",
            "Integração completa com sistemas automáticos, permitindo rastreabilidade e monitoramento em tempo real.",
            "Projetos modulares e escaláveis, adequados a lotes pequenos ou linhas de alta cadência.",
            "Redução de tempo de setup e maior disponibilidade da célula produtiva."
        ]
    },
    {
        id: 4,
        name: "Banheiro Público PNE",
        client: "Prefeitura de São Paulo",
        description: "Atendendo ao interesse da Prefeitura de São Paulo em modernizar a infraestrutura sanitária de praças e espaços públicos, nossa equipe foi convidada a desenvolver um banheiro público fixo, com pontos de água e esgoto integrados, que respeitasse as diretrizes de design urbano da cidade. O desafio principal era conciliar um visual contemporâneo e alinhado à identidade paulistana com requisitos de durabilidade, facilidade de manutenção e flexibilidade de instalação, mesmo em locais com espaços reduzidos.",
        technologies: ["Corte Laser", "Inventor", "Análise de Elementos Finitos (FEA)"],
        solution: [
            "Estrutura compacta e modular: projetada para otimizar o uso do espaço disponível, permitindo instalação rápida e padronizada em múltiplas localidades.",
            "Shaft técnico isolado: o acesso a instalações hidráulicas e sanitárias fica restrito a um shaft externo ao habitáculo interno, eliminando necessidade de intervenção dentro da área de uso e garantindo segurança e higiene.",
            "Materiais de alta performance: aço inoxidável e compósitos de alta resistência ao clima urbano, com tratamento anticorrosivo e superfície lisa, facilitando a limpeza e a conservação.",
            "Design ergonomicamente pensado: layout interno que prioriza circulação, acessibilidade universal (conforme NBR 9050) e conforto dos usuários, incluindo barras de apoio e assentos adaptados.",
            "Integração ao paisagismo: acabamento externo em painéis com cores neutras e texturas suaves, permitindo harmonização com mobiliário urbano existente e sinalização municipal."
        ],
        results: [
            "Implantação ágil em diversas praças-piloto, reduzindo o tempo de obra em até 30%.",
            "Manutenção simplificada: intervenções hidráulicas e elétricas realizadas sem abrir o habitáculo principal, diminuindo custos operacionais em 25%.",
            "Alto grau de satisfação dos munícipes, refletido em indicadores de uso e feedback positivo das Secretarias de Urbanismo e Patrimônio.",
            "Conformidade plena com as normas municipais de acessibilidade, segurança e estética, servindo de referência para futuras expansões do programa de sanitários públicos."
        ]
    },
    {
        id: 5,
        name: "Módulo de Cura UV LED",
        client: "ZF do Brasil",
        description: "O cliente identificou um processo produtivo estabelecido que apresentava limitações em eficiência e altos custos de manutenção. O desafio era incrementar a produtividade em curto prazo e ao mesmo tempo reduzir o tempo e o custo das paradas de manutenção, sem alterar significativamente a linha existente.",
        technologies: ["Corte Laser", "Inventor", "Solda TIG", "Programação CLP e HMI"],
        solution: [
            "Substituição da tecnologia de cura UV: implantamos um sistema de emissores baseado em tecnologia LED UV de alta performance, compatível com o perfil operacional da planta.",
            "Adequação de hardware e controle: atualizamos drivers e controles elétricos, garantindo compatibilidade com o novo sistema de LED e reduzindo picos de consumo.",
            "Integração modular: mantivemos a estrutura principal do equipamento, adicionando emissores de LED UV em módulos substituíveis, facilitando futuras atualizações e manutenções pontuais.",
            "Treinamento e manual de manutenção: oferecemos capacitação técnica à equipe de manutenção do cliente e preparamos documentação simplificada com procedimentos de diagnóstico rápido."
        ],
        results: [
            "Produtividade ampliada em 20%: o novo sistema de cura melhorou o ciclo operacional, acelerando inspeções e ajustes em linha.",
            "Redução de 15% no custo de manutenção: graças à maior vida útil dos emissores LEDs e à padronização dos módulos, diminuiu-se a frequência de troca de componentes.",
            "Tempo de manutenção 60% menor: a modularidade do sistema e os procedimentos otimizados permitiram intervenções mais rápidas, reduzindo janelas de parada e retrabalho."
        ]
    },
    {
        id: 6,
        name: "Tesoura Hidráulica para Corte de Tubos Metálicos",
        client: "Engsoil",
        description: "Com o objetivo de desenvolver uma solução de corte de sucata que fosse proprietária, a SIMA empreendeu o projeto completo de uma tesoura hidráulica. O desenvolvimento focou em criar um equipamento de alta capacidade, robusto e otimizado para a realidade das operações de processamento de tubos e sucatas metálicas.",
        technologies: ["Corte Laser", "Inventor", "Análise de Elementos Finitos (FEA)"],
        solution: [
            "Desenvolvimento completo do equipamento hidráulico com cilindros de alta força e lâminas reforçadas.",
            "Estrutura otimizada para fácil manutenção e troca de facas.",
            "Projeto de circuito hidráulico com válvulas de controle de fluxo de baixo ruído.",
            "Testes de resistência e segurança conforme normas NR-12."
        ],
        results: [
            "Corte seguro de sucata de tubos e perfis metálicos com alta performance.",
            "Processamento mais eficiente, reduzindo retrabalhos e tempo de parada.",
            "Maior vida útil das facas, otimizando custos de reposição."
        ]
    },
    {
        id: 7,
        name: "Sistema Compacto de Cura UV para Impressora Offset",
        client: "Astergraf",
        description: "A SIMA desenvolveu um sistema completo e compacto de cura ultravioleta (UV) para integração em uma impressora offset de alta velocidade, superando desafios de espaço extremamente restrito e a necessidade de operar com tolerância de apenas 2 mm em relação a componentes móveis da máquina. O projeto exigiu uma solução de engenharia sob medida, combinando alta potência óptica, refrigeração líquida eficiente e precisão mecânica em um ambiente produtivo contínuo.",
        technologies: ["SolidWorks", "Termodinâmica Aplicada", "Refrigeração Líquida", "Integração Óptica", "Alumínio Usinado", "Impressão 3D", "LED UV de Alta Intensidade"],
        solution: [
            "Desenvolvimento completo do sistema, desde a concepção do módulo óptico até a integração com a impressora existente.",
            "Projeto customizado do cabeçote de LED UV, com carcaça ultracompacta e refrigeração líquida integrada, assegurando estabilidade térmica em regime contínuo.",
            "Uso de impressão 3D para prototipagem rápida e validação dimensional em múltiplas iterações.",
            "Integração mecânica precisa, mantendo alinhamento e segurança mesmo com as vibrações e altas velocidades do equipamento gráfico."
        ],
        results: [
            "Eliminação de gargalos produtivos, com aumento significativo da taxa de produção e redução de paradas não programadas.",
            "Integração perfeita entre o sistema de cura UV e o ciclo de impressão, sem comprometer a geometria ou a segurança da máquina.",
            "Design modular e compacto, permitindo fácil manutenção e futura expansão."
        ]
    },
    {
        id: 8,
        name: "Reboque para Transporte de Veículos",
        client: "AC Implementos Rodoviários",
        description: "O cliente buscava aprimorar seu produto e processo de fabricação para ganhar competitividade. A SIMA foi encarregada de realizar a engenharia completa do implemento de transporte, com o desafio de desenvolver processos de produção mais ágeis que garantissem total repetibilidade na qualidade e na forma do reboque final.",
        technologies: ["Inventor", "Solda MIG", "Hidráulica", "Galvanização"],
        solution: [
            "Revisão de layout de produção com células modulares e fluxo enxuto (lean manufacturing).",
            "Padronização de gabaritos e dispositivos de fixação para reduzir ajustes manuais.",
            "Documentação de processo e rotina de inspeção em linha.",
            "Projeto de componentes com tolerâncias otimizadas para montagem sem remanejamentos."
        ],
        results: [
            "Qualidade final superior e consistência dimensional.",
            "Aumento de rendimento fabril e redução de retrabalhos.",
            "Produto mais durável e confiável em operação."
        ]
    },
    {
        id: 9,
        name: "Berço de Corte",
        client: "Rieter",
        description: "A qualidade final do revestimento interno do forro de um carro depende da precisão do seu corte de acabamento. Para garantir essa precisão e a consistência do processo, a SIMA desenvolveu e construiu um berço de corte customizado, uma solução de engenharia focada em fornecer um gabarito estável e preciso para a operação de corte.",
        technologies: ["Autodesk Mechanical", "Solda MIG", "Modelagem"],
        solution: [
            "Concepção de berço com superfícies de referência usinadas e guias de alinhamento estrito.",
            "Sistema de fixação rápida para longevidade e repetibilidade.",
            "Materiais de baixo atrito para garantir integridade do produto final.",
            "Ensaios de validação com amostras reais, calibrando tolerâncias."
        ],
        results: [
            "Precisão dimensional dentro das especificações do cliente.",
            "Ganhos expressivos na qualidade do acabamento final.",
            "Redução de peças rejeitadas por falha de corte."
        ]
    },
    {
        id: 10,
        name: "Máquina de corte para Para-choque Citroën C3 XTR",
        client: "PSA Peugeot Citroën",
        description: "A SIMA projetou um sistema de corte e punçionamento de alta precisão para a execução de furos de montagem em para-choques plásticos externos do modelo Citroën C3 XTR. O equipamento foi desenvolvido para operar diretamente na linha de produção, garantindo acabamento superficial perfeito, posicionamento exato e alta repetibilidade — requisitos críticos para componentes visuais de carroceria.",
        technologies: ["CATIA", "Siemens NX", "Hidráulica", "Pneumática", "CLP", "Sensores de Segurança", "Cortinas de Luz", "Ferramentaria de Precisão"],
        solution: [
            "Engenharia completa da máquina, desde o conceito até o projeto executivo.",
            "Tradução das superfícies Classe A fornecidas pelo estúdio de design para geometrias viáveis de fabricação, preservando o acabamento estético exigido pela montadora.",
            "Integração de sistemas de segurança, incluindo cortinas de luz, sensores de presença e intertravamentos conforme normas NR12.",
            "Projeto detalhado das ferramentas de corte e punção, utilizando cilindros hidráulicos para o acionamento e sistemas pneumáticos para o posicionamento preciso da peça."
        ],
        results: [
            "Alta confiabilidade e repetibilidade, mesmo em operação contínua de alta cadência.",
            "Integração ergonômica e segura, garantindo produtividade com total conformidade às normas de segurança.",
            "Flexibilidade de aplicação, permitindo ajustes e adaptações para diferentes geometrias de peças."
        ]
    },
    {
        id: 11,
        name: "Sistema de Cura UV com Esteira Automatizada",
        client: "Duracril",
        description: "A SIMA desenvolveu um sistema completo de cura UV com esteira automatizada, projetado para atender à necessidade de um processo de colagem com adesivos instantâneos, exigindo controle preciso de exposição à radiação UV, segurança operacional e baixo custo. O projeto foi idealizado para oferecer desempenho industrial sem o uso de CLP tradicional, substituído por um sistema inteligente baseado em Arduino.",
        technologies: ["SolidWorks", "Arduino", "IHM Touch", "Sensores de Presença", "Atuadores", "Fontes UV", "Automação de Baixo Custo"],
        solution: [
            "Projeto turn-key completo: concepção, projeto mecânico, montagem, automação, programação e comissionamento final.",
            "Controle integrado via Arduino: programação da lógica de operação, temporização e interface homem-máquina (IHM) personalizada.",
            "Segurança operacional: sensores de presença, enclausuramento de lâmpadas UV e intertravamentos automáticos.",
            "Montagem e testes completos: execução integral pela equipe SIMA, incluindo cabeamento, ajustes e validação em campo."
        ],
        results: [
            "Solução industrial acessível, com confiabilidade comparável a sistemas baseados em CLP.",
            "Interface moderna e amigável, simplificando a operação e reduzindo tempo de treinamento.",
            "Execução completa — do conceito à instalação — em curto prazo e com excelente relação custo-benefício."
        ]
    }
];

// Função para renderizar projetos
function renderProjects() {
    const container = document.getElementById('projectsContainer');

    if (!container) return; // Se o container não existir, não renderiza

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <h3>${project.name}</h3>
                <p class="project-client">Cliente: ${project.client}</p>
            </div>
            <div class="project-body">
                <div class="project-description">
                    ${project.description.substring(0, 150)}...
                </div>
                <div class="project-tech">
                    <strong>Tecnologias:</strong>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="project-footer">
                <span class="view-details" onclick="openProjectModal(${project.id})">Ver Detalhes →</span>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

// Função para abrir modal de projeto
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Criar modal se não existir
    let modal = document.getElementById('projectModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'projectModal';
        modal.className = 'project-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="closeProjectModal()">&times;</span>
            <h2>${project.name}</h2>
            <p><strong>Cliente:</strong> ${project.client}</p>

            <div class="modal-section">
                <h3>Desafio</h3>
                <p>${project.description}</p>
            </div>

            <div class="modal-section">
                <h3>Tecnologias Utilizadas</h3>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3>Solução Proposta</h3>
                <ul>
                    ${project.solution.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3>Resultados Alcançados</h3>
                <ul>
                    ${project.results.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// Função para fechar modal de projeto
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Função para abrir lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
    }
}

// Função para fechar lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

// Menu mobile
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
    }
}

// Fechar lightbox ao clicar fora da imagem
document.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && e.target === lightbox) {
        closeLightbox();
    }
});

// Fechar modal de projeto ao clicar fora
document.addEventListener('click', (e) => {
    const modal = document.getElementById('projectModal');
    if (modal && e.target === modal) {
        closeProjectModal();
    }
});

// Suporte a ESC para fechar modais
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        closeProjectModal();
    }
});

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initMobileMenu();
});

