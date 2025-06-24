$(document).ready(function () {
    // Accordion para a seção de Serviços
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const buttonId = header.getAttribute('data-target'); // Obtém o id do botão
            openPopup(buttonId); // Chama a função que abre o popup
        });
    });

    // Função para abrir o popup com as informações do serviço
    function openPopup(buttonId) {
        const content = services[buttonId];
        if (content) {
            // Atualiza o conteúdo do popup com base nos dados do serviço
            document.getElementById('popup-image').src = content.image;
            document.getElementById('popup-title').textContent = content.title;
            document.getElementById('popup-description').textContent = content.description;
            
            const activitiesList = document.getElementById('popup-activities');
            activitiesList.innerHTML = ''; 
            content.activities.forEach(activity => {
                const listItem = document.createElement('li');
                listItem.innerHTML = activity;
                activitiesList.appendChild(listItem);
            });

            // Exibe o popup com a classe 'open' para ativar a animação
            document.getElementById('popup').style.display = 'flex'; // Garante que o popup seja exibido
            document.getElementById('popup').classList.add('open'); // Adiciona a classe 'open' para animação
        }
    }


    // Fechar o popup ao clicar no botão de fechar
    document.querySelector('.close-popup').addEventListener('click', function() {
        const popup = document.getElementById('popup');
        popup.classList.remove('open'); // Remove a classe 'open' para esconder o popup com animação

        // Adiciona um tempo de delay para a animação do popup desaparecer antes de ocultá-lo
        setTimeout(() => {
            popup.style.display = 'none'; // Define o display como none após a animação
        }, 100); // Tempo de delay para a animação (300ms)
    });

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const buttonId = header.getAttribute('data-target');
            openPopup(buttonId);
            header.classList.add('popup-open'); // Adiciona uma classe ao header
            setTimeout(() => {
                header.classList.remove('popup-open'); // Remove a classe após um tempo
            }, 200); // Tempo suficiente para abrir o popup
        });
    });

    document.addEventListener('click', function(event) {
        const popup = document.getElementById('popup');
        if (popup.classList.contains('open') && !popup.contains(event.target) && !event.target.classList.contains('popup-open') && !event.target.parentNode.classList.contains('popup-open')) {
            popup.classList.remove('open');
            setTimeout(() => {
                popup.style.display = 'none';
            }, 100);
        }
    });

    // Contém os dados de cada serviço
    const services = {
        button1: {
            image: "src/images/servicos/cabeamento_1.png",
            title: "Infraestrutura de Rede",
            description: "Serviço de cabeamento estruturado para empresas, garantindo qualidade e organização.",
            activities: [
                "<b>Organização</b><br>Os cabos são desejosos de forma lógica e identificável.",
                "<b>Flexibilidade</b><br>Permite a fácil reconfiguração.",
                "<b>Desempenho</b><br>Suporta altas taxas de transferência de dados.",
                "<b>Durabilidade</b><br>Oferece uma longa vida útil.",
                "<b>Conformidade</b><br>Seguindo normas internacionais."
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
                "<b>Serviços de Central Telefônica (PABX)</b><br>Instalação e manutenção de centrais telefônicas, com soluções tanto tradicionais quanto baseadas em VoIP, para melhorar a comunicação interna e externa."
            ]

        },
        button5: {
            image: "src/images/servicos/automacao_1.png",
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
            image: "src/images/logo/Logo Clever Preto.png",
            title: "Sobre Nós",
            description: "Somos líderes em Tecnologia da Informação, comprometidos em transformar indústrias com inovação e soluções tecnológicas avançadas. Nosso objetivo é negócios rumo à Indústria 4.0, oferecendo serviços personalizados que garantem eficiência, segurança e sustentabilidade. Contamos com uma equipe altamente comprometida, especializada em cabeamento estruturado, soluções audiovisuais, sistemas de monitoramento e cibersegurança. Nosso compromisso vai além da entrega de soluções. Buscamos otimizar recursos, aumentar a produtividade e proporcionar um impacto positivo nas operações das empresas. Seja na implementação de redes, integração de sistemas avançados ou suporte técnico contínuo, nossa meta é superar expectativas de nossos clientes.",
            activities: []
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
            activitiesList.innerHTML = ''; 
            content.activities.forEach(activity => {
                const listItem = document.createElement('li');
                listItem.innerHTML = activity;
                activitiesList.appendChild(listItem);
            });
        }
    }

    // Evento de clique nas abas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            updateContent(tab.getAttribute('data-target'));
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
        alert('Prezado(a) o formulário está em manuntenção, favor entrar em contato via whatsapp ou por ligação. Tel: (11) 4709-9523');
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

    // Função de Alternância de Títulos
    function rotateServiceTitles() {
        const titles = document.querySelectorAll('.service-title-text');
        let index = 0;

        function updateServiceTitle() {
            titles.forEach(title => title.classList.remove("active"));
            titles[index].classList.add("active");
            index = (index + 1) % titles.length;
        }

        updateServiceTitle();
        setInterval(updateServiceTitle, 4000); // Troca a cada 4 segundos
    }

    rotateServiceTitles();
});
