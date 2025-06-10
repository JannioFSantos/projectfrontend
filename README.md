# Digital Store - E-commerce Frontend

Um site de e-commerce moderno e responsivo desenvolvido com HTML, CSS e JavaScript, baseado no design do Figma da Digital College.

https://janniofsantos.github.io/projectfrontend/

contem erro no deploy github pages
Home
![alt text](image.png)

Produtos
![alt text](image-1.png)

Catergoria
![alt text](image-2.png)

Meus pedidos
![alt text](image-3.png)


## 🚀 Funcionalidades

### 🏠 Página Inicial (index.html)
- Hero section com carousel automático de imagens
- Seções de coleções em destaque
- Categorias de produtos com ícones
- Grid de produtos em alta
- Oferta especial destacada
- Busca em tempo real nos produtos

### 🛍️ Página de Produtos (produtos.html)
- Listagem completa de produtos com filtros
- Sidebar com filtros por marca, categoria, gênero e estado
- Sistema de ordenação (relevância, preço, popularidade)
- Busca avançada com parâmetros URL
- Grid responsivo de produtos
- Contador de resultados dinâmico

### 👟 Página do Produto (produto.html)
- Galeria de imagens com navegação
- Informações detalhadas do produto
- Seleção de tamanho e cor
- Sistema de avaliações
- Produtos relacionados
- Breadcrumb de navegação

### 📂 Página de Categorias (categorias.html)
- Grid de categorias principais
- Subcategorias populares
- Categorias em alta com badges
- Navegação direta para produtos

### 📦 Página Meus Pedidos (meus-pedidos.html)
- Dashboard com estatísticas de pedidos
- Filtros por status (Todos, Entregues, Em Trânsito, Processando)
- Cards detalhados de cada pedido
- Ações por pedido (rastrear, avaliar, comprar novamente)

## 🔍 Sistema de Busca

### Funcionalidades de Busca
- **Busca Global**: Funciona em todas as páginas
- **Busca em Tempo Real**: Filtragem instantânea conforme digitação
- **Busca Avançada**: Suporte a parâmetros URL
- **Busca Inteligente**: Por nome do produto e marca
- **Case-insensitive**: Não diferencia maiúsculas/minúsculas

### Como Usar
1. Digite o termo na barra de pesquisa
2. Pressione Enter ou clique no ícone de busca
3. Será redirecionado para a página de produtos com os resultados
4. Na página inicial, a busca filtra produtos em tempo real


### Tipografia
- **Fonte Principal**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Hierarquia**: Títulos em negrito, textos em peso normal

### Componentes
- Cards com sombras suaves e bordas arredondadas
- Botões com estados hover e transições
- Grid responsivo com breakpoints
- Animações de scroll com Intersection Observer

## 📱 Responsividade

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

### Adaptações Mobile
- Menu de navegação adaptado
- Grid de produtos em coluna única
- Sidebar de filtros reposicionada
- Imagens otimizadas para telas menores

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com Grid e Flexbox
- **JavaScript ES6+**: Funcionalidades interativas
- **Intersection Observer API**: Animações de scroll
- **History API**: Navegação sem reload
- **URL Search Params**: Parâmetros de busca

## 📁 Estrutura de Arquivos

```
projeto-digital-store/
├── index.html              # Página inicial
├── produtos.html           # Listagem de produtos
├── produto.html            # Página individual do produto
├── categorias.html         # Página de categorias
├── meus-pedidos.html       # Página de pedidos do usuário
├── README.md               # Documentação
├── static/                 # Arquivos estáticos
│   ├── css/
│   │   └── style.css       # Estilos principais
│   └── js/
│       └── main.js         # JavaScript principal
├── assets/                 # Ícones e recursos
│   ├── logo-header.svg
│   ├── logo-footer.svg
│   ├── mini-cart.svg
│   └── ...
└── public/                 # Imagens dos produtos
    ├── home-slide-1.jpeg
    ├── product-thumb-1.jpeg
    ├── collection-1.png
    └── ...
```


## 🔧 Funcionalidades JavaScript

### Carousel de Imagens
```javascript
// Auto-advance carousel a cada 4 segundos
setInterval(nextSlide, 4000);
```

### Sistema de Busca
```javascript
// Busca em tempo real
document.querySelector('.search-input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim();
    if (searchTerm.length >= 2) {
        filterProducts(searchTerm);
    }
});
```

### Filtros de Produtos
```javascript
// Filtros funcionais na página de produtos
function filterProducts(searchTerm) {
    const products = document.querySelectorAll('.product-card');
    // Lógica de filtragem...
}
```

### Animações de Scroll
```javascript
// Intersection Observer para animações
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
```

## 🎯 Recursos Implementados

### ✅ Funcionalidades Principais
- [x] Layout responsivo completo
- [x] Sistema de busca funcional
- [x] Navegação entre páginas
- [x] Filtros de produtos
- [x] Galeria de imagens
- [x] Carrinho de compras (simulado)
- [x] Sistema de avaliações
- [x] Animações e transições

### ✅ UX/UI
- [x] Design moderno e limpo
- [x] Efeitos hover avançados
- [x] Feedback visual para ações
- [x] Estados de loading
- [x] Mensagens de erro/sucesso
- [x] Breadcrumbs de navegação

### ✅ Performance
- [x] Imagens otimizadas
- [x] CSS minificado inline
- [x] JavaScript otimizado
- [x] Lazy loading de elementos
- [x] Transições suaves

