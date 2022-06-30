<template>
    <header class="l-header">
        <div class="l-header__container">
            <h1 class="l-header__logo">
                <nuxt-link to="/" class="l-header__logo-link">
                    Easy Log
                </nuxt-link>
            </h1>

            <button type="button" class="l-header-menu-trigger">
                <fa :icon="faEllipsis" />
            </button>
        </div>
    </header>
</template>

<script>
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
export default {
    data() {
        return {};
    },
    methods: {},
    computed: {
        faEllipsis() {
            return faEllipsis;
        },
    },
};
</script>
