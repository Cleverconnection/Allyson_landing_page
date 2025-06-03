// Inicializa particles.js
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 600 } },
    "color": { "value": "#00ffea" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4 },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 170, "color": "#00ffea", "opacity": 0.2, "width": 1 },
    "move": { "enable": true, "speed": 1.2, "direction": "none", "out_mode": "bounce", "bounce": true }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": false }, "resize": true },
    "modes": { "repulse": { "distance": 100, "duration": 3.4 } }
  },
  "retina_detect": true
});

// Permitir scroll no particles.js
const particlesCanvas = document.getElementById('particles-js');
if (particlesCanvas) {
  particlesCanvas.addEventListener('wheel', (event) => event.stopPropagation());
}

// Accordion para a seção de Serviços
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
      const tooltip = i.querySelector('.tooltip-bubble');
      if (tooltip) tooltip.style.display = 'none';
    });

    if (!isActive) {
      item.classList.add('active');
      const tooltip = item.querySelector('.tooltip-bubble');
      if (tooltip) tooltip.style.display = 'block';
    }
  });
});

// Slider + Lista interativa na seção Parceiro
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.parceiro-gallery .slide');
  const prevBtn = document.querySelector('.parceiro-gallery .slide-arrow.left');
  const nextBtn = document.querySelector('.parceiro-gallery .slide-arrow.right');
  const parceiroTextDiv = document.querySelector('.parceiro-text');
  const parceiroSection = document.querySelector('.parceiro-section');

   const textos = [ 
    { title: "POR QUE SANGFOR?", subtitle: "As soluções da Sangfor são projetadas pensando nas necessidades comerciais exclusivas dos nossos clientes, com atendimento e suporte rápidos e personalizados, presenciais e online.", items: [ { title: "Conectividade Segura", detail: "Fornece acesso seguro a redes e aplicações, minimizando riscos e aumentando a produtividade." }, { title: "Visibilidade Avançada", detail: "Monitora o tráfego em tempo real, detectando ameaças, anomalias e atividades suspeitas." }, { title: "Soluções de Próxima Geração", detail: "Oferece tecnologias inovadoras como NGFW, Zero Trust e proteção avançada contra ameaças." }, { title: "Suporte Dedicado", detail: "Equipe técnica especializada, pronta para atender rapidamente e personalizar as soluções para o seu ambiente." } ] },
    { title: "SANGFOR IAG", subtitle: "O Sangfor IAG (Gateway de acesso à Internet) permite que você identifique, analise e tome medidas imediatas sobre o comportamento de acesso do usuário à Internet", items: [ { title: "Proteção contra prevenção de proxy", detail: "O IAG colabora com a Endpoint Secure para aplicar a Proteção contra Prevenção de Proxy a qualquer tentativa de usuário de usar este aplicativo, a fim de contornar o perímetro de segurança com mais eficácia." }, { title: "Gestão Inteligente de Tráfego", detail: "Melhora a utilização da largura de banda em mais de 30% usando três soluções exclusivas de gerenciamento de tráfego." }, { title: "Controle de aplicação preciso e exato", detail: "Gerencia e controla aplicações de rede de forma mais abrangente e precisa, com o maior banco de dados de assinaturas da Ásia." }, { title: "Dispositivos de integração seguros com postura de segurança de endpoint", detail: "Identifica e protege dispositivos endpoint com ou sem agentes." }, { title: "Relatórios Detalhados e Auditoria", detail: "Fornece relatórios abrangentes para auditorias e conformidade." }, { title: "Detecção de Ameaças em Tempo Real", detail: "Identifica e mitiga automaticamente atividades suspeitas." } ] },
    { title: "SANGFOR ATRUST", subtitle: "Sangfor Zero Trust Guard (ZTG) é uma solução avançada de Zero Trust Network Access (ZTNA) que fornece acesso seguro e adaptável a aplicativos privados.", items: [ { title: "Segurança Inteligente", detail: "Minimize a superfície de ataque, aplique acesso com privilégios mínimos, evite movimentos laterais e monitore ameaças continuamente." }, { title: "Gestão Simplificada e Eficiente", detail: "Interface intuitiva, fácil implantação, transição simples de VPNs legadas." }, { title: "Escalabilidade e Flexibilidade", detail: "Solução nativa da nuvem, escalável e adaptável às necessidades." }, { title: "Autenticação Robusta e Controle Granular", detail: "MFA, políticas baseadas em identidade e integração com diretórios." }, { title: "Visibilidade e Monitoramento Centralizado", detail: "Dashboard em tempo real, alertas proativos, integração com SIEM." }, { title: "Alta Disponibilidade e Resiliência", detail: "Failover automático, balanceamento de carga, recuperação rápida." } ] }
  ];

  let currentIndex = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    const data = textos[index];
    parceiroTextDiv.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.subtitle}</p>
      <div class="parceiro-accordion">
        ${data.items.map(item => `
          <div class="parceiro-item">
            <button class="parceiro-header">
              ${item.title} <span class="parceiro-toggle">►</span>
            </button>
            <div class="parceiro-detail">${item.detail}</div>
          </div>
        `).join('')}
      </div>
    `;

    parceiroTextDiv.querySelectorAll('.parceiro-header').forEach(header => {
      header.addEventListener('click', () => {
        const itemDiv = header.parentElement;
        const isActive = itemDiv.classList.contains('active');

        parceiroTextDiv.querySelectorAll('.parceiro-item').forEach(i => i.classList.remove('active'));

        if (!isActive) {
          itemDiv.classList.add('active');
          stopAutoSlide();
        }
      });
    });
  }

  function startAutoSlide() {
    if (!autoSlideInterval) {
      autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
      }, 4000);
    }
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }

  prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  // Observer para detectar entrada/saída da seção Parceiro
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAutoSlide();
      } else {
        stopAutoSlide();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(parceiroSection);

  showSlide(currentIndex);
});

// Animação de entrada para o Footer
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.cyber-footer');

  if (footer) {
    // Inicialmente esconde o footer
    footer.style.opacity = 0;
    footer.style.transform = 'translateY(50px)';
    footer.style.transition = 'opacity 1s ease, transform 1s ease';

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.style.opacity = 1;
          footer.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.3 });

    observer.observe(footer);
  }
});

