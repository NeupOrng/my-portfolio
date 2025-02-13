<template>
    <div>
        <UBadge>Country</UBadge>
        <div class="flex flex-col gap-3">
            <div v-for="(country, index) in countries" key="index">
                <UCard>
                    <template #header>
                        <Placeholder class="h-8" >
                            {{ country.name.common }}
                        </Placeholder>
                    </template>

                    <div class="grid grid-cols-2">
                        <div>Capital</div>
                        <div>{{ country.capital }}</div>

                        <div>Population</div>
                        <div>{{ country.population }}</div>
                    </div>

                    <template #footer>
                    <div>
                        <p>Language</p>
                        <div class="flex gap-1">
                            <UBadge 
                                v-for="(value, key) in country.languages" 
                                key="key"
                            >
                                {{ value }}
                            </UBadge>
                        </div>
                    </div>
                    </template>
                </UCard>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const countries = ref([]);
console.log('index page:', nuxtApp)
const data = await $fetch('/api/country');
countries.value = data
console.log(countries)
</script>