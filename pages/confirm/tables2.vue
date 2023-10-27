<!-- <template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Permiso</th>
            <th>Lectura</th>
            <th>Edición</th>
            <th>Creación</th>
            <th>Eliminación</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(permiso, index) in permisos" :key="index">
            <td @click="togglePermiso(permiso)">
              <input type="checkbox" v-model="permiso.seleccionado" />
              {{ permiso.nombre }}
            </td>
            <td>
              <input type="checkbox" v-model="permiso.detalles.lectura" @change="updatePermisoEstado(permiso)" />
            </td>
            <td>
              <input type="checkbox" v-model="permiso.detalles.edicion" @change="updatePermisoEstado(permiso)" />
            </td>
            <td>
              <input type="checkbox" v-model="permiso.detalles.creacion" @change="updatePermisoEstado(permiso)" />
            </td>
            <td>
              <input type="checkbox" v-model="permiso.detalles.eliminacion" @change="updatePermisoEstado(permiso)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue';
  
  interface Permiso {
    nombre: string;
    seleccionado: boolean;
    detalles: {
      lectura: boolean;
      edicion: boolean;
      creacion: boolean;
      eliminacion: boolean;
    };
  }
  
  const permisos: Permiso[] = reactive([
    {
      nombre: 'Manejo de usuarios',
      seleccionado: false,
      detalles: {
        lectura: false,
        edicion: false,
        creacion: false,
        eliminacion: false,
      },
    },
    {
      nombre: 'Roles',
      seleccionado: false,
      detalles: {
        lectura: false,
        edicion: false,
        creacion: false,
        eliminacion: false,
      },
    },
    // Otros permisos ...
  ]);
  
  function togglePermiso(permiso: Permiso) {
    permiso.seleccionado = !permiso.seleccionado;
  
    if (permiso.seleccionado) {
      for (const key in permiso.detalles) {
        permiso.detalles[key] = true;
      }
    } else {
      for (const key in permiso.detalles) {
        permiso.detalles[key] = false;
      }
    }
  }
  
  function updatePermisoEstado(permiso: Permiso) {
    const detalles = permiso.detalles;
    const seleccionado = Object.values(detalles).every((valor) => valor === true);
    permiso.seleccionado = seleccionado;
  }
  </script> -->
<!--   
<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Permiso</th>
                    <th>Lectura</th>
                    <th>Edición</th>
                    <th>Creación</th>
                    <th>Eliminación</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(permiso, index) in permisos" :key="index">
                    <td @click="togglePermiso(permiso)">
                        <input type="checkbox" v-model="permiso.seleccionado" />
                        {{ permiso.nombre }}
                    </td>
                    <td>
                        <input type="checkbox" v-model="permiso.detalles.lectura" @change="updateForm(permiso)" />
                    </td>
                    <td>
                        <input type="checkbox" v-model="permiso.detalles.edicion" @change="updateForm(permiso)" />
                    </td>
                    <td>
                        <input type="checkbox" v-model="permiso.detalles.creacion" @change="updateForm(permiso)" />
                    </td>
                    <td>
                        <input type="checkbox" v-model="permiso.detalles.eliminacion" @change="updateForm(permiso)" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup lang="ts">
import { reactive, ref } from 'vue';

interface Permiso {
    nombre: string;
    seleccionado: boolean;
    detalles: {
        lectura: boolean;
        edicion: boolean;
        creacion: boolean;
        eliminacion: boolean;
    };
}

const permisos: Permiso[] = reactive([
    {
        nombre: 'Manejo de usuarios',
        seleccionado: false,
        detalles: {
            lectura: false,
            edicion: false,
            creacion: false,
            eliminacion: false,
        },
    },
    // Otros permisos ...
]);

const form = ref({
    permissions: [],
});

function togglePermiso(permiso: Permiso) {
    permiso.seleccionado = !permiso.seleccionado;

    if (permiso.seleccionado) {
        for (const key in permiso.detalles) {
            permiso.detalles[key] = true;
        }
    } else {
        for (const key in permiso.detalles) {
            permiso.detalles[key] = false;
        }
    }

    updateForm(permiso);
}

function updateForm(permiso: Permiso) {
  const detalles = permiso.detalles;

  if (detalles.lectura || detalles.edicion || detalles.creacion || detalles.eliminacion) {
    // Agregar detalles al formulario solo si al menos uno de los checkboxes de detalles está seleccionado
    if (!form.value.permissions.some((detalle) => areDetailsEqual(detalle, detalles))) {
      form.value.permissions.push({ ...detalles });
    }
  } else {
    // Eliminar detalles del formulario si ninguno de los checkboxes de detalles está seleccionado
    const index = form.value.permissions.findIndex((detalle) => areDetailsEqual(detalle, detalles));
    if (index !== -1) {
      form.value.permissions.splice(index, 1);
    }
  }
}

function areDetailsEqual(detalle1, detalle2) {
  return (
    detalle1.lectura === detalle2.lectura &&
    detalle1.edicion === detalle2.edicion &&
    detalle1.creacion === detalle2.creacion &&
    detalle1.eliminacion === detalle2.eliminacion
  );
}
</script> -->
<!-- <template>
    <div>
      <div v-for="(item, index) in items" :key="index">
        <label>
          {{ item.name }}
          <input type="checkbox" v-model="item.checked" @change="toggleAllSubItems(item)" />
        </label>
        <div v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
          <label>
            <input type="checkbox" v-model="selectedItems" :value="subItem" />
            {{ subItem }}
          </label>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref([
    {
      name: 'Item 1',
      checked: false,
      subItems: ['Subitem 1', 'Subitem 2', 'Subitem 3', 'Subitem 4'],
    },
    {
      name: 'Item 2',
      checked: false,
      subItems: ['Subitem 1', 'Subitem 2', 'Subitem 3', 'Subitem 4'],
    },
  ]);
  
  const selectedItems = ref([]);
  
  function toggleAllSubItems(item) {
    if (item.checked) {
      selectedItems.value = selectedItems.value.concat(item.subItems);
    } else {
      selectedItems.value = selectedItems.value.filter((selectedItem) => !item.subItems.includes(selectedItem));
    }
  }
  </script> -->
  <template>	
	<div>
		<button 
			class="btn btn-info dropdown dropdown-toggle" 
			type="button" 
			id="setVisibility" 
			data-mdb-toggle="dropdown" 
			aria-expanded="false" 
		>
   			TABLE FIELD MANAGEMENT 
		</button>

		<ul 
			class="dropdown-menu prevent-close py-1 px-2" 
			aria-labelledby="setVisibility"
		>
			<li>
				<div class="layout-header pt-2 text-center">
					<h6>Hide/Show</h6>
				</div>

				<div 
					v-for="(field, i) in fields" 
					:key="i" 
					class="form-check form-switch"
				>
					<input 
						v-model="field.visible"
						class="form-check-input" 
						type="checkbox" 
						id="isHidden"
						@change="getData()"
					>
					<label 
						class="form-check-label" 
						for="isHidden"
					>
						{{ field.name }}
					</label>
				</div>
			</li>
		</ul>

		<table>
			<tr>
				<th 
					v-for="(header, i) in headers" 
					:key="i" 
					scope="col"
				>
					{{ header }}
				</th>
			</tr>

			<tr
				v-for="(lead, i) in leads"
				:key="i"
			>
				<td
					v-for="(field, j) in lead"
					:key="j"
				>
					{{ field }}
				</td>
			</tr>
		</table>


	</div>
</template>

<script>
	export default{
		data() {
			return {
				leads: [],
				headers: [],
				fields: [
					{name: 'first_name', alias: 'First Name', visible: true},
					{name: 'last_name', alias: 'Last Name', visible: true},
					{name: 'email', alias: 'Email', visible: false},
				]
			}
		},

		methods: {
			getData() {
				axios.post('/getLeads', {fields: this.fields}).then(response => {
					this.leads = response.data;

					this.headers = this.fields.map(item => {
						if (item.visible) {
							return item.alias;
						}
					});

				});
			},
		},

		mounted() {
			this.getData();
		}
	}
</script>
