<template>
    <!-- <div class="menu">
        <MenuItems
            v-for="(item, index) in menuTree" :key="index"
            :label="item.label" 
            :icon="item.icon"
            :depth="0"
            :data="item.children" 
        />
    </div> -->
    <ul class="flex flex-col py-4 space-y-1">
        <MenuItems v-for="(item, index) in menuTree" :key="index" :label="item.label" :icon="item.icon" :depth="0" :to="item.to"
            :items="item.children ? item.children : []" />
    </ul>
</template>
<script lang="ts" setup>
const menuTree:any = [
    {
        label: 'Dashboard',
        icon: 'layer-group',
        to:'/',
    },
    {
        label: 'Extension',
        icon: 'tty',   
    },
    {
        label: 'Media',
        icon: 'sliders',
    },
    {
        label: 'Admin',
        icon: 'toolbox',
        children: [
            {
                label: 'Users',
                icon: 'user-group',
                to: '/users',
            },
            {
                label: 'Roles',
                icon: 'shield-halved',
                to: '/roles',
            },
            {
                label: 'Tenants',
                icon: 'fa-arrows-down-to-people',
                to: '/tenants',
            }
        ]
    },
    {
        label: 'another',
        icon: 'fa-layer-group',
        children: [
            {
                label: 'Users',
                icon: 'user-group',
                to: '/users',
            },
            {
                label: 'Roles',
                icon: 'shield-halved',
                to: '/roles',
            },
            {
                label: 'Tenants',
                icon: 'fa-arrows-down-to-people',
                to: '/tenants',
            }
        ]
    }
]
</script>