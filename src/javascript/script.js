$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#partners', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('header');
        const navName = document.querySelector('#nav_name'); // Seleciona o elemento do texto
    
        if (window.scrollY > 60) {
            navbar.style.backgroundColor = 'rgba(8, 8, 8, 0.24)'; // Cor transparente          
            
        } else {
            navbar.style.backgroundColor = 'rgb(1, 0, 10)'; // Cor normal          
        }
    });

    // Dados dos serviços
    const services = {
        button1: {
            image: "src/images/servicos/cabeamento_1.png",
            title: "Infraestrutura de Rede",
            description: "Serviço de cabeamento estruturado para empresas, garantindo qualidade e organização.",
            activities: [
                "<b>Organização</b><br>Os cabos são desejosos de forma lógica e identificável, facilitando a manutenção e expansões futuras",
                "<b>Flexibilidade</b><br>Permite a fácil reconfiguração ou adição de novos dispositivos sem a necessidade de grandes alterações físicas.",
                "<b>Desempenho</b><br>Suporta altas taxas de transferência de dados, sendo ideal para redes modernas que exigem alta velocidade e estabilidade.",
                "<b>Durabilidade</b><br>Projetado para oferecer uma longa vida útil com desempenho consistente, reduzindo custos de manutenção a longo prazo.",
                "<b>Conformidade</b><br>Segue normas internacionais, como TIA/EIA-568, que garantem qualidade e compatibilidade."
            ]
        },
        button2: {
            image: "src/images/servicos/audiovisual_1.png",
            title: "Audiovisual",
            description: "O audiovisual transforma ambientes, conectando pessoas e criando experiências impactantes.",
            activities: [
                "<b>Qualidade de Áudio Superior</b><br>Som nítido e equalizado, mesmo em ambientes amplos.",
                "<b>Distribuição Uniforme</b><br>Garantia de que todos os presentes, independentemente da posição, ouçam com a mesma explicação.",
                "<b>Integração Tecnológica</b><br>Conexão com projetos, sistemas de videoconferência e tela de led, projetores para uma experiência completa.",
                "<b>Personalização Acústica</b><br> Ajuste de volumes, equalização e configuração de acordo com as necessidades do ambiente e do evento.",
            ]
        },
        button3: {
            image: "src/images/servicos/ciberseguranca_1.png",
            title: "Cibersegurança",
            description: "A cibersegurança é uma prática de proteger sistemas, redes e dados contra ataques digitais.",
            activities: [
                "<b>Proteção de Redes</b><br>Defenda-se contra invasões e acessos não autorizados por meio de firewalls, criptografia e outras tecnologias.",
                "<b>Segurança de Aplicações</b><br>Garantir que softwares e sistemas sejam desenvolvidos e mantidos de forma segura, sem vulnerabilidades que possam ser exploradas.",
                "<b>Gestão de Identidade e Acesso</b><br>Controle o acesso a dados e sistemas sensíveis, garantindo que apenas usuários autorizados possam interagir com informações críticas.",
                "<b>Segurança de Dados</b><br>Protege dados armazenados e em trânsito, utilizando criptografia e políticas de backup.",
                "<b>Monitoramento e Resposta a Incidentes</b><br>Monitore constantemente sistemas e redes para detectar atividades suspeitas e responder rapidamente a qualquer ameaça.",
            ]
        },
        button4: {
            image: "src/images/servicos/telecom_1.png",
            title: "Serviços de Telecom",
            description: "Infraestrutura e soluções completas para sistemas de telecomunicações.",
            activities: [
                "<b>Instalação de Telefonia Corporativa</b><br>Projeto e implementação de sistemas de telefonia para ambientes corporativos, oferecendo soluções de comunicação eficientes e integradas.",
                "<b>Instalação de Cabeamento de Telecom</b><br>Execução de cabeamento para sistemas de telecomunicações, como telefonia fixa e sistemas de videoconferência.",
                "<b>Telefonia IP (VoIP)</b><br>Implantação de soluções de telefonia IP, integrando chamadas de voz com a rede de dados e simplificando custos com comunicação.",
                "<b>Videoconferência e Telepresença</b><br>Implantação de soluções de videoconferência e sistemas de telepresença para ambientes corporativos, reuniões virtuais de alta qualidade.",
                "<b>Serviços de Central Telefônica (PABX)</b><br>Instalação e manutenção de centrais telefônicas, com soluções tanto tradicionais quanto baseadas em VoIP, para melhorar a comunicação interna e externa."
            ]
            
        },
        button5: {
            image: "src/images/servicos/automação_1.png",
            title: "Ambiente Inteligênte",
            description: "Automatização de processos e ambientes para maior eficiência e conforto.",
            activities: [
                "<b>Conforto e Praticidade</b><br>Controle total do ambiente na palma da mão, seja em casa ou no trabalho.",
                "<b>Eficiência Energética</b><br>Redução no consumo de energia com automatizações que otimizam o uso de luzes, ar-condicionado e outros dispositivos.",
                "<b>Segurança Avançada</b><br>Integração de sistemas de câmeras, sensores e alarmes para monitoramento e proteção em tempo real.",
                "<b>Personalização</b><br>Cenários configuráveis que ajustam o ambiente automaticamente conforme suas preferências ou horários."
            ]
            
        },
        button6: {
            image: "src/images/servicos/monitoramento_1.png",
            title: "Sistema de Monitoramento",
            description: "Sistemas de monitoramento com câmeras de alta resolução e infraestrutura de ponta.",
            activities: [
                "<b>Monitoramento em Tempo Real</b><br>Permite visualizar imagens ao vivo de qualquer lugar, garantindo resposta rápida a eventos.",
                "<b>Gravações de Alta Qualidade</b><br>Captura imagens em alta resolução, facilitando a identificação de pessoas e objetos em situações críticas.",
                "<b>Integração Inteligente</b><br>Compatível com sistemas de alarme e controle de acesso, criando uma solução de segurança completa.",
                "<b>Armazenamento Seguro</b><br>Opções de armazenamento local e na nuvem para proteção contra perdas ou danos.",
                "<b>Prevenção e Investigação</b><br>Atua como um fator dissuasivo contra ações ilícitas e como uma ferramenta eficaz para investigações planejadas."
            ]
            
        },
        button7: {
            image: "src/images/servicos/eletrica_1.png",
            title: "Serviços Elétricos",
            description: "Serviços elétricos de alto desempenho para instalações e manutenção.",
            activities: [
                "<b>Instalações Elétricas</b><br>Projetos e execução de redes elétricas para atender demandas em prédios, comerciais e industriais.",
                "<b>Manutenção Preventiva e Corretiva</b><br>Inspeção e reparo de sistemas elétricos para evitar falhas e garantir a continuidade das operações.",
                "<b>Quadros de Distribuição</b><br>Montagem e organização de quadros elétricos, otimizando o controle e a proteção das redes.",
                "<b>Dimensionamento de Carga</b><br>Análise técnica para garantir que o sistema suporte a demanda energética, evitando sobrecargas.",
                "<b>Eficiência Energética</b><br>Soluções para reduzir o consumo de energia e aumentar a sustentabilidade dos sistemas elétricos."
            ]            
        },
        button8: {
            image: "src/images/logo/Logo Clever Preto.png",
            title: "Sobre Nós",
            description: "Somos líderes em Tecnologia da Informação, comprometidos em redefinir padrões e transformar indústrias com soluções tecnológicas de ponta. Nossa missão é ser parceiros estratégicos na jornada de nossos clientes rumo à era da Indústria 4.0.<br><br>Com uma equipe altamente qualificada e apaixonada por inovação, entregamos serviços personalizados que vão desde cabeamento estruturado e soluções audiovisuais até sistemas de monitoramento e cibersegurança de última geração. Nosso foco está em oferecer soluções que não apenas atendem às necessidades atuais, mas também preparam nossos clientes para os desafios do futuro.<br><br>Valorizamos a eficiência, a sustentabilidade e a segurança em cada projeto, buscando sempre otimizar recursos e proporcionar um impacto positivo nas operações dos nossos clientes. Seja na implementação de redes confiáveis, integração de sistemas avançados ou no suporte técnico contínuo, nossa meta é superar expectativas."
        }
        
    };

    function updateContent(buttonId) {
        const content = services[buttonId];
        if (content) {
            document.getElementById('service-image').src = content.image;
            document.getElementById('service-image').style.display = 'block';
            document.getElementById('service-title').textContent = content.title;
            document.getElementById('service-description').innerHTML = content.description;
    
            const activitiesList = document.getElementById('service-activities');
            activitiesList.innerHTML = ''; // Limpa a lista antes de adicionar os itens
            content.activities.forEach(activity => {
                const listItem = document.createElement('li');
                listItem.innerHTML = activity; // Permite interpretar HTML
                activitiesList.appendChild(listItem);
            });
        }
    } 
// Variável para controlar se o auto switch está ativo
let autoSwitchEnabled = true;
let autoSwitchInterval;

// Adicionando eventos aos botões `.dish-button` e abas no `#tabs-container`
document.querySelectorAll('.dish-button, #tabs-container .tab').forEach(button => {
    button.addEventListener('click', () => {
        autoSwitchEnabled = false; // Desativa o ciclo automático
        clearInterval(autoSwitchInterval); // Para o intervalo automático
        updateContent(button.id || button.getAttribute('data-target'));
    });
});

// Define o conteúdo padrão como button1 ao carregar a página
window.onload = () => {
    updateContent('button1');
    autoSwitchContent(); // Inicia o ciclo automático
};

// Alterna entre os botões a cada 5 segundos, se permitido
function autoSwitchContent() {
    const buttonIds = Object.keys(services); // Lista de botões
    let currentIndex = 0;

    autoSwitchInterval = setInterval(() => {
        if (autoSwitchEnabled) {
            // Atualiza para o próximo botão
            currentIndex = (currentIndex + 1) % buttonIds.length;
            updateContent(buttonIds[currentIndex]);
        } else {
            clearInterval(autoSwitchInterval); // Para o ciclo se não estiver ativo
        }
    }, 5000); // Intervalo de 5 segundos
}



    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário
        alert('Obrigado por sua mensagem! Em breve entraremos em contato.');
    });

    document.addEventListener('scroll', function () {
        const whatsappButton = document.getElementById('whatsapp-button');
        if (window.scrollY > 100) { // Define quando o botão deve aparecer
            whatsappButton.classList.add('show');
        } else {
            whatsappButton.classList.remove('show');
        }
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            updateContent(target); // Atualiza o conteúdo com a função existente
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
    
    
});