const products = [
  {
    id: 1,
    name: "Auriculares Inalámbricos Premium",
    price: 89900,
    oldPrice: 129900,
    category: "Electrónica",
    image: "imagine_images/h6jMQ.jpg",
    description: "Sonido de alta fidelidad con cancelación de ruido activa. Batería de 30 horas y diseño ergonómico premium.",
    featured: true
  },
  {
    id: 2,
    name: "Smartwatch Elegante",
    price: 149900,
    category: "Electrónica",
    image: "imagine_images/Fz7sv.jpg",
    description: "Monitorización avanzada de salud, GPS integrado y diseño minimalista resistente al agua.",
    featured: true
  },
  {
    id: 3,
    name: "Set de Tazas de Cerámica",
    price: 39900,
    category: "Hogar",
    image: "imagine_images/QJjnC.jpg",
    description: "Tres tazas artesanales en tonos neutros. Perfectas para café o té, acabado mate de alta calidad.",
    featured: true
  },
  {
    id: 4,
    name: "Lámpara de Escritorio Moderna",
    price: 59900,
    category: "Hogar",
    image: "imagine_images/R2NWA.jpg",
    description: "Base de madera natural y brazo articulado. Iluminación cálida regulable para tu espacio de trabajo.",
    featured: true
  },
  {
    id: 5,
    name: "Kit de Cuidado Facial Lumière",
    price: 79900,
    oldPrice: 99900,
    category: "Belleza",
    image: "imagine_images/v1buv.jpg",
    description: "Rutina completa de skincare premium. Hidratación profunda y resultados visibles desde la primera semana.",
    featured: true
  },
  {
    id: 6,
    name: "Camiseta Básica Premium",
    price: 34900,
    category: "Moda",
    image: "imagine_images/QdOAw.jpg",
    description: "Algodón de alta calidad, corte moderno y cómodo para uso diario.",
    featured: false
  },
  {
    id: 7,
    name: "Mochila Urbana Resistente",
    price: 74900,
    category: "Moda",
    image: "imagine_images/plkh3.jpg",
    description: "Compartimento para laptop, materiales impermeables y diseño minimalista.",
    featured: false
  },
  {
    id: 8,
    name: "Organizador de Escritorio",
    price: 28900,
    category: "Hogar",
    image: "imagine_images/VJD18.jpg",
    description: "Mantiene tu espacio ordenado. Diseño compacto y elegante.",
    featured: false
  },
  {
    id: 9,
    name: "Cargador Rápido 30W",
    price: 24900,
    category: "Electrónica",
    image: "imagine_images/h6jMQ.jpg",
    description: "Carga tu celular en minutos. Compatible con la mayoría de dispositivos.",
    featured: false
  },
  {
    id: 10,
    name: "Serum Hidratante Facial",
    price: 45900,
    category: "Belleza",
    image: "imagine_images/v1buv.jpg",
    description: "Ácido hialurónico y vitamina C. Piel más luminosa en 7 días.",
    featured: false
  }
];

const categories = [
  { name: "Hogar", image: "imagine_images/VJD18.jpg", slug: "hogar" },
  { name: "Electrónica", image: "imagine_images/plkh3.jpg", slug: "electronica" },
  { name: "Belleza", image: "imagine_images/v1buv.jpg", slug: "belleza" },
  { name: "Moda", image: "imagine_images/QdOAw.jpg", slug: "moda" }
];
