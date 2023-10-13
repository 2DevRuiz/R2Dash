<script lang="ts" setup>
import { fetchApi } from '~/composables/fetchApi';
 fetchApi('/sanctum/csrf-cookie')
 const { data, error } = fetchApi(`/api/v1/current_user`)
if (error) {
     console.log(error)
} else {
     console.log(data)
}
</script>
<template>
    <div>
 
    </div>
</template>