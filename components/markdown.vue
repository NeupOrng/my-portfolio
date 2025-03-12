<template>
    <div class="custom-markdown w-full max-w-[800px]">
        <slot />
    </div>
</template>
<style>
.custom-markdown {
    
    h1 {
        @apply text-4xl font-bold my-2;
    }
    h2 {
        @apply text-3xl font-bold my-2;
    }
    ul {
        list-style-type: circle;
        list-style-position: inside;
        li ul {
            list-style-type: square;
        }
    }
    ol {
        list-style-type: decimal;
        list-style-position: inside;
        li ol {
            list-style-type: lower-alpha;
        }
    }
    pre {
        @apply p-2 my-2;
        background-color: var(--ui-secondary-background-color);
        overflow-x: auto;
        border-radius: 5px;
        code {
            @apply p-0;
        }   
    }
    code {
        @apply p-1;
        font-size: 12px;
        border-radius: 5px;
        background-color: var(--ui-secondary-background-color);
    }
}
</style>