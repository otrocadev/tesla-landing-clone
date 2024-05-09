<template>
  <div :class="{ 'backdrop-blur-sm w-screen h-screen': menuIsActive }">
    <header @mouseleave="deactiveMenuIsActive()">
      <div
        class="text-white py-4 px-10 flex items-center top-0 w-screen justify-between absolute z-40"
      >
        <div
          class="flex flex-grow basis-0"
          :class="{ 'text-black': menuIsActive }"
        >
          <logo />
        </div>

        <nav :class="{ 'text-black': menuIsActive }">
          <ul
            @mouseover="activeMenuIsActive()"
            class="flex text-sm [&>li>a]:px-4 [&>li>a]:py-2 [&>li]:hover:"
          >
            <li
              v-for="cathegory in menuData"
              :key="cathegory.name"
              class="py-2 rounded hover:bg-slate-300 hover:text-black"
            >
              <a @mouseover="passCathegory(cathegory)" href="#">
                {{ cathegory.name }}
              </a>
            </li>
          </ul>
        </nav>

        <nav
          class="flex flex-grow basis-0 justify-end"
          :class="{ 'text-black': menuIsActive }"
        >
          <nav-icons />
        </nav>
      </div>
      <Transition name="drop">
        <menu-section
          class="absolute w-screen top-0 pt-24"
          v-if="menuIsActive"
          :key="cathegorySelected"
          :cathegoryInfo="cathegorySelected"
        />
      </Transition>
    </header>
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
import MenuSection from "./MenuSection.vue";
import NavIcons from "./NavIcons.vue";

import { ref } from "vue";

const menuData = [
  {
    name: "Vehículos",
    elements: [
      {
        name: "Model S",
        img: "./header-menu/models-menu.avif",
        url: "#",
      },
      {
        name: "Model 3",
        img: "./header-menu/model3-menu.avif",
        url: "#",
      },
      {
        name: "Model X",
        img: "./header-menu/modelx-menu.avif",
        url: "#",
      },
      {
        name: "Model Y",
        img: "./header-menu/modely-menu.avif",
        url: "#",
      },
      {
        name: "Cybertruck",
        img: "./header-menu/cybertruck-menu.avif",
        url: "#",
      },
      {
        name: "Necesito ayuda para elegir",
        img: "./header-menu/choose-menu.avif",
        url: "#",
      },
    ],
    related: [
      {
        name: "Prueva de conducción",
        url: "#",
      },
      {
        name: "Tasación",
        url: "#",
      },
      {
        name: "Vehículos preconfigurados",
        url: "#",
      },
      {
        name: "Ocasión",
        url: "#",
      },
      {
        name: "Coche de empresa",
        url: "#",
      },
      {
        name: "Roadster",
        url: "#",
      },
    ],
  },

  {
    name: "Energia",
    elements: [
      {
        name: "Powerwall",
        img: "./header-menu/powerwall-menu.avif",
        url: "#",
      },
      {
        name: "Megapack",
        img: "./header-menu/megapack-menu.avif",
        url: "#",
      },
    ],
    related: [
      {
        name: "Soporte",
        url: "#",
      },
      {
        name: "Sea un socio de Tesla",
        url: "#",
      },
      {
        name: "Historias de clientes",
        url: "#",
      },
      {
        name: "Utilities",
        url: "#",
      },
      {
        name: "Comercial",
        url: "#",
      },
    ],
  },

  {
    name: "Carga",
    elements: [
      {
        name: "Carga",
        img: "./header-menu/chargingcar-menu.avif",
        url: "#",
      },
      {
        name: "Carga en casa",
        img: "./header-menu/charger-menu.avif",
        url: "#",
      },
      {
        name: "Supercarga",
        img: "./header-menu/supercharger-menu.avif",
        url: "#",
      },
    ],
    related: [
      {
        name: "Votación de Supercargador",
        url: "#",
      },
      {
        name: "Instale un Supercargador",
        url: "#",
      },
      {
        name: "Instale Wall Connectors",
        url: "#",
      },
    ],
  },
  {
    name: "Descubrir",
    discober: [
      {
        name: "Recursos",
        links: [
          {
            name: "Prueba de conducción",
            url: "#",
          },
          {
            name: "Historias de clientes",
            url: "#",
          },
          {
            name: "Eventos",
            url: "#",
          },
          {
            name: "Video guías",
            url: "#",
          },
        ],
      },
      {
        name: "Servicions de ubicación",
        links: [
          {
            name: "Dónde estamos",
            url: "#",
          },
          {
            name: "Encuentre un instalador certificado",
            url: "#",
          },
          {
            name: "Buscar un taller de carrocería",
            url: "#",
          },
        ],
      },
      {
        name: "Persona Jurídica (Empresa)",
        links: [
          {
            name: "Acerca de",
            url: "#",
          },
          {
            name: "Empleo",
            url: "#",
          },
          {
            name: "Relaciones con los inversores",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    name: "Tienda",
    elements: [
      {
        name: "Carga",
        img: "./header-menu/charger-menu.avif",
        url: "#",
      },
      {
        name: "Accesorios para el vehículo",
        img: "./header-menu/accesories-menu.avif",
        url: "#",
      },
      {
        name: "Ropa",
        img: "./header-menu/clothing-menu.avif",
        url: "#",
      },
      {
        name: "Estilo de vida",
        img: "./header-menu/lifestyle-menu.avif",
        url: "#",
      },
    ],
  },
];

const menuIsActive = ref(false);
const cathegorySelected = ref();

const activeMenuIsActive = function () {
  menuIsActive.value = true;
};

const deactiveMenuIsActive = function () {
  menuIsActive.value = false;
  cathegorySelected.value = ref(NaN);
};

const passCathegory = function (menuCathegory) {
  cathegorySelected.value = menuCathegory;
};
</script>

<style>
.drop-enter-active {
  animation: wrap-up 1s;
  transform-origin: top center;
}
.drop-leave-active {
  animation: wrap-up 1s reverse;
  transform-origin: top center;
}

@keyframes wrap-up {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
