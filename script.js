<script>

const elementData = {

  "Abertura": {
    description: "Refere-se à tendência do indivíduo em ser curioso, imaginativo, criativo e receptivo a novas ideias, experiências e perspectivas. No contexto da LX, relaciona-se ao interesse em explorar TDIC, experimentar diferentes estratégias de aprendizagem e buscar soluções criativas.",
    author: "McCrae e Costa (1999) — Modelo Big Five"
  },

  "Adaptabilidade": {
    description: "Refere-se à flexibilidade da TDIC para atender às diferentes necessidades, preferências, estilos e contextos dos aprendizes. Abrange a adaptação do espaço de aprendizagem, dos sistemas de software e de aspectos do ambiente físico.",
    author: "Huang et al. (2019)"
  },

  "Alegria": {
    description: "Estado afetivo positivo associado à satisfação, ao prazer e ao bem-estar. No contexto da LX, pode estar relacionada às experiências positivas vivenciadas durante a aprendizagem e a interação com a TDIC.",
    author: "Plutchik (1980) — Teoria Psicoevolucionária das Emoções"
  },

  "Amabilidade": {
    description: "Refere-se à predisposição para agir de forma cooperativa, empática, altruísta e respeitosa nas relações interpessoais. Na LX colaborativa, manifesta-se pelo respeito às opiniões, disposição para ajudar e colaboração entre os aprendizes.",
    author: "McCrae e Costa (1999) — Modelo Big Five"
  },

  "Antecipação": {
    description: "Estado emocional orientado para o futuro e relacionado à atenção ao que está por vir. Na LX, pode se manifestar como interesse pelos conteúdos futuros, expectativa pelos resultados e esperança em relação às conquistas de aprendizagem.",
    author: "Plutchik (1980) — Teoria Psicoevolucionária das Emoções"
  },

  "Comunicação": {
    description: "Refere-se à troca de mensagens, argumentação e negociação entre os aprendizes durante uma atividade conjunta. Por meio da comunicação, os participantes negociam, tomam decisões e estabelecem compromissos.",
    author: "Pimentel et al. (2006) — Modelo 3C de Colaboração"
  },

  "Confiar": {
    description: "Refere-se ao sentimento de segurança e confiança em pessoas, instituições ou situações. Na LX, pode se manifestar como confiança nos colegas, no professor, na TDIC e no próprio processo de aprendizagem.",
    author: "Plutchik (1980) — Teoria Psicoevolucionária das Emoções"
  },

  "Confortabilidade": {
    description: "Refere-se ao bem-estar físico e emocional do aprendiz durante a utilização da TDIC. Abrange condições do ambiente de aprendizagem e aspectos psicológicos, como tranquilidade, ausência de angústia e conforto durante a interação.",
    author: "Huang et al. (2019)"
  },

  "Conscienciosidade": {
    description: "Refere-se à tendência à organização, responsabilidade, autodisciplina e persistência na realização de objetivos. Na LX, manifesta-se no planejamento das atividades, gerenciamento do tempo, dedicação e comprometimento com os objetivos de aprendizagem.",
    author: "McCrae e Costa (1999) — Modelo Big Five"
  },

  "Coordenação": {
    description: "Refere-se à gestão das pessoas, atividades e recursos envolvidos no trabalho conjunto. Permite organizar tarefas, administrar compromissos e conflitos e evitar desperdícios de esforços durante a colaboração.",
    author: "Pimentel et al. (2006) — Modelo 3C de Colaboração"
  },

  "Cooperação": {
    description: "Refere-se à atuação conjunta dos participantes em um espaço compartilhado para produzir objetos ou informações. É o momento em que o trabalho colaborativo é efetivamente realizado.",
    author: "Pimentel et al. (2006) — Modelo 3C de Colaboração"
  },

  "Desejabilidade": {
    description: "Refere-se à atratividade e ao engajamento nas atividades mediadas por TDIC. Está relacionada à capacidade da experiência de manter os aprendizes atentos, envolvidos e interessados durante a aprendizagem.",
    author: "Huang et al. (2019), com base no engajamento de Fredricks et al. (2004)"
  },

  "Extroversão": {
    description: "Refere-se à tendência de buscar interação social e demonstrar entusiasmo, assertividade e energia. Na LX colaborativa, pode se manifestar pela participação ativa em discussões, comunicação frequente e compartilhamento de conhecimentos.",
    author: "McCrae e Costa (1999) — Modelo Big Five"
  },

  "Neuroticismo": {
    description: "Refere-se à tendência à instabilidade emocional e à maior suscetibilidade a emoções negativas, como ansiedade, preocupação, insegurança e estresse. Na LX, pode aparecer diante de dificuldades, avaliações ou situações de colaboração.",
    author: "McCrae e Costa (1999) — Modelo Big Five"
  },

  "Raiva": {
    description: "Resposta emocional relacionada a obstáculos, injustiças ou violações de limites. Na LX, pode se manifestar como frustração com a tecnologia, irritação diante de obstáculos ou percepção de injustiça durante o trabalho em grupo.",
    author: "Plutchik (1980) — Teoria Psicoevolucionária das Emoções"
  },

  "Temer": {
    description: "Resposta emocional a ameaças reais ou percebidas. Na LX, pode se manifestar como apreensão diante de novas TDIC, medo de julgamento, preocupação com o desempenho ou ansiedade durante avaliações.",
    author: "Plutchik (1980) — Teoria Psicoevolucionária das Emoções"
  },

  "Usabilidade": {
    description: "Refere-se à facilidade de uso e à capacidade de aprendizagem de uma TDIC educacional. Considera se os aprendizes conseguem utilizar a tecnologia de maneira eficaz, eficiente e satisfatória.",
    author: "Huang et al. (2019), considerando Nielsen (1994)"
  },

  "Valor": {
    description: "É considerado o elemento central da LX. Refere-se ao valor percebido pelo aprendiz quando a TDIC e o contexto educacional estão alinhados às suas necessidades de aprendizagem e contribuem efetivamente para a experiência educacional.",
    author: "Huang et al. (2019)"
  }

};


const modal = document.getElementById("element-modal");
const modalTitle = document.getElementById("element-modal-title");
const modalDescription = document.getElementById("element-modal-description");
const modalAuthor = document.getElementById("element-modal-author");

const closeModal = document.getElementById("element-modal-close");
const modalBackdrop = document.getElementById("element-modal-backdrop");


document.querySelectorAll(".element-tag").forEach(button => {

  button.addEventListener("click", () => {

    const elementName = button.dataset.element;
    const data = elementData[elementName];

    if (!data) return;

    modalTitle.textContent = elementName;
    modalDescription.textContent = data.description;
    modalAuthor.textContent = data.author;

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    document.body.style.overflow = "hidden";

    closeModal.focus();

  });

});


function hideElementModal() {

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  document.body.style.overflow = "";

}


closeModal.addEventListener("click", hideElementModal);

modalBackdrop.addEventListener("click", hideElementModal);


document.addEventListener("keydown", event => {

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    hideElementModal();
  }

});


lucide.createIcons();

</script>

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

<script>
const resultadoCalculoInfo =
  document.getElementById('resultado-calculo-info');

const resultadoCalculoModal =
  document.getElementById('resultado-calculo-modal');

const resultadoCalculoClose =
  document.getElementById('resultado-calculo-close');

const resultadoCalculoBackdrop =
  document.getElementById('resultado-calculo-backdrop');


function openResultadoCalculo() {
  resultadoCalculoModal.classList.remove('hidden');
  resultadoCalculoModal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  lucide.createIcons();
}


function closeResultadoCalculo() {
  resultadoCalculoModal.classList.add('hidden');
  resultadoCalculoModal.classList.remove('flex');
  document.body.style.overflow = '';
}


resultadoCalculoInfo?.addEventListener(
  'click',
  openResultadoCalculo
);

resultadoCalculoClose?.addEventListener(
  'click',
  closeResultadoCalculo
);

resultadoCalculoBackdrop?.addEventListener(
  'click',
  closeResultadoCalculo
);

document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape' &&
    !resultadoCalculoModal.classList.contains('hidden')
  ) {
    closeResultadoCalculo();
  }
});
</script>
