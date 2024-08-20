const perguntas = [
  {
    id: 1,
    enunciado: "Qual das seguintes opções é uma função de ciclo de vida em um componente de classe do React?",
    opcoes: [
      "componentDidMount",
      "componentWillAppear",
      "componentDidAppear",
      "componentWillLoad",
      "componentWillRender"
    ],
    resposta: 0
  },
  {
    id: 2,
    enunciado: "Como você cria uma função em JavaScript?",
    opcoes: [
      "function myFunction() {}",
      "myFunction: function() {}",
      "def myFunction() {}",
      "func myFunction() {}",
      "void myFunction() {}"
    ],
    resposta: 0
  },
  {
    id: 3,
    enunciado: "Qual dos seguintes métodos é usado para criar um novo array com todos os elementos que passam por um teste implementado por uma função fornecida?",
    opcoes: [
      "filter",
      "map",
      "reduce",
      "forEach",
      "some"
    ],
    resposta: 0
  },
  {
    id: 4,
    enunciado: "Qual das seguintes opções é uma biblioteca popular para gerenciamento de estado no React?",
    opcoes: [
      "Redux",
      "Bootstrap",
      "JQuery",
      "Lodash",
      "Axios"
    ],
    resposta: 0
  },
  {
    id: 5,
    enunciado: "Qual é a saída de `typeof NaN` em JavaScript?",
    opcoes: [
      "number",
      "undefined",
      "object",
      "NaN",
      "string"
    ],
    resposta: 0
  },
  {
    id: 6,
    enunciado: "Qual dos seguintes é um método de array que retorna o primeiro elemento que satisfaz a condição fornecida?",
    opcoes: [
      "find",
      "filter",
      "forEach",
      "map",
      "some"
    ],
    resposta: 0
  },
  {
    id: 7,
    enunciado: "Como você acessa um estado no React usando hooks?",
    opcoes: [
      "useState",
      "useEffect",
      "useRef",
      "useContext",
      "useReducer"
    ],
    resposta: 0
  },
  {
    id: 8,
    enunciado: "Qual é a sintaxe correta para declarar um componente funcional no React?",
    opcoes: [
      "const MyComponent = () => { return <div>Hello</div>; }",
      "function MyComponent() { return (<div>Hello</div>); }",
      "const MyComponent = function() { return <div>Hello</div>; }",
      "class MyComponent extends React.Component { render() { return <div>Hello</div>; } }",
      "const MyComponent = () => { render(<div>Hello</div>); }"
    ],
    resposta: 0
  },
  {
    id: 9,
    enunciado: "Qual é o resultado de '3' + 2 em JavaScript?",
    opcoes: [
      "'32'",
      "5",
      "NaN",
      "6",
      "'5'"
    ],
    resposta: 0
  },
  {
    id: 10,
    enunciado: "Qual é o método correto para adicionar um novo elemento no final de um array em JavaScript?",
    opcoes: [
      "push",
      "pop",
      "shift",
      "unshift",
      "append"
    ],
    resposta: 0
  },
  {
    id: 11,
    enunciado: "Qual é o propósito do método `Array.prototype.map` em JavaScript?",
    opcoes: [
      "Retornar um novo array com os resultados da função fornecida aplicada a cada elemento do array original",
      "Filtrar os elementos do array que correspondem à condição fornecida",
      "Adicionar um novo elemento ao final do array",
      "Remover o primeiro elemento do array",
      "Iterar sobre os elementos de um array sem retornar nada"
    ],
    resposta: 0
  },
  {
    id: 12,
    enunciado: "Qual das seguintes opções NÃO é uma maneira válida de definir um estado inicial no React?",
    opcoes: [
      "useState",
      "this.state",
      "setState",
      "constructor",
      "static getDerivedStateFromProps"
    ],
    resposta: 2
  },
  {
    id: 13,
    enunciado: "Qual das opções abaixo é uma maneira de fazer uma cópia rasa de um objeto em JavaScript?",
    opcoes: [
      "Object.assign({}, obj)",
      "Object.copy({}, obj)",
      "obj.clone()",
      "obj.copy()",
      "obj.duplicate()"
    ],
    resposta: 0
  },
  {
    id: 14,
    enunciado: "O que o método `React.memo` faz?",
    opcoes: [
      "Memoriza o resultado de um componente para evitar renderizações desnecessárias",
      "Faz uma cópia do componente para otimizar a performance",
      "Armazena o estado do componente em um local seguro",
      "Permite o uso de hooks em componentes de classe",
      "Transfere propriedades de um componente para outro"
    ],
    resposta: 0
  },
  {
    id: 15,
    enunciado: "O que é uma 'key' em um array de componentes React?",
    opcoes: [
      "Um identificador exclusivo que ajuda o React a identificar quais itens mudaram, foram adicionados ou removidos",
      "Um valor que é passado como uma propriedade para o componente",
      "Uma propriedade que define o tipo do componente",
      "Um método que é chamado para renderizar o componente",
      "Uma função que retorna o nome do componente"
    ],
    resposta: 0
  },
  {
    id: 16,
    enunciado: "Qual é o propósito do método `Array.prototype.reduce`?",
    opcoes: [
      "Executar uma função redutora sobre cada elemento do array, resultando em um único valor",
      "Retornar um novo array com os elementos que passam no teste fornecido",
      "Adicionar um elemento ao final de um array",
      "Remover um elemento de um array",
      "Dividir um array em sub-arrays"
    ],
    resposta: 0
  },
  {
    id: 17,
    enunciado: "O que o método `useEffect` faz no React?",
    opcoes: [
      "Executa efeitos colaterais em componentes funcionais",
      "Gerencia o estado local em componentes funcionais",
      "Armazena valores mutáveis",
      "Alterna entre renderizações de componentes",
      "Força a atualização do componente"
    ],
    resposta: 0
  },
  {
    id: 18,
    enunciado: "Qual é o resultado de `null == undefined` em JavaScript?",
    opcoes: [
      "true",
      "false",
      "null",
      "undefined",
      "NaN"
    ],
    resposta: 0
  },
  {
    id: 19,
    enunciado: "O que significa 'JSX' em React?",
    opcoes: [
      "JavaScript XML",
      "JavaScript Exchange",
      "Java Standard Extension",
      "JavaScript Extension",
      "Java Syntax XML"
    ],
    resposta: 0
  },
  {
    id: 20,
    enunciado: "Qual método em JavaScript pode ser usado para converter uma string em um número inteiro?",
    opcoes: [
      "parseInt",
      "parseFloat",
      "Number.toInteger",
      "Math.floor",
      "String.toInt"
    ],
    resposta: 0
  },
  {
    id: 21,
    enunciado: "Qual é o hook que permite acessar o contexto em um componente funcional do React?",
    opcoes: [
      "useContext",
      "useReducer",
      "useState",
      "useEffect",
      "useRef"
    ],
    resposta: 0
  },
  {
    id: 22,
    enunciado: "O que é o conceito de 'lifting state up' em React?",
    opcoes: [
      "Mover o estado compartilhado para o componente mais próximo que é pai dos componentes que precisam desse estado",
      "Elevar o componente para uma nova camada de renderização",
      "Transformar um componente funcional em um componente de classe",
      "Converter um componente de classe em um componente funcional",
      "Substituir o estado atual por um novo estado"
    ],
    resposta: 0
  },
  {
    id: 23,
    enunciado: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    opcoes: [
      "pop",
      "shift",
      "unshift",
      "splice",
      "remove"
    ],
    resposta: 0
  },
  {
    id: 24,
    enunciado: "O que significa 'this' em JavaScript?",
    opcoes: [
      "Refere-se ao objeto no qual a função atualmente executada foi chamada",
      "É uma palavra-chave reservada que refere-se ao próprio script",
      "Refere-se ao contexto global, sempre",
      "Refere-se ao valor retornado por uma função",
      "É uma variável usada para armazenar dados temporários"
    ],
    resposta: 0
  },
  {
    id: 25,
    enunciado: "Qual é a maneira correta de atualizar o estado em um componente de classe no React?",
    opcoes: [
      "this.setState()",
      "this.updateState()",
      "this.state = {}",
      "this.changeState()",
      "this.set()"
    ],
    resposta: 0
  },
  {
    id: 26,
    enunciado: "O que é 'prop drilling' em React?",
    opcoes: [
      "Passar dados de um componente para outro através de uma série de componentes intermediários",
      "Passar propriedades diretamente para o componente filho",
      "Atualizar o estado de um componente usando hooks",
      "Encapsular dados em um componente para isolá-los de componentes filhos",
      "Armazenar dados localmente no componente"
    ],
    resposta: 0
  },
  {
    id: 27,
    enunciado: "Qual é a diferença entre '==' e '===' em JavaScript?",
    opcoes: [
      "'==' compara apenas valores, enquanto '===' compara valores e tipos",
      "'==' compara valores e tipos, enquanto '===' compara apenas valores",
      "Ambos comparam apenas valores",
      "Ambos comparam apenas tipos",
      "'==' não existe em JavaScript"
    ],
    resposta: 0
  },
  {
    id: 28,
    enunciado: "Qual das opções abaixo não é um método de array em JavaScript?",
    opcoes: [
      "add",
      "map",
      "forEach",
      "reduce",
      "splice"
    ],
    resposta: 0
  },
  {
    id: 29,
    enunciado: "Como você pode evitar que um formulário seja enviado em JavaScript?",
    opcoes: [
      "Usando `event.preventDefault()`",
      "Usando `form.preventSubmit()`",
      "Usando `event.stopPropagation()`",
      "Usando `form.reset()`",
      "Usando `window.alert('')`"
    ],
    resposta: 0
  },
  {
    id: 30,
    enunciado: "Qual das seguintes opções é um método de string em JavaScript?",
    opcoes: [
      "charAt",
      "getChar",
      "findChar",
      "searchChar",
      "locateChar"
    ],
    resposta: 0
  }
];

export default perguntas

